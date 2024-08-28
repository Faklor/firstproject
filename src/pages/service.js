import './service.scss'
import { useParams } from "react-router"
import { useState, useEffect, createElement } from "react"
import { useNavigate } from 'react-router-dom'
//------------data-----------------
//import data from '../../../services/data.json'
//------------routs------------
import {services, updateTitle, updateContent} from '../moduls/pre-moduls/axiosRouts'


export default function Service(){

    let navigation = useNavigate()
    let {servicesName} = useParams()
    //const dataItem = data.find((item)=>item.name === servicesName)
    
    let [arrayContent, updateArrayContent]  = useState([])
    //let [image, setImage] = useState([])

    const [titleImg, setTitleImg] = useState(null)
    const [dataItem, setData] = useState([])
    const [imgFlag, setImgFlag] = useState(false)

    const [dataTitleImg,setDataTitleImg]= useState(null)

    useEffect(()=>{
        services()
        .then(res=>{
            let data = res.data.find(item=>item.name===servicesName)
            setData(data)

            setTitleImg(require('../res/services/'+data.titelImg))
            setImgFlag(true)
            updateArrayContent(data.content)
            //console.log(data.content[0])
        })
        .catch(e=>{

        })
    },[servicesName])

   
    //const dataItem = data.find((item)=>item.name === servicesName)

    function onTitleImageChange(e){
        if (e.target.files && e.target.files[0]) {
            setTitleImg(URL.createObjectURL(e.target.files[0]))
            setDataTitleImg(e.target.files[0])
            
        }
        
    }

    async function sendDataTitle(e){

        let formData = new FormData()
        if(titleImg !== '/home/static/media/1.dfa48606267896ff7f4f.jpg'){
            formData.append('imgTitle',dataTitleImg)
        }
        
        formData.append('servicesName',servicesName)
        formData.append('nameImage',dataItem.titelImg)
        formData.append('nameTitle',dataItem.name)
        formData.append('sellTitle',dataItem.sell)

        updateTitle(formData)
        .then(res=>{
            navigation(`../${res.data}`)
        })
        .catch(e=>{
            console.log(e)
        })
    }

    function onImageChange(e){
        let link = null
        if (e.target.files && e.target.files[0]) {
            link = URL.createObjectURL(e.target.files[0])
            
            //updateArrayContent(arrayContent.concat({web:<img key={arrayContent.length} src={link} alt='previewImage'/>,server:e.target.files[0]}))
            updateArrayContent(arrayContent.concat({web:<img key={arrayContent.length} src={link} alt='previewImage'/>,server:e.target.files[0]}))
            
        }
    }

    async function sendDataContent(e) {
        
        let formdata = new FormData()
        
        arrayContent.forEach((item,index)=>{
            
            if(item.server){
                formdata.append(`${dataItem.id+'-'+index}`,item.server)
                
            }            
            
        })

        formdata.append('servicesName', servicesName)
        formdata.append('arrayContent', JSON.stringify(arrayContent))

        updateContent(formdata)
        .catch(e=>{
            console.log(e)
        })
        
            
    }
                

    
    return (
        <div className='updateService'>
            <div className='title'>
                <h2>Заголовок</h2>
                {imgFlag?<img src={titleImg} name="imgTitle" alt='titleImg'/>
                :
                <></>}
                <input type="file" onChange={onTitleImageChange} accept="image/png, image/jpeg"/> 
                <input defaultValue={dataItem.name} onChange={(e)=>{dataItem.name = e.target.value}}/>
                <input defaultValue={dataItem.sell} onChange={(e)=>{dataItem.sell = e.target.value}}/>
                <button onClick={sendDataTitle}>Редактировать</button>
            </div>
            <div className="otherContent">
                <h3>Содержимое</h3>
                <button onClick={()=>{updateArrayContent([])}}>Очистить все</button>

                {arrayContent.map((item,index)=>{
                    //return item.web
                    // if(item.web){
                    //     return createElement(item.web.type, item.web.props)
                    // }
                    if(item.web.type === 'img'){
                        return createElement(item.web.type,{src:require('../res/services/ContentServices/'+item.web.props.src)})
                    }
                    return createElement(item.web.type)
                    //return createElement(item.web.type, item.web.props) || createElement(item.type,item.props)
                    //return createElement(item.type,item.props)
                })}
                {/* {dataItem.content?dataItem.content.map((item,index)=>{
                    return createElement(item.type, item.props)
                }):<></>} */}
                <button onClick={()=>{updateArrayContent(arrayContent.toSpliced(arrayContent.length-1,1))}}>Отменить действие</button>
                
                
                <div className='addImg'>
                    <button className="btn">Добавить картинку</button>
                    <input type="file" onChange={onImageChange} accept="image/jpeg"/> 
                </div>
                
                <button onClick={()=>{
                    updateArrayContent(arrayContent.concat({web:<textarea key={arrayContent.length} placeholder='Введите текст'/>}))}
                }>Добавить текст</button>

                <button onClick={sendDataContent}>
                    Редактировать
                </button>
            </div>

            {/* <input type="file" onChange={onImageChange} className="filetype" />
            <img src={image} alt='previewImage'/> */}
        </div>

    )
}