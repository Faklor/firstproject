import './link.scss'
import { Link } from 'react-router-dom'

export default function LinkS({titelImg, name},index){


    return(
        <Link to={`/services/${name}`}>
        <div className={`itemServices ${index}`}>
            <img src={require(`../../res/services/${titelImg}`)} alt={`services ${index}`}/>
            <p>{name}</p>
        </div>
        </Link>
       
    )
}