import './header.scss'
import { useNavigate } from 'react-router'
// import { Link } from 'react-router-dom'
import { HashLink  } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import {useRef} from 'react'
//-----------res-----------
import logo from '../res/logo.png'
//---------data------------
import data from '../services/data.json'

export default function Header(){

    const navigate = useNavigate()
    //const location = useLocation()
    //console.log(location)
    //--------------state-------
    //const [viewServices, setViewServices] = useState(false)
    const servicesRef = useRef(null)


    // function getLink(){
    //     if(location.pathname !== '/home'){
    //         navigate('/home')
    //     }
    //     return ''
    // }

    
    //------render------
    function visibleAfterNav(){
        servicesRef.current.style.display = 'grid'  
        servicesRef.current.style.opacity = 1
    }
   

    return(
        <header>
            <img src={logo} alt='logo' onClick={()=>navigate('/home')}/>
            <nav>
                <ul>
                    <li><HashLink to="/home#services" onMouseOver={visibleAfterNav} onMouseLeave={()=>servicesRef.current.style.display = 'none'}>Визы</HashLink> </li>
                    <div ref={servicesRef} className='viewServices' onMouseOver={visibleAfterNav} onMouseLeave={()=>servicesRef.current.style.display = 'none'}> 
                        {data.map((item,index)=>{
                            return <a key={index} href={`/services/${item.name}`}>{item.name}</a>
                        })}
                    </div>

                    <li><Link to="/for-international-students">Иностранные студенты в США</Link></li>
                    <li><Link to="/about">О Karyna USA</Link></li>
                    <li><Link to="/contact">Связаться с нами</Link></li>
                      
                </ul>

                
            </nav>
        </header>
    )
}