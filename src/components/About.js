import Banner from './Banner';
import Image from './Image';
import Footer from "./Footer";
import Collapse from "./Collapse";
import image2 from "../assets/image2.png";

function About(){
    return (
        <div>
            <Banner/>
            <Image imageUrl={image2}/>
            <Collapse title='Fiabilité'>
            <div>
                <p>Les annonces postées sur Kasa garantissent une fiabilité totale.</p>
            </div>
            </Collapse>
            <Collapse title='Respect'>
            <div>
                <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.</p>
            </div>
            </Collapse>
            <Collapse title='Service'>
            <div>
                <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.</p>
            </div>
            </Collapse>
            <Collapse title='Sécurité'>
            <div>
                <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
            </div>
            </Collapse>
            <Footer/>
        </div>
    )
}
export default About