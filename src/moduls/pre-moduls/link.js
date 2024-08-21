import './link.scss'

export default function Link({img, name},index){
    return(
        <div className={`itemServices ${index}`}>
            <img src={require(`../../res/services/${img}`)} alt={`services ${index}`}/>
            <p>{name}</p>
        </div>
    )
}