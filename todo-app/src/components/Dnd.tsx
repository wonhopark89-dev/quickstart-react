import React from 'react';
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';

const Dnd = () => {
  const onDragEnd = () => {};

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Droppable droppableId={'one'}>
          {() => (
            <ul>
              <Draggable draggableId={'first'} index={0}>
                {() => <li>One</li>}
              </Draggable>
              <Draggable draggableId={'first'} index={0}>
                {() => <li>Two</li>}
              </Draggable>
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default Dnd;
