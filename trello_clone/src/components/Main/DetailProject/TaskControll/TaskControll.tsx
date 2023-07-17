import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Board from 'react-trello-ts';
import { BoardData, Lane, Card } from 'react-trello-ts/dist/types/Board';
import * as cardSlice from '../../../../redux/reducers/cardSlice';
import { findListsByTableId } from '../../../../redux/reducers/listSlice';
import { cardSelector, listSelector } from '../../../../redux/selectors';
import { CardDB, CardPatch } from '../../../../types/Card.type';

const initDataState: BoardData = {
  lanes: [],
};

export default function TaskControll() {
  const dispatch = useDispatch();
  const { tableId } = useParams();
  const [dataDp, setDataDp] = useState<BoardData>(initDataState);

  // get lists and cards on API
  useEffect(() => {
    if (tableId) {
      dispatch(findListsByTableId(parseInt(tableId)));
      dispatch(cardSlice.findAllCards());
    }
  }, []);

  const lists = useSelector(listSelector).lists;
  const cards = useSelector(cardSelector).listCards;

  // Set data react trello
  useEffect(() => {
    if (lists.length > 0 && cards.length > 0) {
      let arr: Lane[] = [];
      for (let i = 0; i < lists.length; i++) {
        let filterCards = filterCartByListId(lists[i].id);
        let lane: Lane = {
          id: `${lists[i].id}`,
          title: lists[i].name,
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
    return cards.filter((c) => c.listId === listId);
  };

  // exchange data
  const exchangeData = (listCard: CardDB[]): Card[] => {
    let arr: Card[] = [];
    for (let i = 0; i < listCard.length; i++) {
      let card: Card = {
        id: `${listCard[i].id}`,
        laneId: `${listCard[i].listId}`,
        title: listCard[i].name,
        description: 'anh Nammmm',
        label: '',
        draggable: true,
      };
      arr.push(card);
    }
    return arr;
  };

  const updateCard = (cardPatch: CardPatch) => {
    dispatch(cardSlice.updateCard(cardPatch));
  };
  useEffect(() => {
    console.log(dataDp);
    console.log(lists);
    
  }, [dataDp]);

  return (
    <Board
      handleLaneDragEnd={(removedIndex, addedIndex, payload) => {
        console.log(removedIndex, addedIndex, payload);
      }}
      handleDragEnd={(
        cardId,
        sourceLaneId,
        targetLaneId,
        position,
        cardDetails
      ) => {
        console.log(dataDp.lanes.find(l => l.id === targetLaneId))
      }}
      onCardMoveAcrossLanes={(fromLaneId, toLaneId, cardId, index) => {
        let cardPatch: CardPatch = {
          listId: parseInt(toLaneId),
          id: parseInt(cardId),
        };
        updateCard(cardPatch);
      }}
      onDataChange={(data) => {
        console.log(data);
      }}
      draggable
      editable
      cardDraggable
      data={dataDp}
    />
  );
}
