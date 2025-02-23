import { useState } from 'react'
import Counter from './components/Counter'
import './App.css'
import UserForms from './components/UserForms'
import Button from './components/Button'
import PaiFunction from './components/PaiFunction'

function App() {


  return (
    <>
      <Counter/>
      <br/>
      <hr/>
      <h1>Formulário</h1>
      <UserForms/>
      <br/>
      <hr/>
      <h1>Eventos</h1>
      <Button />
      <PaiFunction/>
    </>
  )
}

export default App
