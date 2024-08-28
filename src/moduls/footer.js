import './footer.scss'
//-----------res--------
import inst from '../res/instagram.svg'
import ytube from '../res/youtube.svg'

export default function Footer(){


    return(
        <footer>
            <div className='content-1'>

                <hr/>
                <h2>KARYNA USA</h2>
                <h3>Thrive Educational Consulting</h3>

                <h4>Контакты</h4>
                <div className='social'>
                    <a href='https://www.instagram.com/karynausa/'><img src={inst} alt='contact' /></a>
                    <a href='https://www.youtube.com/@KarynaUSA'><img src={ytube} alt='contact' /></a>
                </div>
                <p >info@karynausa-edu.com</p>
                <a href='https://api.whatsapp.com/message/MGQGJWGVAAXWD1?autoload=1&app_absent=0'>Написать в WhatsApp</a>
            </div>
            <div className='content-2'>
                <h4>Навигация</h4>

                <nav>
                    <ul>
                        <li><a href='/'>Главная</a></li>
                        <li><a href='/'>Языковые курсы</a></li>
                        <li><a href='/'>Программы сертификата</a></li>
                        <li><a href='/'>Высшее образование</a></li>
                        <li><a href='/'>Услуги</a></li>
                        <li><a href='/'>Гайд</a></li>
                        <li><a href='/'>Для иностранных студентов</a></li>
                        <li><a href='/'>О компании</a></li>
                        <li><a href='/'>Связаться с нами</a></li>
                        <li><a href='/'>Блог</a></li>
                        
                    </ul>
                </nav>
            </div>
            <div className='content-3'>
                <p>Мы не предоставляем юридических услуг. Karyna USA | THRIVE Educational Consulting является официальным партнером школ в США</p>
                <a href='/'>Публичная офета</a>
                <a href='/'>Политика конфиденциальности</a>

                <h5>© 2024 Karyna USA</h5>
            </div>
        </footer>
    )
}