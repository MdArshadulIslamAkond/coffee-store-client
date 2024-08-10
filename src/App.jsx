import { Outlet } from 'react-router-dom'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'


function App() {
 
  return (
    <div>
      <Header/>
      <Banner/>
      <Outlet />
      <Footer/>
      
     </div>
  )
}

export default App;
