import './App.css';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

import Home from './components/Home';

import Page404 from './components/Page404';
import About from './components/About';

// import Banner from "./components/Banner";
// import Image from "./components/Image";
// import CardGallery from "./components/CardGallery";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <div>
//       <main>
//         <Banner/>
//         <Image imageUrl='../assets/image.png'/>
//         <div className='kasa-gallery-container'>
//           <CardGallery/>
//         </div>
//       </main>
//       <Footer/>
//     </div>
//   );
// }

function App(){
  return (
    <Router>
      <Routes >
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<Page404/>} />
      </Routes>
    </Router>
  )
}

export default App