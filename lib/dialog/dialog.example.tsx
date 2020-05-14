import React from 'react'
import { useState } from 'react'
import { Dialog, alert, confirm, modal } from './dialog'

export const DialogExample: React.FC = () => {
  const [x, setX] = useState(false)
  const [y, setY] = useState(false)
  const openModal = () => {
    const close = modal(
      <h1>
        你好<button onClick={()=>close()}>关闭</button>
      </h1>,
    )
  }
  return (
    <div>
      <h1>example 1</h1>
      <button onClick={() => setX(prev => !prev)}>click</button>
      <Dialog
        visible={x}
        buttons={[
          <button onClick={() => setX(false)}>1</button>,
          <button>2</button>,
        ]}
        onClose={() => setX(false)}
      >
        <div>hi</div>
      </Dialog>
      <br />
      <h1>example 2</h1>
      <button onClick={() => setY(prev => !prev)}>click</button>
      <Dialog
        visible={y}
        buttons={[
          <button onClick={() => setY(false)}>1</button>,
          <button>2</button>,
        ]}
        onClose={() => setY(false)}
        closeMaskOnClick
      >
        <div>hi</div>
      </Dialog>
      <br />
      <h1>example 3</h1>
      <button
        onClick={() => {
          alert('hi')
        }}
      >
        alert
      </button>
      <button
        onClick={() => {
          confirm(
            'hi',
            () => {
              console.log('你点击了yes')
            },
            () => {
              console.log('你点击了no')
            },
          )
        }}
      >
        confirm
      </button>
      <br />
      <h1>example 4</h1>
      <button onClick={openModal}>modal</button>
    </div>
  )
}
