import React from 'react';
import {Draggable} from 'react-beautiful-dnd';
import styled from 'styled-components';

const Card = styled.div<{isDragging: boolean}>`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px;
  background-color: ${props => (props.isDragging ? '#e4f2ff' : props.theme.cardColor)};
  box-shadow: ${props => (props.isDragging ? '0px 2px 10px rgba(0,0,0,0.1)' : 'none')};
`;

interface IDragbbleCardProps {
  toDo: {id: number; content: string};
  index: number;
}

const DragabbleCard = React.memo(({toDo: {id, content}, index}: IDragbbleCardProps) => {
  // console.log(toDo, 'has been rendered');
  return (
    <Draggable draggableId={id + ''} index={index}>
      {({innerRef, draggableProps, dragHandleProps}, {isDragging}) => (
        <Card isDragging={isDragging} ref={innerRef} {...draggableProps} {...dragHandleProps}>
          {content}
        </Card>
      )}
    </Draggable>
  );
});

export default DragabbleCard;
