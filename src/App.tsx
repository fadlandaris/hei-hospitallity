import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './page/Home'

type Props = {}

const App = (props: Props) => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </main>
  )
}

export default App