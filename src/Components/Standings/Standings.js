import './Standings.css';
import {useEffect,useState} from 'react';

const Standings = () => {

    const [data,setData] = useState({});
    const [isPending, setIsPending] = useState(false);

    // useEffect(() => {
    //     setIsPending(true);
    //     const API_URL = "https://v3.football.api-sports.io/standings?league=39&season=2020";
    //             fetch(API_URL, {
    //         "method": "GET",
    //         "headers": {
    //             "x-rapidapi-host": "v3.football.api-sports.io",
    //             "x-rapidapi-key": "41fd979e6a343ed2f750d0a9f6cdcf66"
    //             }
    //         })
    //         .then(res => res.json())
    //         .then(result => {
    //             setIsPending(false);
    //             setData(result);
    //         });
    // },[])


    function handleChange(e){
        setIsPending(true);
        const API_URL = `https://v3.football.api-sports.io/standings?league=${ e.target.value }&season=2020`;
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

        <div className="standings mx-4 mb-6 pb-24 md:mx-24 lg:mx-60">

            <h1 className="fixture-title mt-10 ml-2 mb-8">
                <span className="text-3xl text-white font-extrabold tracking-wider">
                    League Standings
                </span>
                <span className="block text-xl text-white font-semibold">As Of Now.</span>
            </h1>

            <select name="league" id=""
            onChange={ handleChange }
            className="mt-8 mb-10 border-blue-500 border-2 outline-none league-select text-white text-bold block mx-auto w-60 px-4 py-2 rounded-md">        
              <option value="39">Premier League</option>
              <option value="2">UEFA Champions League</option>
              <option value="3">UEFA Europa League</option>
              <option value="78">Bundesliga</option>
              <option value="61">League 1</option>
              <option value="135">Seria A</option>
              <option value="140">LaLiga Santander</option>
              <option value="324">I-League</option>
              <option value="323">Indian Super League</option>
            </select>

            { data.response && 
            <div className="title-league mb-10">
                <img
                className="inline w-10 bg-white rounded-md full ml-6"
                src={`${ data.response[0].league.logo}`} alt="" />
                <h1 className="inline text-white text-xl ml-3 font-black">{data.response[0].league.name}</h1>
            </div>}
            


            { isPending && 
              <center>
              <i className="fas fa-circle-notch my-3 text-blue-600 text-4xl animate-spin"></i>
              </center>}

              {
                    data.results === 0 ? 
                    <div className="text-white mt-32 mx-6">
                        <center>
                            <span className="block animate-bounce text-white text-3xl font-extrabold">OOP's</span>
                            <span className="text-white text-lg">
                                No data available.
                            </span>
                        </center>
                    </div>: <div></div>
            }


            { data.response &&
            <div className="stands mx-2">

                <div className="flex justify-around text-white mx-2">
                    <div className="w-1/2 flex">
                    <div className="pr-2 flex">
                        <div>
                            <span className="pr-1 text-xs">Clubs</span>
                        </div>
                    </div>
                    </div>
                    <div className="w-1/2 flex justify-around text-xs">
                    <div className="">MP</div>
                    <div className="">W</div>
                    <div className="">D</div>
                    <div className="">L</div>
                    <div className="">GD</div>
                    <div className="">Pts</div>
                    </div>
                </div>

                {data.response[0].league &&

                <div>

                    { data.response[0].league.standings[0].map( positionData => (

                <div className="flex py-3 text-white border-t-2 border-blue-500 text-xs">
                    <div className="w-1/2 flex">
                    <div className="pr-2 flex">
                        <div> 
                            <span className="pr-2">{ positionData.rank }</span>
                        </div>
                    <img 
                        className="w-6 mx-0"
                        src={`${positionData.team.logo}`} alt="" />
                        <span className="club-name ml-1">{positionData.team.name}</span>
                    </div>
                    </div>
                    <div className="w-1/2 flex justify-around">
                    <div className="">{positionData.all.played}</div>
                    <div className="">{positionData.all.win}</div>
                    <div className="">{positionData.all.draw}</div>
                    <div className="">{positionData.all.lose}</div> 
                    <div className="">{positionData.goalsDiff}</div>
                    <div className="">{positionData.points}</div>
                    </div>
                    
                </div>))}

                </div>}
                

            </div>}

            
        </div>
        

    );
}
 
export default Standings;