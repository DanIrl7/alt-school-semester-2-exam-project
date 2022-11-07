import React from 'react'
import { useReducer, useRef, useState } from 'react'


const ACTIONS = {
  PLUS: 'plus',
  MINUS: 'minus',
  RESET: 'reset-value',
  SET: 'set-value'
}






export default function CounterApp() {


  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.PLUS:
        return { count: state.count + 1 }
        break;
      case ACTIONS.MINUS:
        return { count: state.count - 1 }
        break;
        case ACTIONS.RESET:
          return { count: state.count = 0 }
          break;   
          case ACTIONS.SET:
          return { count: action.nextCount }
          break; 
      default:
        return state
        break;
    }
  }
  const [setValue, setSetValue] = useState(0)
  const [state, dispatch] = useReducer(reducer, { count: 0})


  const plus = () => {
    dispatch({ type: 'plus'})
  }
  
  const minus = () => {
    dispatch({ type: 'minus'})
  }
  
  const reset = () => {
    dispatch({ type: 'reset-value'})
  }
  

  
  const handleSetCount = (e) => {
    e.preventDefault()
      
    dispatch({
      type: 'set-value',
      nextCount: setValue
    }); 

  }

  
 



  return (
    <div className='counter-body'>
      
      <div className="counter-container"> 
      <div><h1>Count </h1></div>
      <div id='count'>{state.count}</div>
    <div><form 
    onSubmit={handleSetCount}>
      <input type='text'
       placeholder='enter count'
        onChange={(e) => { if(e.target.value === NaN) {
          return
        }
          setSetValue(e.target.value)} }
        />
        <button type='submit' id='set-count'>set Count</button>
        </form>       
        </div>
    <button id='plus' onClick={plus}>+</button>
    <button id='minus' onClick={minus}>-</button>
    <button id='reset' onClick={reset}>Reset</button>
    </div>
    </div>
  )
}
