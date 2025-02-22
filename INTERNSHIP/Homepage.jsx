import NavBar from '../Components/NavBar'
import '../assets/css/Homepage.css';
// import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';


const Homepage = () => {
  return (
    
    <div>
    <div >
    <NavBar />
    </div>
    <div className='Home'>
    <div className='contentHome'>
    <h1 style={{ paddingTop: "140px", color: "black", marginBottom: "30px" }}>Welcome to the Admin Page for NRI Yacht</h1>
    <div className="typeHome" style={{ color: "black", marginBottom: "320px" }}>
    <h3>Your central control hub for managing and overseeing the operations of NRI Yacht services.
     This user-friendly interface empowers administrators with the tools needed to efficiently handle various aspects of the yacht reservation system.
    </h3>
    </div>
    </div>
    </div>
    <Footer />
    </div>
    
    
    );
}

export default Homepage;