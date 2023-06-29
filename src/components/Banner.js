import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

function Banner(){

    return (
        <div className='kasa-banner'>
            <img src={logo} alt="kasa" className='kasa-logo'></img>
                <ul>
                    <li> <Link to="/">Accueil</Link></li>
                    <li><Link to="/About">A propos</Link></li>
                </ul>
        </div>
    )

}
export default Banner