// import React, { useState } from "react";

// const [name, setName] = useState("");
// const [email, setEmail] = useState("");
// const handleSubmit = () => {
//   //Call APi
//   console.log({
//     name,
//     email,
//   });
// };
// console.log(name);
// return (
//   <div style={{ padding: 20 }}>
//     <input
//       style={{ color: "yellow", fontSize: 30 }}
//       value={name}
//       onChange={(e) => setName(e.target.value)}
//       placeholder="name"
//     />
//     <br />
//     <input
//       style={{ color: "yellow", fontSize: 30 }}
//       value={email}
//       onChange={(e) => setEmail(e.target.value)}
//       placeholder="email"
//     />
//     <button
//       style={{ background: "white", fontSize: 30 }}
//       onClick={handleSubmit}
//     >
//       {" "}
//       Register{" "}
//     </button>
//   </div>
// );
// const courses = [
//   {
//     id: 1,
//     name: "HTML, CSS",
//   },
//   {
//     id: 2,
//     name: "Javascrips",
//   },
//   {
//     id: 3,
//     name: "Reactjs",
//   },
// ];

// function App() {
//   const [checked, setChecked] = useState([]);

//   const handleCheck = (id) => {
//     setChecked((prev) => {
//       const isChecked = checked.includes(id);
//       if (isChecked) {
//         return checked.filter((item) => item !== id);
//       } else {
//         return [...prev, id];
//       }
//     });
//   };

//   const handleSubmit = () => {
//     console.log({ ids: checked });
//   };

//   return (
//     <div style={{ padding: 32 }}>
//       {courses.map((course) => (
//         <div key={course.id}>
//           <input
//             type="checkbox"
//             checked={checked.includes(course.id)}
//             onChange={() => handleCheck(course.id)}
//           />
//           <label>{course.name}</label>
//         </div>
//       ))}
//       <button onClick={handleSubmit}>Register</button>
//     </div>
//   );
// }
// function App() {
//   const [job, setJob] = useState("");

//   const [jobs, setJobs] = useState(() => {
//     const storageJobs = JSON.parse(localStorage.getItem("jobs"));
//     return storageJobs;
//   });

//   const handleSubmit = () => {
//     setJobs((prev) => {
//       const newJobs = [...prev, job];

//       const jsonJobs = JSON.stringify(newJobs);

//       localStorage.setItem("jobs", jsonJobs);

//       return newJobs;
//     });
//     setJob("");
//   };
//   console.log(job);
//   return (
//     <div style={{ padding: 32 }}>
//       <input value={job} onChange={(e) => setJob(e.target.value)} />
//       <button onClick={handleSubmit}> Add </button>
//       <ol>
//         {jobs.map((job, index) => (
//           <li key={index}>{job}</li>
//         ))}
//       </ol>
//     </div>
//   );
// }
// import React, { useState } from "react";
// import Content from "./Content";
// function App() {
//   const [show, setShow] = useState(false);
//   return (
//     <div style={{ padding: 20 }}>
//       <button onClick={() => setShow(!show)}> Toggle </button>
//       {show && <Content />}
//     </div>
//   );
// }
// export default App;

/*
1. memo() -> Highter order component (HOC)
2. useCallback()

Hooks : là gắn vào dùng ở tring function component
HOC: có hteer sử dụng được cho cả class và cả function 
Render props
*/
// React.memo HOC
// Trong thực tế khi nào cần dùng memo : có một component cần dùng nhiều props
// React.memo được gọi là Hihger order component (HOC) dùng đẻ ghi nhớ các prps của một component , quyết định xem có render lại component đó hay không để tối ưu về hiệu năng
// Ngắn gọn react.memo dùng để xử lý component tránh re-render trong tình huống không cần thiết
// import React, { useState } from "react";
// import Content from "./Content";

// function App() {
//   const [count, setCount] = useState(0)

//   const [count2, setCount2] = useState(0)

//   const increase = () => {
//     setCount(count + 1)
//   }

//   const increase2 = () => {
//     setCount2(count2 + 1)
//   }
//   return (
//     <div style={{ padding:'10px 32px'}}>
//       <Content count={count}/>
//       <h1>{count}</h1>
//       <h1>{count2}</h1>
//       <button onClick={increase}>
//         Bấm vô đi mi  !
//       </button>
//       <button onClick={increase2}>
//         Mi có bấm vô không  !
//       </button>
//     </div>
//   )
// }
// export default App;

//useCallback hook
//  import { useState, useCallback } from 'react';
//  import Content from './Content'

//  function App() {
//   const [count, setCount] = useState(0)

//   const handleIncrease = useCallback (() =>
//   {
//     setCount(prevCount => prevCount + 1)
//   }, [])
//   return (
//     <div style={{ padding: '10px 32px'}}>
//       <Content onIncrease={handleIncrease}/>
//       <h1>{count}</h1>
//     </div>
//   )
//  }
//  export default App;

//useMemo hook
// import { useState, useMemo, useRef } from 'react';

// function App() {

//   const [name, setName] = useState('')

//   const [price, setPrice] = useState('')

//   const [products, setProducts ] = useState([])

//   const nameRef = useRef()

//   const handleSubmit = () => {
//     setProducts([...products, {
//       name,
//       price: +price
//     }])
//     setName('')
//     setPrice('')
//     nameRef.current.focus()

//   }

//   const total = useMemo (() => {
//     const result = products.reduce((result, prod) => {

//       console.log('Tính toán lại.....');

//       return result + prod.price
//     }, 0)

//     return result
//   }, [products])

//   return (
//     <div style={{ padding: '10px 32px',margin: '100px 100px 200px 200px'}}>
//       <input style={{fontSize: '18px', }}
//       ref={nameRef}
//       value={name}
//       placeholder='Enter name...'
//       onChange={e => setName(e.target.value)}/>
//       <br/>
//       <input
//       style={{fontSize: '18px', marginTop: '20px'}}
//       value={price}
//       placeholder='Enter price...'
//       onChange={e => setPrice(e.target.value)}/>
//       <br/>
//       <button style={{ backgroundColor: '#5F9EA0', width:'100px',fontSize:'20px', borderRadius:'10px', marginTop: '20px'}} onClick={handleSubmit}>
//         Add
//       </button>
//       <br/>
//       Total : {total}
//       <ol>
//         {products.map((product, index) =>(
//         <li key={index}>{product.name} - {product.price}</li>
//         ))}
//       </ol>

//     </div>
//   )
// }
// export default App

//useReducer hook
// Cung cấp thêm 1 sự lựa chọn để sử dụng cho State cho function component
// import { useState, useReducer } from 'react'
// // useState
// /*
// 1. Init state: 0
// 2. Actions: Up (State + 1) / Down (State - 1)
//  */
// // useReducer
// /*
// 1. Init state: 0
// 2. Actions: Up (State + 1) / Down (State - 1)
// 3. Reducer
// 4. Dispath
//  */
// // Init State
// const  initState = 0

// //Actions
// const UP_ACTION = 'up'
// const DOWN_ACTION = 'down'

// //Reducer
// const reducer = (state, action) => {
//   switch(action) {
//     case UP_ACTION:
//       return state + 1
//     case DOWN_ACTION:
//       return state - 1
//       default:
//         throw new Error('Invalid action')
//   }

// }

// function App() {
//   const [count, dispath] = useReducer(reducer, initState)

//   return (
//     <div style={{ padding : '0 20px'}}>
//       <h1>{count}</h1>
//       <button style={{ backgroundColor: '#5F9EA0',color: '#F0FFFF',fontSize:'20px', borderRadius:'10px'}}
//       onClick={() => dispath(DOWN_ACTION)}
//       >
//           Down
//       </button>
//       <button style={{ backgroundColor: '#5F9EA0',color: '#F0FFFF', fontSize:'20px', borderRadius:'10px'}}
//       onClick={() => dispath(UP_ACTION)}
//       >
//           Up
//       </button>
//     </div>
//   )
// }
// export default App

// ToDo App with Reducer hook

// import { useReducer, useRef } from "react";

// // useReducer
// // /*
// // 1. Init state: 0
// const initState = {
//   job: "",
//   jobs: [],
// };
// // 2. Actions: Up (State + 1) / Down (State - 1)

// const SET_JOB = "set_job";

// const ADD_JOB = "add_job";

// const DELETE_JOB = "delete_job";

// const setJob = (payload) => {
//   return {
//     type: SET_JOB,
//     payload,
//   }
// }
// const addJob = (payload) => {
//   return {
//     type: ADD_JOB,
//     payload,
//   }
// }
// const deleteJob = (payload) => {
//   return {
//     type: DELETE_JOB,
//     payload,
//   }
// }

// // 3. Reducer
// const reducer = (state, action) => {
//   console.log("Action: ", action);
//   console.log("Prev State: ", state);

//   let newState;

//   switch (action.type) {
//     case SET_JOB:
//       newState = {
//         ...state,
//         job: action.payload,
//       };
//       console.log(" here");
//       break;
//     case ADD_JOB:
//       newState = {
//         ...state,

//         jobs: [...state.jobs, action.payload],
//       };
//       break;
//     case DELETE_JOB:

//     const newJobs = [...state.jobs]

//     newJobs.splice(action.payload, 1)

//     newState = {
//         ...state,
//         jobs: newJobs
//       }

//       break
//     default:
//       throw new Error("Invalid action.");
//   }
//   console.log("New state : ", newState);
//   return newState;
// };
// // 4. Dispatch
// //  */
// function App() {
//   const [state, dispatch] = useReducer(reducer, initState);

//   const inputRef = useRef()

//   const { job, jobs } = state;

//   //submit

//   const handleSubmit = () => {
//     dispatch(addJob(job));
//     dispatch(setJob(''));

//     inputRef.current.focus()
//   };

//   return (
//     <div style={{ padding: "0 20px", marginLeft: "400px", marginTop: "80px" }}>
//       <h3>ToDo</h3>
//       <input
//       ref={inputRef}
//         style={{ fontSize: "20px" }}
//         value={job}
//         placeholder="Enter Todo..."
//         onChange={(e) => {
//           dispatch(setJob(e.target.value));
//         }}
//       />
//       <button
//       style={{ fontSize: '20px', background: '#7FFFD4', border: 'none'}}
//       onClick={handleSubmit}>
//       Add + </button>
//       <ul>
//         {jobs.map((job, index) => (
//           <li key={index}>{job}
//           <span onClick={() => dispatch(deleteJob(index))}>
//           &times;
//           </span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default App;

// import TodoApp from './Todo'

// function App() {
//   return <TodoApp />
// }
// export default App

// import Content from "./Content";
import React from "react";
import "./App.css";
import Content from "./Content";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <button> Toggle Theme </button>
    </div>
  );
}
export default App;
