import React from 'react';
import {DragDropContext, Draggable, Droppable, DropResult} from 'react-beautiful-dnd';
import styled from 'styled-components';
import {useRecoilState} from 'recoil';
import {toDoState} from '../dndAtoms';

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr); // todo : will be 3
`;

const Board = styled.div`
  padding: 20px 10px;
  background-color: ${props => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
`;

const Card = styled.div`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px;
  background-color: ${props => props.theme.cardColor};
`;

const Dnd = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({destination, source, draggableId}: DropResult) => {
    console.log(destination, source);
    if (!destination) {
      return;
    }

    setToDos(oldToDos => {
      const toDosCopy = [...oldToDos];
      // 1) Delete item on source.index
      console.log('Delete item on ', source.index);
      console.log(toDosCopy);
      toDosCopy.splice(source.index, 1); // 선택한거 삭제
      console.log(toDosCopy);
      // 2) Put back the item on destination.index
      console.log('Put back ', draggableId, ' on ', destination.index);
      toDosCopy.splice(destination?.index, 0, draggableId); // 집어 넣기
      console.log(toDosCopy);
      return toDosCopy;
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId={'one'}>
            {({innerRef, droppableProps, placeholder}) => (
              <Board ref={innerRef} {...droppableProps}>
                {toDos.map((toDo, index) => (
                  <Draggable key={toDo} draggableId={toDo} index={index}>
                    {({innerRef, draggableProps, dragHandleProps}) => (
                      <Card ref={innerRef} {...draggableProps} {...dragHandleProps}>
                        {toDo}
                      </Card>
                    )}
                  </Draggable>
                ))}
                {placeholder}
              </Board>
            )}
          </Droppable>
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
};

export default Dnd;

// placeholder 가 drag 를 하는 동안 크기가 달라지지 않게 유지
