import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (

        <div className="navbar">
            <nav className="shadow-lg py-2 pl-4 flex">
                <a 
                href="/"
                className="text-white text-2xl">
                    <span className="font-bold text-white lg:text-3xl md:ml-44">Goal</span>
                    <span className="font-black text-gray-400 text-sm lg:text-lg">CRUSH</span>
                </a>

                <div className="ml-auto mr-44 text-white hidden md:flex">
                    <Link to="/" className="focus:text-blue-600 mx-5 pt-1">
                    <center>
                    <i class="fas fa-home text-2xl block"></i>
                    {/* <span className="text-xs mt-0">Home</span> */}
                    </center>
                    </Link>
                    <Link to="/livescore" className="focus:text-blue-600 mx-5 pt-1">
                    <center>
                    <i class="fas fa-futbol text-2xl"></i>
                    {/* <span className="text-xs mt-0 block">Matches</span> */}
                    </center>
                    </Link>               
                    <Link to="/top-players" className="focus:text-blue-600 mx-5 pt-1">
                    <center>
                    <i class="fas fa-running text-2xl"></i>
                    {/* <span className="text-xs mt-0 block">Players</span> */}
                    </center>
                    </Link>                  
            </div>

            </nav>

        </div>

    );
}
 
export default Navbar;