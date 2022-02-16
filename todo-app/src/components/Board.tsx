import React from 'react';
import DragabbleCard from './DragabbleCard';
import {Droppable} from 'react-beautiful-dnd';
import styled from 'styled-components';
import {IToDo, toDoState} from '../dndAtoms';
import {useForm} from 'react-hook-form';
import {useSetRecoilState} from 'recoil';

const Wrapper = styled.div`
  width: 300px;
  padding-top: 10px;
  background-color: ${props => props.theme.boardColor};
  border-radius: 5px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
`;

interface IAreaProps {
  isDraggingFromThis: boolean;
  isDraggingOver: boolean;
}

const Area = styled.div<IAreaProps>`
  background-color: ${props =>
    props.isDraggingOver ? '#dfe6e9' : props.isDraggingFromThis ? '#b2bec3' : 'transparent'};
  flex-grow: 1;
  transition: background-color 0.3s ease-in-out;
  padding: 15px;
`;

interface IForm {
  toDo: string;
}

const Form = styled.form`
  width: 100%;
  input {
    width: 100%;
  }
`;

interface IBoardProps {
  toDos: IToDo[];
  boardId: string;
}

const Board = ({toDos, boardId}: IBoardProps) => {
  const {register, setValue, handleSubmit} = useForm<IForm>();
  const setToDos = useSetRecoilState(toDoState);
  const onValid = ({toDo}: IForm) => {
    const newTodo: IToDo = {id: Date.now(), content: toDo};
    // 해당하는 보드에만 업데이트 하도록
    setToDos(allBoards => {
      return {
        ...allBoards,
        [boardId]: [newTodo, ...allBoards[boardId]],
      };
    });
    setValue('toDo', '');
  };
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <input {...register('toDo', {required: true})} type={'text'} placeholder={`Add task on ${boardId}`} />
      </Form>
      <Droppable droppableId={boardId}>
        {({innerRef, droppableProps, placeholder}, {isDraggingOver, draggingFromThisWith}) => (
          <Area
            isDraggingOver={isDraggingOver}
            isDraggingFromThis={Boolean(draggingFromThisWith)} // 존재하면 true 가 됨
            ref={innerRef}
            {...droppableProps}>
            {toDos.map((toDo, index) => (
              <DragabbleCard key={toDo.id} toDo={toDo} index={index} />
            ))}
            {placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
};

export default Board;
