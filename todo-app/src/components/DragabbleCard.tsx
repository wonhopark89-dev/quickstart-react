import React from 'react';
import {Draggable} from 'react-beautiful-dnd';
import styled from 'styled-components';

const Card = styled.div`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px;
  background-color: ${props => props.theme.cardColor};
`;

interface IDragbbleCardProps {
  toDo: string;
  index: number;
}

const DragabbleCard = React.memo(({toDo, index}: IDragbbleCardProps) => {
  console.log(toDo, 'has been rendered');
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {({innerRef, draggableProps, dragHandleProps}) => (
        <Card ref={innerRef} {...draggableProps} {...dragHandleProps}>
          {toDo}
        </Card>
      )}
    </Draggable>
  );
});

export default DragabbleCard;
