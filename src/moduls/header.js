import './header.scss'
//-----------res-----------
import logo from '../res/logo.png'

export default function Header(){
    return(
        <header>
            <img src={logo} alt='logo'/>
            <nav>
                <ul>
                    <li><a href="#section1">Визы</a></li>
                    <li><a href="#section1">Иностранные студенты в США</a></li>
                    <li><a href="#section1">О Karyna USA</a></li>
                    <li><a href="#section1">Связаться с нами</a></li>
                </ul>
            </nav>
        </header>
    )
}