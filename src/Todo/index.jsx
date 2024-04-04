import { useReducer, useRef } from "react";
import reducer, {initState} from './reducer'
import { setJob, addJob, deleteJob } from './actions'
import logger from './logger'
// useReducer
// /*
// 1. Init state: 0

// 2. Actions: Up (State + 1) / Down (State - 1)

// 3. Reducer

// 4. Dispatch
//  */
function App() {
  const [state, dispatch] = useReducer(logger(reducer), initState);

  const inputRef = useRef()

  const { job, jobs } = state;

  //submit

  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(''));


    inputRef.current.focus()
  };

  return (
    <div style={{ padding: "0 20px", marginLeft: "400px", marginTop: "80px" }}>
      <h3>ToDo</h3>
      <input
      ref={inputRef}
        style={{ fontSize: "20px" }}
        value={job}
        placeholder="Enter Todo..."
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
      />
      <button 
      style={{ fontSize: '20px', background: '#7FFFD4', border: 'none'}}
      onClick={handleSubmit}> 
      Add + </button>
      <ol>
        {jobs.map((job, index) => (
          <li key={index}>{job} 
          <span onClick={() => dispatch(deleteJob(index))}>
          &times;
          </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default App;
