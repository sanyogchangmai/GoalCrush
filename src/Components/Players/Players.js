import './Players.css';
import {useState} from "react";

const Players = () => {

    const [data,setData] = useState({});
    const [isPending, setIsPending] = useState(false);

    const pending = [1,2,3];

    function handleChange(e){
        setIsPending(true);
        const API_URL = `https://v3.football.api-sports.io/players/topscorers?season=2020&league=${e.target.value}`;
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
            });
    }

    

    return (

        <div className="players-block mt-10 pb-10">
          <div className="md:mx-24 lg:mx-96">
            <span className="block text-white text-4xl ml-6 mb-2 font-black">
              TOP-20 Players.
            </span> 

            <select name="league" id=""
          onChange={ handleChange }
          className="mt-8 border-blue-500 border-2 outline-none league-select text-white text-bold block mx-auto w-60 px-4 py-2 rounded-md">        
              <option>--- Select League ---</option>
              <option value="2">UEFA Champions League</option>
              <option value="3">UEFA Europa League</option>
              <option value="39">Premier League</option>
              <option value="78">Bundesliga</option>
              <option value="61">League 1</option>
              <option value="135">Seria A</option>
              <option value="140">LaLiga Santander</option>
              <option value="324">I-League</option>
              <option value="323">Indian Super League</option>
          </select>
      
          
          </div>

          


          { isPending && 
          <div>
              { pending.map( blocks => (
                  <div class="player rounded-lg mx-6 py-8 shadow-md px-3 mt-8 md:mx-32 lg:mx-96">
                  <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-gray-400 h-12 w-12"></div>
                    <div class="flex-1 space-y-4 py-1">
                      <div class="h-4 bg-gray-400 rounded w-3/4"></div>
                      <div class="space-y-2">
                        <div class="h-4 bg-gray-400 rounded"></div>
                        <div class="h-4 bg-gray-400 rounded w-5/6"></div>
                      </div>
                    </div>
                  </div>
                  </div>
              ))}

              <center>
              <i className="fas fa-circle-notch my-3 text-blue-600 text-4xl animate-spin"></i>
              </center>
                  
          
          </div>
          }

          

                {
                    data.results === 0 ? 
                    <div className="text-white mt-24">
                        <center>
                            <span className="block animate-bounce text-white text-3xl font-extrabold">OOP's</span>
                            <span className="text-white text-lg">
                                No data found.
                                </span>
                        </center>
                    </div>: <div></div>
                }

          
          { data.response && 
          <div>
            
              { data.response.map( man => (
            <div className="player rounded-lg mx-6 py-6 shadow-md mt-8 md:mx-32 lg:mx-96">

                <div className="img flex">
                    <img
                    className="block h-24 rounded-full ml-6 md:ml-16" 
                    src={`${man.player.photo}`} 
                    alt="" />
                    <div className="name mr-auto ml-8 mt-2">
                    <span className="block text-red-600 text-sm">{ man.statistics[0].games.position }</span>
                    <span className="block text-white font-black text-xl">{ man.player.name }</span>
                    <span className="block text-gray-300 font-bold -mt-2">{ man.statistics[0].team.name }</span>
                    </div>
                </div>
                <div className="details flex justify-evenly mt-4 w-full text-center">
                    <div className="games p-3 rounded-md w-3/12">
                        <span className="block text-white font-bold tracking-wide">Games</span>
                        <span className="block text-gray-200 font-bold">{ man.statistics[0].games.appearences }</span>
                    </div>
                    <div className="goals p-3 rounded-md w-3/12">
                        <span className="block text-white font-bold tracking-wide">Goals</span>
                        <span className="block text-gray-200 font-bold">{ man.statistics[0].goals.total }</span>
                    </div>
                    <div className="rating p-3 rounded-md w-3/12">
                        <span className="block text-white font-bold tracking-wide">Assist</span>
                        <span className="block text-gray-200 font-bold">{ man.statistics[0].goals.assists }</span>
                    </div>                   
                </div>
               
            </div>
            ))} 
            </div>
            }

        </div>

    );
}
 
export default Players;