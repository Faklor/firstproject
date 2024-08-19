import './main.scss'
//import {useEffect, useState} from 'react'
//------------res-------------
import img1 from '../res/main-image1.jpg'
import img2 from '../res/main-image2.jpg'
import img3 from '../res/main-image3.jpg'
//-----------dataJson----------
import data from '../services/data.json'

export default function Main(){
    
   

   

    return(
        <main>
            <section className='s-1'>
                
                <div className='content-1'>
                    <h1>KARYNA USA</h1>
                    <h2>ВИЗОВОЕ АГЕНСТВО</h2>
                    <h3>Самый доступный способ посмотреть мир и выучить английский</h3>
                    <button>Оставить заявку</button>
                </div>
                <img src={img1} alt='MainImage_1'/>
            </section>
            
            <section className='s-2'>
                <img src={img2} alt='MainImage_2'/>
                <div className='content-2'>
                    <hr/>
                    <h2>O KARYNA USA</h2>
                    <h3>Thrive Educational Consulting</h3>
                    <p>Поможем открыть туристическую и студенческую визу в США, Канаду, Европу, Англию и Австралию.
                    Мы сотрудничаем с десятком языковых школ и колледжей по разным странам, которые дают возможность иностранцам обучаться на языковых и профессиональных курсах по студенческой визе.</p>
                    <button>Читать больше</button>
                </div>

            </section>

            <section className='s-3'>
                <h2>Какие сервисы мы предоставляем?</h2>
                <div className='services'>
                    {data.map((item, index)=>{
                        return <div key={index} className={`itemServices ${index}`}>
                            <img src={require(`../res/services/${item.img}`)} alt={`services ${index}`}/>
                            <p>{item.name}</p>
                        </div>
                    })}
                </div>
            </section>

            <section className='s-4'>
                
                <div className='contact'>
                    <h2>Заполни форму<br/> и мы с тобой свяжемся</h2>
                    <form>
                        <lable className='name'>Имя *<br/><input type='text'/></lable>
                        

                        <lable className='familly'>Фамилия *<br/><input type='text'/></lable>
                        

                        <lable className='mail'>Электронная почта *<br/><input type='text'/></lable>
                        

                        <lable className='text'>Сообщение<br/><textarea type='text'/></lable>
                        
                        
                        <button>Связаться</button>
                    </form>
                </div>
                <img src={img3} alt='MainImage_2'/>
            </section>

            
        </main>
    )
}