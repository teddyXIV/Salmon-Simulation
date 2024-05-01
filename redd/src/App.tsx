import './App.css'
import Header from './components/Header'
import RiverMap from './components/RiverMap'

function App() {

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-background bg-cover bg-center">
        <div className="h-fit">
          <Header />
        </div>
        <div className="h-5/6 w-screen sm:w-5/6">
          <RiverMap />
        </div>
      </div>
    </>
  )
}

export default App