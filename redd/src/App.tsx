import { useState } from 'react';
import About from './components/About';
import Header from './components/Header'
import RiverMap from './components/RiverMap'

function App() {
  const [aboutVisible, setAboutVisible] = useState(false)

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-background bg-cover bg-center">
        <div className="z-10">
          <Header openHandler={() => setAboutVisible(true)} />
        </div>
        <div className="h-full w-screen">
          <RiverMap />
        </div>
      </div>
      {aboutVisible && <About closeHandler={() => setAboutVisible(false)} />}
    </>
  )
}

export default App;