import './main.scss'
//import {useEffect, useState} from 'react'
//------------res-------------
import img1 from '../res/main-image1.jpg'
import img2 from '../res/main-image2.jpg'
import img3 from '../res/main-image3.jpg'
//-----------pre-models--------
import Services from './services'


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

            <Services/>

            <section className='s-4' >
                
                <div className='contact'>
                    <h2>Заполни форму<br/> и мы с тобой свяжемся</h2>
                    <form>
                        <p className='name'>Имя *<br/><input type='text'/></p>
                        

                        <p className='familly'>Фамилия *<br/><input type='text'/></p>
                        

                        <p className='mail'>Электронная почта *<br/><input type='text'/></p>
                        

                        <p className='text'>Сообщение<br/><textarea type='text'/></p>
                        
                        
                        <button>Связаться</button>
                    </form>
                </div>
                <img src={img3} alt='MainImage_2'/>
            </section>

            
        </main>
    )
}