import React from 'react';
import {DragDropContext, DropResult} from 'react-beautiful-dnd';
import styled from 'styled-components';
import {useRecoilState} from 'recoil';
import {toDoState} from '../dndAtoms';
import Board from './Board';

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
`;

const Dnd = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({destination, source, draggableId}: DropResult) => {
    console.log(destination, source);
    if (!destination) {
      return;
    }

    if (destination?.droppableId === source.droppableId) {
      // same board movement.
      setToDos(allBoards => {
        const boardCopy = [...allBoards[source.droppableId]];
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination?.index, 0, draggableId);
        return {
          ...allBoards,
          [source.droppableId]: boardCopy,
        };
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId, index) => (
            <Board key={`_${boardId}`} toDos={toDos[boardId]} boardId={boardId} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
};

export default Dnd;

// placeholder 가 drag 를 하는 동안 크기가 달라지지 않게 유지
