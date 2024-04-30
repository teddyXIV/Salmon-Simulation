import './App.css'
import Header from './components/Header'
import RiverMap from './components/RiverMap'

function App() {

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-background bg-cover bg-center">
        <Header />
        <RiverMap />
      </div>
    </>
  )
}

export default App