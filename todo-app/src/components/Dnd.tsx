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
  const onDragEnd = ({destination, source}: DropResult) => {
    console.log(destination, source);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId={'one'}>
            {({innerRef, droppableProps, placeholder}) => (
              <Board ref={innerRef} {...droppableProps}>
                {toDos.map((toDo, index) => (
                  <Draggable key={index} draggableId={toDo} index={index}>
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
