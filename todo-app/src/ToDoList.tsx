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

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  password1: string;
  extraError?: string;
}

// react-hook-form 활용
const ToDoList = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    setError,
    setValue,
  } = useForm<IForm>({
    defaultValues: {
      email: '@gmail.com',
    },
  });
  // console.log(register('test')); // {name: 'test', onChange: ƒ, onBlur: ƒ, ref: ƒ}

  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      setError('password1', {message: 'Password are not the same'}, {shouldFocus: true});
      return;
    } else {
    }

    // clear all
    setValue('email', '');
    setValue('firstName', '');
    setValue('lastName', '');
    setValue('username', '');
    setValue('password', '');
    setValue('password1', '');
    //
    // global error
    // setError('extraError', {message: 'Server offline.'});
  };

  console.log(errors);

  return (
    <div>
      <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={handleSubmit(onValid)}>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@gmail.com$/,
              message: 'Only gmail.com emails allowed',
            },
          })}
          placeholder={'Email'}
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register('firstName', {
            required: 'write here',
            validate: {
              // 에러가 있으면 false 나 string 값을 리턴 시킨다.
              noTomato: value => (value.includes('tomato') ? 'no tomato allowed' : true),
              noCarrot: value => (value.includes('carrot') ? 'no carrot allowed' : true),
            },
          })}
          placeholder={'First Name'}
        />
        <span>{errors?.firstName?.message}</span>
        <input {...register('lastName', {required: 'write here'})} placeholder={'Last Name'} />
        <span>{errors?.lastName?.message}</span>
        <input {...register('username', {required: 'write here', minLength: 8})} placeholder={'Username'} />
        <span>{errors?.username?.message}</span>
        <input
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Your password is too short',
            },
          })}
          placeholder={'Password'}
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register('password1', {
            required: 'Password1 is required',
            minLength: {
              value: 8,
              message: 'Your password is too short',
            },
          })}
          placeholder={'Password1'}
        />
        <span>{errors?.password1?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
};

export default ToDoList;

// handleSubmit 은 성공,실패 각 callback 을 설정할 수 있음 ( 성공값은 필수 )
// required 를 html-input 컴포넌트에 적용하면 html 에서 체크해줌
// -> 지원하지않은 브라우저나, 커스텀을 하기위해 속성으로 적용
