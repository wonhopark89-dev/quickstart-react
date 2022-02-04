import React, {useState} from 'react';
import {useForm} from 'react-hook-form';

// const ToDoList = () => {
//   const [todo, setTodo] = useState<string>('');
//   const [todoError, setToDoError] = useState<string>('');
//
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: {value},
//     } = event;
//     setToDoError('');
//     setTodo(value);
//   };
//
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (todo.length < 10) {
//       return setToDoError('To do should be longer');
//     }
//   };
//
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={todo} placeholder={'Write a to-do'} />
//         <button>Add</button>
//         {todoError !== '' ? todoError : null}
//       </form>
//     </div>
//   );
// };

// react-hook-form 활용
const ToDoList = () => {
  const {register, watch} = useForm();
  // console.log(register('test')); // {name: 'test', onChange: ƒ, onBlur: ƒ, ref: ƒ}
  return (
    <div>
      <form>
        <input {...register('email')} placeholder={'Email'} />
        <input {...register('firstName')} placeholder={'First Name'} />
        <input {...register('lastName')} placeholder={'Last Name'} />
        <input {...register('username')} placeholder={'Username'} />
        <input {...register('password')} placeholder={'Password'} />
        <input {...register('password')} placeholder={'Password1'} />
        <button>Add</button>
      </form>
    </div>
  );
};

export default ToDoList;
