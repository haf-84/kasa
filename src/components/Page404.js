import Banner from './Banner';
import Footer from "./Footer";
import { Link } from 'react-router-dom';

function Page404(){
    return(
        <div>
            <Banner />
            <div>
                <p>404</p>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <p><Link to="/">Retourner sur la page d'accueil</Link></p>
            </div>
            <Footer />
        </div>
    )
}
export default Page404