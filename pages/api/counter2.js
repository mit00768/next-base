import React from 'react'

export default function Counter2() {
  return (
    <>
      <h1>計數器-js</h1>
      <h1 id="total">0</h1>
      <button
        onClick={() => {
          document.getElementById('total').innerText =
            Number(document.getElementById('total').innerText) + 1
        }}
      >
        +1
      </button>
    </>
  )
}
