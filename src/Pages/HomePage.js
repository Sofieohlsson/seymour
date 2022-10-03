import Header from '../Components/Header/Header.js'; 
import Footer from '../Components/Footer/Footer.js';
import CustomSelector from '../Components/CustomSelector/CustomSelector.js';
import RandomSelector from '../Components/RandomSelector/RandomSelector.js';

function HomePage() {
     return (
        <div>
            <Header></Header>
            <CustomSelector></CustomSelector>
            <RandomSelector></RandomSelector>
            <Footer></Footer>
        </div>
     ); 
}

export default HomePage; 