import React, { useEffect, useState } from 'react';
import '../../../../assets/css/react-trello.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Board from 'react-trello-ts';
import { FormState } from 'react-trello-ts/dist/components/NewCardForm';
import { BoardData, Lane, Card } from 'react-trello-ts/dist/types/Board';
import * as cardSlice from '../../../../redux/reducers/cardSlice';
import {
  findListsByTableId,
  updateDragList,
  createList,
} from '../../../../redux/reducers/listSlice';
import { cardSelector, listSelector } from '../../../../redux/selectors';
import {
  CardDB,
  CardForm,
  CardPatchTest,
} from '../../../../types/Card.type';
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
  const [dataDp, setDataDp] = useState<BoardData>(initDataState);
  const [currentCard, setCurrentCard] = useState<Card | null>(null)

  // get lists and cards on API
  useEffect(() => {
    if (!tableId) return;
    dispatch(findListsByTableId(parseInt(tableId)));
    dispatch(cardSlice.findAllCards());
  }, [tableId]);

  const lists = useSelector(listSelector).lists;
  const cards = useSelector(cardSelector).listCards;

  // Set data react trello
  useEffect(() => {
    let sortedLists = lists;
    // sortedLists.sort((a, b) => a.order - b.order);
    if (sortedLists.length > 0 && cards.length > 0) {
      let arr: Lane[] = [];
      for (let i = 0; i < sortedLists.length; i++) {
        let filterCards = filterCartByListId(sortedLists[i].id);
        let lane: Lane = {
          id: `${sortedLists[i].id}`,
          title: sortedLists[i].name,
          label: '',
          cards: exchangeData(filterCards),
        };
        arr.push(lane);
        setDataDp({
          lanes: arr,
        });
      }
    }
  }, [lists, cards]);

  // filter card by list id
  const filterCartByListId = (listId: number): CardDB[] => {
    return cards
      .filter((c) => c.listId === listId)
      // .sort((a, b) => a.order - b.order);
  };

  // exchange data
  const exchangeData = (listCard: CardDB[]): Card[] => {
    let arr: Card[] = [];
    for (let i = 0; i < listCard.length; i++) {
      let card: Card = {
        id: `${listCard[i].id}`,
        laneId: `${listCard[i].listId}`,
        title: listCard[i].name,
        description: '',
        label: '',
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
    let lane = dataDp.lanes.find((lane) => lane.id === laneId);
    if (!lane) return [];
    return lane.cards || [];
  };

  const onCardMoveAcrossLanes = (
    fromLaneId: string,
    toLaneId: string,
    cardId: string,
    index: string
  ) => {
    let toLaneCards: Card[] = findCardsByLaneId(toLaneId);
    if (!toLaneCards) return;
    let fromLaneCards: Card[] = findCardsByLaneId(fromLaneId);
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
    let dragLane = dataDp.lanes[removeIndex];
    let dragLaneId = dragLane.id;
    let newOrder = addedIndex;
    let dragList: DragList = {
      id: +dragLaneId,
      order: newOrder,
    };
    dispatch(updateDragList(dragList));
    let beDraggedLane = dataDp.lanes[addedIndex];
    let beDraggedLaneId = beDraggedLane.id;
    let newOrderBeDrag = removeIndex;
    let beDragList: DragList = {
      id: +beDraggedLaneId,
      order: newOrderBeDrag,
    };
    dispatch(updateDragList(beDragList));
  };

  // create list
  const createListFn = (newList: FormState) => {
    let listF: ListForm = {
      name: newList.title,
      tableId: Number(tableId),
      order: lists.length,
    };
    dispatch(createList(listF));
  };

  // open modal

  const handleClickModal = (cardId: string, card: Card) => {
    setCurrentCard(card)
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
        handleDragEnd={(cardId, sourceLaneId, targetLaneId) => {}}
        handleDragStart={(cardId, landId) => {}}
        handleLaneDragEnd={(removedIndex, addedIndex, payload) => {
          dragList(+removedIndex, +addedIndex);
        }}
        onLaneAdd={(params) => createListFn(params)}
        onCardMoveAcrossLanes={onCardMoveAcrossLanes}
        onDataChange={(data) => {
          console.log(data);
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
        editLaneTitle
        draggable
        data={dataDp}
      />
      
      <CardModal card={currentCard} onClose={() => setCurrentCard(null)} />
    </div>
  );
}
