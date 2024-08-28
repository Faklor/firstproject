import './admin.scss'
import { useRef } from 'react'
import { useNavigate } from 'react-router'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'


export default function Admin(){

    //------local-------------
    const navigate = useNavigate()


    let itemMenu1 = useRef(null)
    let itemMenu2 = useRef(null)

   


    return(
        <div className='admin'>
            <img src={require('../../res/logo.png')} alt='logoAdmin' onClick={()=>navigate('/home')} className='logo'/>
            <h2 className='text'>Karyna USA<br/>Administation</h2>

            <div className='menu'>
                <Link to={'services'} className='item_menu m1 active' onClick={()=>{
                    itemMenu1.current.classList.add('active')
                    itemMenu2.current.classList.remove('active')
                }} ref={itemMenu1}>
                    <img src={require('../../res/admin/menu1.png')} alt='item_menu_1'/>
                    <p >Визы</p>
                </Link>
                <Link to={'blog'} className='item_menu m2' onClick={()=>{
                    itemMenu2.current.classList.add('active')
                    itemMenu1.current.classList.remove('active')
                }} ref={itemMenu2}>
                    <img src={require('../../res/admin/menu2.png')} alt='item_menu_2'/>
                    <p >Блог</p>
                </Link>  
                
                
            </div>
            
            <Outlet/>
            
            {/* <div className='itemsContent'>
                
                {view === 'Визы'?
                    data.map((item, index)=>{
                        return <Link key={index} to={`${item.name}`}><div  className='block v'>
                            <img src={require(`../../res/services/${item.titelImg}`)} alt={`services${index}`}/>
                            <p>{item.name}</p>      
                        </div></Link>
                    })
                :'Блог'}
            </div> */}
            
            
        </div>
    )
}