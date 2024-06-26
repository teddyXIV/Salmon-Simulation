import About from './components/About';
import Header from './components/Header'
import RiverMap from './components/RiverMap'
import { useSelector } from 'react-redux'
import { selectModalVisibility } from './redux/modalVisibleSlice';

function App() {
  const modalVisible = useSelector(selectModalVisibility)

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
      {modalVisible && <About />}
    </>
  )
}

export default App;