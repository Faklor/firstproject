import './adminServices.scss'
import { Link ,useLocation,Outlet } from 'react-router-dom'
import { useEffect,useState } from 'react'
//------------data-----------------
//import data from '../../../services/data.json'
import { services } from '../../../moduls/pre-moduls/axiosRouts'




export default function AdminServices(){

    const {pathname} = useLocation()

    const [viewManu, setViewMenu] = useState(true)
    const [data,setData] = useState([])

    useEffect(()=>{
        if('/admin/services' !== pathname){
            setViewMenu(false)
        }
        else{
            setViewMenu(true)
        }

        services()
        .then(res=>{
            setData(res.data)
        })
        .catch(e=>{

        })
    },[pathname])

    return <>
        {viewManu?<div className='itemsContent'>
            
            {data.map((item, index)=>{
                return <Link key={index} to={`${item.name}`}><div  className='block v'>
                    <img src={require(`../../../res/services/${item.titelImg}`)} alt={`services${index}`}/>
                    <p>{item.name}</p>      
                </div></Link>
            })}
            
        </div>:
        <h2 className='updateText'>Панель редактирования:</h2>}
        <Outlet/>
    </>
}