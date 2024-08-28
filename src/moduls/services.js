import './services.scss'
import { Outlet } from 'react-router'
import { useEffect, useState } from 'react'
//------------pre-moduls-------
import Link from './pre-moduls/link'
//-----------dataJson----------
//import data from '../services/data.json'
//------------routs------------
import {services} from '../moduls/pre-moduls/axiosRouts'

export default function Services(){

    const [data, setData] = useState([])

    useEffect(()=>{
        services()
        .then(res=>{
            setData(res.data)
        })
        .catch(e=>{

        })
    },[])

    return(
        <section className='s-3'  id='services'>
            
            <h2 >Какие сервисы мы предоставляем?</h2>
            <div className='services'>
                {data.length !== 0?data.map((item, index)=>{ 
                    return <Link  {...item} key={index}/>
                })
                :<h3 style={{color:'red', textAlign:'center'}}>Не связи с сервером</h3>}
            </div>
            <Outlet/>
        </section>
    )
}