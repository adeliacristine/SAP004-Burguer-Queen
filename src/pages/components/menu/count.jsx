import React, { useState } from 'react';
import BtnP from '../button/button'
import './menu.css'
import '../button/button.css'

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)

  return (
    <div className=''>
      <div className='count'>

        <BtnP className='btnCount btn btn-warning' onClick={decrement}>-1</BtnP>
		<p className=''>{count}</p>
		<BtnP className='btnCount btn btn-warning' onClick={increment}>+1</BtnP>
        <BtnP className='btnCount btn btn-warning' onClick={reset}>X</BtnP>
      </div>
    </div>
  ) 
}

export default Counter