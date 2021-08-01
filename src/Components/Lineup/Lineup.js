import './Lineup.css';
import { Link,useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';

const Lineup = () => {

    const {id} = useParams();
    console.log("Inside lineup");
    console.log("id is " + id);

    const [data,setData] = useState({});
    const [isPending, setIsPending] = useState(false);


    useEffect(() => {
        setIsPending(true);
        console.log(id);
        const API_URL = `https://v3.football.api-sports.io/fixtures/lineups?fixture=${ id }`;
                fetch(API_URL, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": `${ process.env.REACT_APP_API_KEY }`
                }
            })
            .then(res => res.json())
            .then(result => {
                setIsPending(false);
                setData(result);
                console.log(result);
            });
    },[])



    return (


        <div className="lineup pb-24">

            <h1 className="lineup-title mt-10 ml-5 mb-8">
                <span className="text-3xl text-white font-extrabold tracking-wider">
                    Team Lineup
                </span>
                {/* <i className="fas fa-circle animate-bounce text-xs text-red-500 ml-4"></i>
                <span className="block text-xl text-white font-semibold">Matches Going On.</span> */}
            </h1>   


            {/* <div className="w-full mt-8 flex justify-center text-white mx-auto p-0 lg:w-3/12">
                
                <div className="w-1/2 text-center p-1 rounded bg-blue-600 ml-3 mr-1">
                    <h3>Barcelona</h3>
                </div>

                <div className="w-1/2 text-center p-1 rounded bg-blue-600 mr-3 ml-1">
                    <h3 className="px-2">Real Madrid</h3>
                </div>
                
            </div> */}

            { isPending && 
              <center>
              <i className="fas fa-circle-notch mt-12 text-blue-600 text-4xl animate-spin"></i>
              </center>}

            {/* First team */}

            {
                    data.results === 0 ? 
                    <div className="text-white mt-32 mx-6">
                        <center>
                            <span className="block animate-bounce text-white text-3xl font-extrabold">OOP's</span>
                            <span className="text-white text-lg">
                                No lineup available.
                                <br />
                                Lineups are available 10 to 20 mim before the kickoff.
                                </span>
                        </center>
                    </div>: <div></div>
            }

            { data.response &&

            <div className="lineup-one mx-3 mt-8">

                { data.response.map( data => (
                <div className="mt-10">

                <div className="club-name flex py-2">

                    <div className="pt-2">
                    <span className="text-white text-lg ml-3 font-bold">{ data.team.name }</span>
                    </div>

                    <img 
                    className="ml-auto w-10 mr-3"
                    src={`${ data.team.logo }`} alt="" />
                    
                </div>

                

                <div className="coach-title h-10 pt-2">
                    <span className="ml-3 text-gray-300 font-bold">
                        Coach
                    </span>
                </div>
                <div className="coach-name h-10 pt-2 border-t">
                    <span className="coach-text text-gray-300">
                    { data.coach.name }
                    </span>
                </div>
                <div className="coach-title h-10 bg-gray-700 pt-2">
                    <span className="ml-3 text-gray-300 font-bold">
                        Starting XI
                    </span>
                    <span className="ml-3 text-gray-300 font-bold">
                        { data.formation }
                    </span>
                </div>

                { data.startXI.map( names => (

                <div>

                <div className="coach-name h-10 pt-2 border-t flex">
                    <span className="shirt-num text-white w-4 ml-3">
                        { names.player.number }
                    </span>
                    <span className="text-gray-300 ml-8">
                    { names.player.name }
                    </span>
                    <span className="text-gray-300 ml-auto mr-4">
                    ({ names.player.pos })
                    </span>
                </div>

                </div>))}


            </div>))}

            </div>}

        </div>

    );
}
 
export default Lineup;