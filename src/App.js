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
import React, { useState } from "react";
import Content from "./Content";

function App() {
  const [count, setCount] = useState(0)

  const [count2, setCount2] = useState(0)


  const increase = () => {
    setCount(count + 1)
  }

  const increase2 = () => {
    setCount2(count2 + 1)
  }
  return (
    <div style={{ padding:'10px 32px'}}>
      <Content count={count}/>
      <h1>{count}</h1>
      <h1>{count2}</h1>
      <button onClick={increase}>
        Bấm vô đi mi  !
      </button>
      <button onClick={increase2}>
        Mi có bấm vô không  !
      </button>
    </div>
  )
}
export default App;