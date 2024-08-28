import './App.scss'
import { Outlet } from 'react-router'
//----------moduls----------------
import Header from './moduls/header'
import Footer from './moduls/footer'

export default function App() {
  return <div className="App">
      <Header/>
      <Outlet/>
      <Footer/>
      
    </div>
  
}

 
