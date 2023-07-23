import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import '../../../../assets/css/react-trello.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Board from 'react-trello-ts';
import { FormState } from 'react-trello-ts/dist/components/NewCardForm';
import { BoardData, Lane, Card } from 'react-trello-ts/dist/types/Board';
import * as cardSlice from '../../../../redux/reducers/cardSlice';
import * as listSlice from '../../../../redux/reducers/listSlice';
import { cardSelector, listSelector } from '../../../../redux/selectors';
import { CardDB, CardForm, CardPatchTest } from '../../../../types/Card.type';
import { DragList, ListForm } from '../../../../types/List.type';
import CardFormComp from './CardFormComp';
import AddLinkCard from './AddLinkCard';
import NewLaneSection from './NewLaneSection';
import NewLaneForm from './NewLaneForm';

export default memo(function BoardComp() {
  const dispatch = useDispatch();
  const { tableId } = useParams();
  const [data, setData] = useState<BoardData>({
    lanes: [],
  });
  const [currentCard, setCurrentCard] = useState<string | null>(null);
  useEffect(() => {
    console.log('meow meow', data);
  }, [data]);

  // get lists and cards on API
  useEffect(() => {
    dispatch(cardSlice.findAllCards());
    if (!tableId) return;
    dispatch(listSlice.findListsByTableId(parseInt(tableId)));
  }, []);

  const lists = useSelector(listSelector).lists;
  const cards = useSelector(cardSelector).listCards;

  // filter card by list id
  const filterCartByListId = (listId: number): CardDB[] => {
    return cards.filter((c) => c.listId === listId);
  };

  // exchange data
  const exchangeData = (listCard: CardDB[]): Card[] => {
    let arr: Card[] = [];
    for (let i = 0; i < listCard.length; i++) {
      let card: Card = {
        id: listCard[i].id.toString(),
        laneId: `${listCard[i].listId}`,
        title: listCard[i].name,
        label: '',
        draggable: true,
        order: listCard[i].order,
      };
      arr.push(card);
      arr.sort((a, b) => a.order - b.order);
    }
    console.log('card ------> ', arr);

    return arr;
  };

  // drag and data
  const checkExist = (card: Card, arr: Card[]) => {
    return arr.find((c) => c.id === card.id);
  };

  function move(arr: Card[], old_index: number, new_index: number) {
    while (old_index < 0) {
      old_index += arr.length;
    }
    while (new_index < 0) {
      new_index += arr.length;
    }
    if (new_index >= arr.length) {
      var k = new_index - arr.length;
      while (k-- + 1) {
        // arr.push();
      }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr;
  }

  // Set data react trello
  useEffect(() => {

    let arr: Lane[] = [];

    for (let i = 0; i < lists.length; i++) {
      let filterCards = filterCartByListId(lists[i].id);
      let lane: Lane = {
        id: lists[i].id.toString(),
        title: lists[i].name,
        label: '',
        cards: exchangeData(filterCards),
        order: lists[i].order,
      };
      arr.push(lane);
      arr.sort((a, b) => a.order - b.order);
      console.log('lane ----->', arr);

      setData({
        lanes: arr,
      });
    }
  }, [lists, cards]);

  // add card
  const createCard = (card: Card) => {
    console.log('create card');

    let laneId = card.laneId;
    if (!laneId) return;

    let cardArr = findCardsByLaneId(laneId);
    if (!cardArr) return;

    let newCard: CardForm = {
      name: card.title ? card.title : '',
      listId: Number(card.laneId),
      order: cardArr.length,
    };
    dispatch(cardSlice.createCard(newCard));
  };

  // open modal
  const handleClickModal = (cardId: string, metadata: any, card: Card) => {
    dispatch(cardSlice.findCardById(+cardId));
  };

  const findCardsByLaneId = (laneId: string): Card[] => {
    let lane = data.lanes.find((lane) => lane.id === laneId);
    if (!lane) return [];
    return lane.cards || [];
  };

  const onCardMoveAcrossLanes = (
    fromLaneId: string,
    toLaneId: string,
    cardId: string,
    index: string
  ) => {
    console.log('on card move across lanes');

    let toLaneCards: Card[] = findCardsByLaneId(toLaneId);
    if (!toLaneCards) return;
    let fromLaneCards: Card[] = findCardsByLaneId(fromLaneId);
    if (!fromLaneCards) return;
    let selectCard = fromLaneCards.find((card) => card.id === cardId);
    if (!selectCard) return;

    selectCard.laneId = toLaneId;
    if (checkExist(selectCard, toLaneCards)) {
      move(toLaneCards, toLaneCards.indexOf(selectCard), parseInt(index));
    } else {
      toLaneCards.splice(parseInt(index), 0, selectCard);
      fromLaneCards.splice(fromLaneCards.indexOf(selectCard), 1);
    }

    for (let i = 0; i < toLaneCards.length; i++) {
      let listTemp: number = Number(toLaneCards[i].laneId);
      let cardU: CardPatchTest = {
        id: +toLaneCards[i].id,
        name: toLaneCards && toLaneCards[i].name,
        order: i,
        listId: listTemp,
      };
      dispatch(cardSlice.updateCardTest(cardU));
    }
  };

  // drag list
  const dragList = (removeIndex: number, addedIndex: number) => {
    let dragLane = data.lanes[removeIndex];
    let dragLaneId = dragLane.id;
    let newOrder = addedIndex;
    let dragList: DragList = {
      id: +dragLaneId,
      order: newOrder,
    };
    dispatch(listSlice.updateDragList(dragList));
    let beDraggedLane = data.lanes[addedIndex];
    let beDraggedLaneId = beDraggedLane.id;
    let newOrderBeDrag = removeIndex;
    let beDragList: DragList = {
      id: +beDraggedLaneId,
      order: newOrderBeDrag,
    };
    dispatch(listSlice.updateDragList(beDragList));
  };

  // create list
  const createListFn = (newList: FormState) => {
    let listF: ListForm = {
      name: newList.title,
      tableId: Number(tableId),
      order: lists.length,
    };
    dispatch(listSlice.createList(listF));
  };

  {
    currentCard
      ? console.log('re-render after click ------> ', data)
      : console.log('chưa click');
  }
  const [Pug, setPug] = useState(false);

  return (
    <div>
      <button onClick={() => setPug(true)}>test</button>

      <Board
        style={{ backgroundColor: 'transparent' }}
        components={{
          NewCardForm: CardFormComp,
          AddCardLink: AddLinkCard,
          NewLaneSection: NewLaneSection,
          NewLaneForm: NewLaneForm,
        }}
        handleLaneDragEnd={(removedIndex, addedIndex, payload) => {
          dragList(+removedIndex, +addedIndex);
        }}
        onLaneAdd={(params) => createListFn(params)}
        handleDragEnd={() => {}}
        onCardMoveAcrossLanes={onCardMoveAcrossLanes}
        onDataChange={(data) => {
          console.log('new data -----> ', data);
        }}
        onCardClick={handleClickModal}
        onCardAdd={(card) => createCard(card)}
        laneDraggable
        cardDraggable
        editable
        canAddLanes
        draggable
        data={data}
      />
    </div>
  );
});
