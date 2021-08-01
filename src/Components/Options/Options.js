import './Options.css';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

const Options = () => {

    const [live,setLive] = useState("");
    const [fixture,setFixture] = useState("");
    const [standings,setStandings] = useState("");


    function handleRecent(){
        setLive("bg-blue-600");
        setFixture("");
        setStandings("");
    }

    function handleFixture(){
        setLive("");
        setFixture("bg-blue-600");
        setStandings("");
    }

    function handleStandings(){
        setLive("");
        setFixture("");
        setStandings("bg-blue-600");
    }


    return (

        <div className="options my-4">

            <div className="w-full flex justify-center text-white mx-auto p-0 lg:w-3/12">
                
                <Link onClick={ handleRecent } to="/recent" className={`live w-3/12 text-center p-1 rounded ${ live }`}>
                <div className="">
                    <h3>Recent</h3>
                </div>
                </Link>

                <Link onClick={ handleFixture } to="/fix" className={`fixture-tab w-3/12 text-center p-1 rounded ${ fixture }`}>
                <div className="">
                    <h3 className="px-2">Fixtures</h3>
                </div>
                </Link>

                <Link onClick={ handleStandings } to="/standings" className={`status w-3/12 text-center p-1 rounded ${ standings }`}>
                <div className="">
                    <h3>Standing</h3>
                </div>
                </Link>
                
            </div>

        </div>

    );
}
 
export default Options;