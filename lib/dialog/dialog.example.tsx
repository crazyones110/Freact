import React from 'react'
import { useState } from 'react'
import {Dialog, alert} from './dialog'

export const DialogExample: React.FC = () => {
  const [x, setX] = useState(false)
  const [y, setY] = useState(false)
  return (
    <div>
      <h1>example 1</h1>
      <button onClick={()=>setX(prev => !prev)}>click</button>
      <Dialog visible={x} buttons={
        [
          <button onClick={()=>setX(false)}>1</button>,
          <button>2</button>
        ]
      }
      onClose={()=>setX(false)}
      >
        <div>hi</div>
      </Dialog>
      <br/>
      <h1>example 2</h1>
      <button onClick={()=>setY(prev => !prev)}>click</button>
      <Dialog visible={y} buttons={
        [
          <button onClick={()=>setY(false)}>1</button>,
          <button>2</button>
        ]
      }
      onClose={()=>setY(false)}
      closeMaskOnClick
      >
        <div>hi</div>
      </Dialog>
      <br/>
      <h1>example 3</h1>
      <button onClick={()=>{alert('hi')}}>alert</button>
    </div>
  )
}