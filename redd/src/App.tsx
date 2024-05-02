import Header from './components/Header'
import RiverMap from './components/RiverMap'

function App() {

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-background bg-cover bg-center">
        <div className="z-10">
          <Header />
        </div>
        <div className="h-full w-screen">
          <RiverMap />
        </div>
      </div>
    </>
  )
}

export default App;