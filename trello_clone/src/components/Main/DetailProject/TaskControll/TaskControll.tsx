import React, { useEffect, useState } from 'react';
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
import CardModal from '../../Modal/CardModal/CardModal';

const initDataState: BoardData = {
  lanes: [],
};

export default function TaskControll() {
  const dispatch = useDispatch();
  const { tableId } = useParams();
  const [data, setData] = useState<BoardData>(initDataState);
  const [currentCard, setCurrentCard] = useState<string | null>(null);

  // get lists and cards on API
  useEffect(() => {
    if (!tableId) return;
    dispatch(listSlice.findListsByTableId(parseInt(tableId)));
    dispatch(cardSlice.findAllCards());
    return;
  }, [tableId]);

  const lists = useSelector(listSelector).lists;
  const cards = useSelector(cardSelector).listCards;

  // Set data react trello
  useEffect(() => {
    console.log('data change');
    let sortedLists = [...lists].sort((a, b) => a.order - b.order);

    let arr: Lane[] = [];
    for (let i = 0; i < sortedLists.length; i++) {
      let filterCards = filterCartByListId(sortedLists[i].id);
      let lane: Lane = {
        id: `${sortedLists[i].id}`,
        title: sortedLists[i].name,
        cards: exchangeData(filterCards),
      };
      arr.push(lane);
      console.log('before set state', arr);
      setData({
        lanes: arr,
      });
    }
  }, [lists, cards]);

  // filter card by list id
  const filterCartByListId = (listId: number): CardDB[] => {
    let cardsDB = cards.filter((c) => c.listId === listId);
    return [...cardsDB].sort((a, b) => a.order - b.order);
  };

  // exchange data
  const exchangeData = (listCard: CardDB[]): Card[] => {
    let arr: Card[] = [];
    for (let i = 0; i < listCard.length; i++) {
      let card: Card = {
        id: `${listCard[i].id}`,
        laneId: `${listCard[i].listId}`,
        title: listCard[i].name,
        draggable: true,
      };
      arr.push(card);
    }
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

  // open modal
  const handleClickModal = (cardId: string, card: Card) => {
    console.log('click modal');
    setCurrentCard(cardId);
  };

  return (
    <div>
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
        onCardClick={(
          cardId: Card['id'],
          metadata: {
            id: string;
          },
          card: Card
        ) => handleClickModal(cardId, card)}
        onCardAdd={(card) => createCard(card)}
        laneDraggable
        cardDraggable
        editable
        canAddLanes
        draggable
        data={data}
      />

      <CardModal cardId={currentCard} onClose={() => setCurrentCard(null)} />
    </div>
  );
}
