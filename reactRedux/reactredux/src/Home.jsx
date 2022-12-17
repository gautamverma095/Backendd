import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'



const Home = () => {

    const dispatch = useDispatch()
    const [num,setNum] = useState(0)
    
    const { c } = useSelector(state => state.custom)
    
    const handleChange = (e) => {

        setNum(+e.target.value)
       


    }

    const handleAdd = () => {
        dispatch({
            type: "incrementByValue",
            payload: num
        })
        setNum(0)

    }

  
  return (
      <div>
      
          
          <h2> home:{ c}</h2>
          <button onClick={() => { dispatch({ type: "increment" }) }}>INCREMENT</button>
          

          <input type="number" value={num} placeholder='enter num' onChange={handleChange} />
          <button onClick={handleAdd}>Add Entered Value</button>
          <button onClick={() => { dispatch({ type:"incrementByValue",payload:25})}}>INCREMENT by 25</button>
          <button onClick={() => { dispatch({ type:"decrement"}) }}>DECREMENT</button>
      
      </div>
  )
}

export default Home