import { useParams, Navigate } from "react-router-dom";
import data from './Data.json';

//utilisation de useParams hook pour récupérer le paramètre id de l'url 

function CardDetails(){
    const {id}= useParams();
    const card= data.find(item => item.id === id);

    // Redirection vers la page 404 si la card avec l'id spécifié n'est pas trouvé
    if(!card){
        return <Navigate to="/404"/>
    }
    //Génération des détails de la card
    return(
        <div>

        </div>
    )
}
export default CardDetails