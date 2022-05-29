import React, { ChangeEvent, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import TextField from './textField'
import { Counter } from './Counter'

// props
// hooks
// render props

const App: React.FC = () => {
  const fullName: { lastName: string, firstName: string } = {
    firstName: 'lucy',
    lastName: 'maxine'
  }

  return (
    <div>
      <TextField text={''} person={fullName} handleChange={e => {
        e.preventDefault();
      }}
      />

      <Counter>
        {({ count, setCount }) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter>
    </div>
  )
}

export default App
