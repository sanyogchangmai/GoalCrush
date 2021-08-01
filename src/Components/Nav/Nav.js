import './Nav.css';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (

        <div className="nav">
            <div className="nav-tab text-white fixed bottom-0 w-full block flex justify-evenly py-2 bg-gray-800 z-30">
                <div className="home-tab">
                    <Link to="/" className="focus:text-blue-600">
                    <center>
                    <i class="fas fa-home text-2xl block"></i>
                    <span className="text-xs mt-0">Home</span>
                    </center>
                    </Link>
                </div>
                <div className="matches-tab">
                    <Link to="/livescore" className="focus:text-blue-600">
                    <center>
                    <i class="fas fa-futbol text-2xl"></i>
                    <span className="text-xs mt-0 block">Matches</span>
                    </center>
                    </Link>               
                </div>
                <div className="news-tab">
                    <Link to="/top-players" className="focus:text-blue-600">
                    <center>
                    <i class="fas fa-running text-2xl"></i>
                    <span className="text-xs mt-0 block">Players</span>
                    </center>
                    </Link>                  
                </div>
            </div>
        </div>

    );
}
 
export default Nav;
