import './App.css'
import Welcome from './components/Welcome'
import BomDia from './components/BomDia'
import Pai from './components/Pai'
import Descricao from './components/Descricao'
import Cachorro from './components/Cachorro'



function App() {

  return (
    <>
      {/* 6.1 - Componentes */}
      <Welcome />
      {/* 6.2 - Expressoes */}
      <BomDia />
      {/* 6.3 - Componente dentro de componente */}
      <Pai />
      {/* 6.4 - Props */}
      <Descricao nome="Deivid" sobrenome="Santos" idade=
      {22}/>  
      {/* 6.5 - Forma mais correta de utilizar props */}
      <Cachorro nome="Rex" raca="Vira lata"/>


      </>
  )
}

export default App
