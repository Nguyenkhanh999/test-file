// // Some case
// // 1. userEffect(callback)(Case này ít dùng )
// //- Gọi callback mỗi khi component rerender
// //- gọi callback sau khi component khi thêm element vào DOM
// // 2. userEffect(callback, [])
// //- chỉ gọi callback 1 lần sau khi component mounted
// // 3. userEffect(callback , [deps])
// //-Callback sẽ được gọi lại mỗi khi deps thay đổi

// // 1. Callback luôn được gọi sau khi component mounted
// // 2. Cleanup function luôn được gọi trước khi component unmounted
// import { useEffect, useState } from "react";
// // 3. Cleanup function luôn được gọi trước khi callback được gọi ( trừ lần mounted )
// //side effect

// const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users'];

// function Content() {
//   const [title, setTitle] = useState("");
//   const [posts, setPosts] = useState([]);
//   const [type, setType] = useState('posts')
//   const [showGoToTop, setshowGoToTop] = useState(false)
//   // useeffect(callback, [deps])
//   useEffect(() => {

//     fetch(`https://jsonplaceholder.typicode.com/${type}`)
//       .then((res) => res.json())
//       .then((posts) => {
//         setPosts(posts);
//       });
//   }, [type]);

// useEffect(() => {

//   const handleScroll = () => {
//     if (window.scrollY >= 200) {
//       //show
//       setshowGoToTop(true)
//       // console.log('set state')
//     } else {
//       //hide
//       setshowGoToTop(false)
//     }
//   }
//   window.addEventListener('scroll', handleScroll)
//   console.log('addEventListener')

//   //Clecnup function
//   return () => {
//     window.removeEventListener('scroll', handleScroll)
//     console.log('removeEventListener')

//   }

// },[])
// // console.log('re-render')

//   return (
//     <div>
//     {tabs.map(tab  =>  (
//         <button key ={tab}
//         style={type === tab ? {
//           color:'#fff',
//           backgroundColor: '#333'
//         } : {}}
//         onClick = {() => setType(tab)}
//         >
//           {tab}
//         </button>
//     ))} <br/>
//       <input value={title} onChange={(e) => setTitle(e.target.value)} />
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title || post.name}</li>
//         ))}
//       </ul>
//       {showGoToTop && (
//         <button
//         style= {{
//           position: 'fixed',
//           right:20,
//           bottom:20
//         }}
//         >
//           Cút Lên Trên
//         </button>
//       )}
//     </div>
//   );
// }
// export default Content;

// import React, { useEffect, useState } from "react";
// function Content() {
//   const[width, setWidth] = useState(window.innerWidth);
//   useEffect(() => {

//     const handleResize = () => {
//       setWidth(window.innerWidth)
//     }
//     window.addEventListener('resize', handleResize)
//   })

//   return (
//     <div>
//     <h1>{width}</h1>
//     </div>
//   );
// }
// export default Content;

// import React, { useEffect, useState } from "react";
// function Content () {
//   const [countdown, setCountdown] = useState(180)

// useEffect(() => {
//  const timmerId = setInterval(() => {
//     setCountdown(prevState => prevState - 1)
//   }, 1000)
//   return () =>clearInterval(timmerId)
// }, [])

//   return (
//     <div>
//       <h1>{countdown}</h1>

//     </div>
//   )
// }
// export default Content;
// import React, { useEffect, useState } from "react";

// function Content() {

//   const [avatar, setAvatar] = useState();
//   useEffect(() => {

//     //cleanup 
//     return () => {
//       //
//       avatar && URL.revokeObjectURL(avatar.preview)

//     }
//   }, [avatar])

//   const handlePreviewAvatar = (e) => {

//     const file = e.target.files[0];

//     file.preview = URL.createObjectURL(file);
    

//     setAvatar(file);

//   };
//   return (

//     <div>
//       <input type="file" onChange={handlePreviewAvatar} />
//       {avatar && <img src={avatar.preview} alt="" width="80%" />}
//     </div>
//   );
// }
// export default Content;

//useEffect with fake Chat App
import React, {useState, useEffect } from 'react';
const lessons = [
  {
    id: 1,
    name: 'ReactJs là gì ? tại áo nên học ReactJs'
  },
  {
    id: 2,
    name: 'SPA/MPA là gì ?'
  },
  {
    id: 3,
    name: 'Arrow function '
  }
]
function Content() {
  
  const [lessonId, setLessonId] = useState(1)
  
  useEffect(() => {

  const handleComment = (e) => {
    console.log(e);
  }
  

  window.addEventListener(`lesson-1`, handleComment)

  }, [])

  return (
    <div>
      <ul> {lessons.map(lesson => (
        <li
        key ={lesson.id}
        style={{
          color: lessonId === lesson.id ?
          'red':
          '#333'
        }} onClick={() => setLessonId(lesson.id)}
        >
          {lesson.name}
        </li>
       ))}
      </ul>
    </div>
  )
}
export default Content;