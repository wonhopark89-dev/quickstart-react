import React from 'react';
import DragabbleCard from './DragabbleCard';
import {Droppable} from 'react-beautiful-dnd';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px 10px;
  background-color: ${props => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
`;

interface IBoardProps {
  toDos: string[];
  boardId: string;
}

const Board = ({toDos, boardId}: IBoardProps) => {
  return (
    <Droppable droppableId={boardId}>
      {({innerRef, droppableProps, placeholder}) => (
        <Wrapper ref={innerRef} {...droppableProps}>
          {toDos.map((toDo, index) => (
            <DragabbleCard key={toDo} toDo={toDo} index={index} />
          ))}
          {placeholder}
        </Wrapper>
      )}
    </Droppable>
  );
};

export default Board;
