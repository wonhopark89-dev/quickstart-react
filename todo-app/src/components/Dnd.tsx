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
        // 수정이 발생한 보드만 복사
        const boardCopy = [...allBoards[source.droppableId]];
        // delete item
        const taskObj = boardCopy.splice(source.index, 1);
        boardCopy.splice(destination?.index, 0, ...taskObj);
        return {
          ...allBoards,
          [source.droppableId]: boardCopy,
        };
      });
    }

    if (destination?.droppableId !== source.droppableId) {
      // cross board movement.
      setToDos(allBoards => {
        const sourceBoard = [...allBoards[source.droppableId]];
        const destinationBoard = [...allBoards[destination.droppableId]];
        const taskObj = sourceBoard.splice(source.index, 1);
        destinationBoard.splice(destination.index, 0, ...taskObj);
        return {...allBoards, [source.droppableId]: sourceBoard, [destination.droppableId]: destinationBoard};
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

// Droppablestate snapshot
//
// 현재 선택한 Draggable이 특정 Droppable위에 드래깅 되고 있는지 여부 확인
// isDraggingOver: boolean,
//
// Droppable 위로 드래그하는 Draggable ID
// draggingOverWith: ?DraggableId,
//
// 현재 Droppable에서 벗어난 드래깅되고 있는 Draggable ID
// draggingFromThisWith: ?DraggableId,
//
// placeholder가 사용되고 있는지 여부
// isUsingPlaceholder: boolean,
//
// https://github.com/atlassian/react-beautiful-dnd/blob/HEAD/docs/api/droppable.md#2-snapshot-droppablestatesnapshot
