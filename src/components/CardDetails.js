import { useParams, Navigate } from "react-router-dom";
import data from './Data.json';
import Banner from "./Banner";
import Collapse from "./Collapse";
import Footer from "./Footer";


//utilisation de useParams hook pour récupérer le paramètre id de l'url 

function CardDetails(){
    const {id}= useParams();
    const card= data.find(item => item.id === id);

    // Redirection vers la page 404 si la card avec l'id spécifié n'est pas trouvé
    if(!card){
        return <Navigate to="/404"/>
    }
    //Fonction pour générer les étoiles (rating)
    const generateStars=()=>{
        const stars=[];
        const totalStars=5;
        for (let i = 0; i < totalStars; i++) {
            if (i < card.rating) {
              stars.push(<i className="fa-solid fa-star card-details-red-star" key={i} />);
            } else {
              stars.push(<i className="fa-solid fa-star card-details-grey-star" key={i} />);
            }
          }
        return stars
    }
    //Génération des détails de la card
    return(
        <div>
            <Banner />
            <div>
                <div>
                    <h1>{card.title}</h1>
                    <p>{card.location}</p>
                </div>
                <div className="card-details-host-info">
                    <p>{card.host.name}</p>
                    <img src={card.host.picture}/>
                </div>
            </div>
            <div>
                <div className="card-details-stars">
                    {generateStars()}
                </div>
                <ul className="card-details-tags">
                    {card.tags.map((tag,index)=>(
                        <li key={index}>{tag}</li>
                    ))}
                </ul>

            </div>
            <div>
                <Collapse title="Description">
                    <p>{card.description}</p>
                </Collapse>
                
                <Collapse title="Équipements">
                    <ul> 
                    {card.equipments.map((equipment,index) => (
                        <li key={index}> {equipment}</li>
                    ))}
                    </ul>
                </Collapse>
            </div>
            <Footer/>
        </div>
    )
}
export default CardDetails