import './service.scss'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

//----------data------------
//import data from '../services/data.json'
import { services } from './pre-moduls/axiosRouts'


export default function Service(){

    let { servicesName } = useParams()
    
    let [nowData, setNowData] = useState(null)

    useEffect(()=>{
        services()
        .then(res=>{
            let data = res.data.find(item=>item.name===servicesName)
            setNowData(data)
        })
        .catch(e=>{

        })
    },[servicesName])


    return(
        <div className='service'>
            <h2>{nowData.name}</h2>
            <h3>Цена <b>{'$'+nowData.sell}</b></h3>
            <h4>{nowData.question.name}</h4>
            <ul>
                {nowData.question.answers.map((answer,index)=>{
                    return <li key={index}> - {answer}</li>
                })}
            </ul>
            <button>Оставить заявку</button>
        </div>
    )
}