import React from 'react';
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';

const Dnd = () => {
  const onDragEnd = () => {};

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Droppable droppableId={'one'}>
          {({innerRef, droppableProps}) => (
            <ul ref={innerRef} {...droppableProps}>
              <Draggable draggableId={'first'} index={0}>
                {({innerRef, draggableProps, dragHandleProps}) => (
                  <li ref={innerRef} {...draggableProps}>
                    <span {...dragHandleProps}>🔥</span>One
                  </li>
                )}
              </Draggable>
              <Draggable draggableId={'two'} index={1}>
                {({innerRef, draggableProps, dragHandleProps}) => (
                  <li ref={innerRef} {...draggableProps}>
                    <span {...dragHandleProps}>🔥</span>Two
                  </li>
                )}
              </Draggable>
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default Dnd;
