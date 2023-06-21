// import './src/App.css';
import Banner from './Banner';
import Image from './Image';
import Footer from './Footer';
import CardGallery from './CardGallery';

function Home() {
    return (
      <div>
          <main>
            <Banner />
            <Image imageUrl="../assets/image.png"/>
            
            <div className='kasa-gallery-container'>
              <CardGallery/>
            </div>
          
          </main>
          <Footer/>
      </div>
    );
  }
  
  
  export default Home;