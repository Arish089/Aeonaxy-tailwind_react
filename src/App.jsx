
import './App.css'
import MainBody from './components/MainBody'
import Navbar from './components/Navbar'
import { FaArrowLeft } from 'react-icons/fa'
import SubFooter from './components/SubFooter'
import Footer from './components/Footer'

function App() {

  return (
    <>
       <div>
        <Navbar />
        <div className='flex items-center gap-3 p-6 px-32'>
        <FaArrowLeft color='blue' size={16}/>
        <p className='text-blue-600 text-lg font-semibold'>Donate with PayPal</p>
        </div>
        <MainBody />
        <SubFooter />
        <Footer />
        </div>
    </>
  )
}

export default App
