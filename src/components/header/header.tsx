import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import '../header/header.css'

export default function Header(){
    return(
        <>
            <div className="header-container">
                <Link to="/" className='header_name'>СММ редактор</Link>
                <img className='header_logo' src={logo}></img>
            </div>
        </>
    )
}