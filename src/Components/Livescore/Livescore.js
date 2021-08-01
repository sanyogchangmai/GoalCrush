import './Livescore.css';
import {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';

const Livescore = () => {

    const [data,setData] = useState({});
    const [isPending, setIsPending] = useState(false);

    let today = new Date();
        let month = today.getMonth() + 1;
        let year = today.getFullYear();
        let date = today.getDate();
    
        if(date < 10){
            date = `0${date}`;
        }
        if(month < 10){
            month = `0${month}`;
        }
    
        let currentDate = `${ year }-${ month }-${ date }`;
        console.log(currentDate);

    useEffect(() => {
        setIsPending(true);
        const API_URL = "https://v3.football.api-sports.io/fixtures?live=all";
                fetch(API_URL, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": "41fd979e6a343ed2f750d0a9f6cdcf66"
                }
            })
            .then(res => res.json())
            .then(result => {
                setIsPending(false);
                setData(result);
            });
    },[])

    function handleFixtureLeague(e){
        setIsPending(true);
        console.log("League is " + e.target.value);
        const API_URL = `https://v3.football.api-sports.io/fixtures?status=live&league=${ e.target.value }`;
        fetch(API_URL, {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "41fd979e6a343ed2f750d0a9f6cdcf66"
        }
    })
    .then(res => res.json())
    .then(result => {
        setIsPending(false);
        setData(result);
        console.log(result);
    });
    }
    return (

        <div className="fixtures mx-4 md:mx-24 lg:mx-60">

            <h1 className="live-title mt-10 ml-2 mb-8">
                <span className="text-3xl text-white font-extrabold tracking-wider">
                    Live
                </span>
                <i className="fas fa-circle animate-bounce text-xs text-red-500 ml-4"></i>
                <span className="block text-xl text-white font-semibold">Matches Going On.</span>
            </h1>


            <select name="league" id=""
            onChange={ handleFixtureLeague }
            className="mt-8 mb-2 border-blue-500 border-2 outline-none league-select text-white text-bold block mx-auto w-60 px-4 py-2 rounded-md">   
              <option value="">--- Select league ---</option>     
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


            <div className="fixtures-block pb-20">

                {
                    data.results === 0 ? 
                    <div className="text-white mt-24">
                        <center>
                            <span className="block animate-bounce text-white text-3xl font-extrabold">OOP's</span>
                            <span className="text-white text-lg">
                                No match going on at the moment.
                                <br />
                                Also make sure that you have selected a league or refresh the page.
                                </span>
                        </center>
                    </div>: <div></div>
                }

                { isPending && 
                <center>
                <i className="fas fa-circle-notch my-3 text-blue-600 text-4xl animate-spin"></i>
                </center>}  

                { data.response && 

                <div>

                    {data.response.map( fixture => (
                // <Link to={`/stats/${fixture.fixture.id}`}>
                <div className="fixture shadow-lg py-6 rounded-2xl my-4">
                    {/* <center> */}
                        <span className="text-white font-extrabold ml-8">
                            { currentDate }
                        </span>
                    {/* </center> */}
                    <div className="top mt-3 flex justify-evenly text-white">
                        <div className="home-team w-2/5">
                            
                            <center className="text-sm">
                            <img 
                            className="w-14 mb-3"
                            src={`${fixture.teams.home.logo}`} alt="" />
                            <span className="block font-bold">{fixture.teams.home.name}</span>
                            <span className="block">(Home)</span>
                            </center>
                            

                        </div>
                        <div className="venue">
                            <center>
                            <span className="block mt-4 font-black text-white font-extrabold text-3xl">{ fixture.goals.home }-{ fixture.goals.away }</span>
                            {/* <span className="block text-sm">01:30 IST</span> */}
                            </center>
                            
                        </div>
                        <div className="away-team w-2/5">
                            
                            <center className="text-sm">
                            <img 
                            className="w-14 mb-3"
                            src={`${fixture.teams.away.logo}`} alt="" />
                            <span className="block font-bold">{fixture.teams.away.name}</span>
                            <span className="block">(Away)</span>
                            </center>
                        </div>
                    </div>
                    {/* <center className="mt-4 text-xs">
                        <span className="block">Estadio de Mendizorroza,</span>
                        <span>Vitoria-Gasteiz</span>
                    </center> */}
                </div>))}
                {/* </Link> */}
                </div>}

            </div>

        </div>
    );
}
 
export default Livescore;