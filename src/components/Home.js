// import './src/App.css';
import Banner from './Banner';
import Image from './Image';
import Footer from './Footer';
import CardGallery from './CardGallery';
import image1 from "../assets/image.png";

function Home() {
    return (
      <div>
          <main>
            <Banner />
            <Image imageUrl={image1}/>
            
            <div className='kasa-gallery-container'>
              <CardGallery/>
            </div>
          
          </main>
          <Footer/>
      </div>
    );
  }
  
  
  export default Home;