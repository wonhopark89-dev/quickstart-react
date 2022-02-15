import React from 'react';
import {DragDropContext, DropResult} from 'react-beautiful-dnd';
import styled from 'styled-components';
import {useRecoilState} from 'recoil';
import {toDoState} from '../dndAtoms';
import Board from './Board';

const Wrapper = styled.div`
  display: flex;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`;

const Dnd = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({destination, source, draggableId}: DropResult) => {
    console.log(destination, source);
    if (!destination) {
      return;
    }

    // setToDos(oldToDos => {
    //   const toDosCopy = [...oldToDos];
    //   // 1) Delete item on source.index
    //   console.log('Delete item on ', source.index);
    //   console.log(toDosCopy);
    //   toDosCopy.splice(source.index, 1); // 선택한거 삭제
    //   console.log(toDosCopy);
    //   // 2) Put back the item on destination.index
    //   console.log('Put back ', draggableId, ' on ', destination.index);
    //   toDosCopy.splice(destination?.index, 0, draggableId); // 집어 넣기
    //   console.log(toDosCopy);
    //   return toDosCopy;
    // });
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
