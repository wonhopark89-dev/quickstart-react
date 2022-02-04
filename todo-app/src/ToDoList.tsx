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
  const {register, watch, handleSubmit, formState} = useForm();
  // console.log(register('test')); // {name: 'test', onChange: ƒ, onBlur: ƒ, ref: ƒ}

  const onValid = (data: any) => {
    // console.log(data);
  };

  console.log(formState.errors);

  return (
    <div>
      <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={handleSubmit(onValid)}>
        <input {...register('email', {required: true})} placeholder={'Email'} />
        <input {...register('firstName', {required: true})} placeholder={'First Name'} />
        <input {...register('lastName', {required: true})} placeholder={'Last Name'} />
        <input {...register('username', {required: true, minLength: 5})} placeholder={'Username'} />
        <input {...register('password', {required: true, minLength: 5})} placeholder={'Password'} />
        <input
          {...register('password', {
            required: true,
            minLength: {
              value: 5,
              message: 'Your password is too short',
            },
          })}
          placeholder={'Password1'}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default ToDoList;

// handleSubmit 은 성공,실패 각 callback 을 설정할 수 있음 ( 성공값은 필수 )
// required 를 html-input 컴포넌트에 적용하면 html 에서 체크해줌
// -> 지원하지않은 브라우저나, 커스텀을 하기위해 속성으로 적용
