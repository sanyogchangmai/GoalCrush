import './Stats.css';
import { Link,useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';

const Stats = () => {

    const {id} = useParams();
    console.log("Inside lineup");
    console.log("id is " + id);

    const [data,setData] = useState({});
    const [isPending, setIsPending] = useState(false);

    useEffect(() => {
        setIsPending(true);
        console.log(id);
        const API_URL = `https://v3.football.api-sports.io/fixtures/statistics?fixture=${ id }`;
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
            })
            .catch(function(err){
                console.log(err);
            });
    },[])


    return (

        <div className="statistics">

            <h1 className="fixture-title mt-10 ml-5 mb-8">
                <span className="text-3xl text-white font-extrabold tracking-wider">
                    Match Report
                </span>
                {/* <span className="block text-xl text-white font-semibold">Scheduled Matches.</span> */}
            </h1>

            { isPending && 
              <center>
              <i className="fas fa-circle-notch mt-12 text-blue-600 text-4xl animate-spin"></i>
              </center>}

                {
                    data.results === 0 ? 
                    <div className="text-white mt-32 mx-6">
                        { console.log( data.results)}
                        <center>
                            <span className="block animate-bounce text-white text-3xl font-extrabold">OOP's</span>
                            <span className="text-white text-lg">
                                No data available available.
                                <br />
                                Sorry for inconvinience.
                                </span>
                        </center>
                    </div>: <div></div>
                }

            { data.response && 

            <div className="stats-block">
                <div className="head text-white flex">
                    <div className="team-one w-1/2 text-center ml-4 font-bold text-xl border-r">{ data.response[0].team.name }</div>
                    <div className="team-two w-1/2 text-center mr-4 font-bold text-xl border-l">{ data.response[1].team.name }</div>
                </div>

                <div className="head text-white mx-3 mt-4">
                    <center className="flex">
                    <div className="team-one blackshade w-1/4 text-white h-10 pt-2">{ data.response[0].statistics[0].value === null ? 0 : data.response[0].statistics[0].value }</div>
                    <div className="team-two blackshade w-1/2 text-white h-10 pt-2">Shots on Goal</div>
                    <div className="team-two blackshade w-1/4 text-white h-10 pt-2">{ data.response[1].statistics[0].value === null ? 0 : data.response[1].statistics[0].value }</div>
                    </center>
                    <center className="flex">
                    <div className="team-one lightshade w-1/4 text-white h-10 pt-2">{ data.response[0].statistics[2].value === null ? 0 : data.response[0].statistics[2].value }</div>
                    <div className="team-two lightshade w-1/2 text-white h-10 pt-2">Total Shots</div>
                    <div className="team-two lightshade w-1/4 text-white h-10 pt-2">{ data.response[1].statistics[2].value === null ? 0 : data.response[1].statistics[2].value }</div>
                    </center>
                    <center className="flex">
                    <div className="team-one blackshade w-1/4 text-white h-10 pt-2">{ data.response[0].statistics[6].value === null ? 0 : data.response[0].statistics[6].value }</div>
                    <div className="team-two blackshade w-1/2 text-white h-10 pt-2">Fouls</div>
                    <div className="team-two blackshade w-1/4 text-white h-10 pt-2">{ data.response[1].statistics[6].value === null ? 0 : data.response[1].statistics[6].value }</div>
                    </center>
                    <center className="flex">
                    <div className="team-one lightshade w-1/4 text-white h-10 pt-2">{ data.response[0].statistics[7].value === null ? 0 : data.response[0].statistics[7].value }</div>
                    <div className="team-two lightshade w-1/2 text-white h-10 pt-2">Corner Kicks</div>
                    <div className="team-two lightshade w-1/4 text-white h-10 pt-2">{ data.response[1].statistics[7].value === null ? 0 : data.response[1].statistics[7].value }</div>
                    </center>
                    <center className="flex">
                    <div className="team-one blackshade w-1/4 text-white h-10 pt-2">{ data.response[0].statistics[8].value === null ? 0 : data.response[0].statistics[8].value }</div>
                    <div className="team-two blackshade w-1/2 text-white h-10 pt-2">Offsides</div>
                    <div className="team-two blackshade w-1/4 text-white h-10 pt-2">{ data.response[1].statistics[8].value === null ? 0 : data.response[1].statistics[8].value }</div>
                    </center>
                    <center className="flex">
                    <div className="team-one lightshade w-1/4 text-white h-10 pt-2">{ data.response[0].statistics[9].value === null ? 0 : data.response[0].statistics[9].value }</div>
                    <div className="team-two lightshade w-1/2 text-white h-10 pt-2">Possession</div>
                    <div className="team-two lightshade w-1/4 text-white h-10 pt-2">{ data.response[1].statistics[9].value === null ? 0 : data.response[1].statistics[9].value }</div>
                    </center>
                    <center className="flex">
                    <div className="team-one blackshade w-1/4 text-white h-10 pt-2">{ data.response[0].statistics[10].value === null ? 0 : data.response[0].statistics[10].value }</div>
                    <div className="team-two blackshade w-1/2 text-white h-10 pt-2">Yellow Cards</div>
                    <div className="team-two blackshade w-1/4 text-white text-black h-10 pt-2">{ data.response[1].statistics[10].value === null ? 0 : data.response[1].statistics[10].value }</div>
                    </center>
                    <center className="flex">
                    <div className="team-one lightshade w-1/4 text-white h-10 pt-2">{ data.response[0].statistics[11].value === null ? 0 : data.response[0].statistics[11].value }</div>
                    <div className="team-two lightshade w-1/2 text-white h-10 pt-2">Red Cards</div>
                    <div className="team-two lightshade w-1/4 text-white h-10 pt-2">{ data.response[1].statistics[11].value === null ? 0 : data.response[1].statistics[11].value }</div>
                    </center>
                    <center className="flex">
                    <div className="team-one blackshade w-1/4 text-white h-10 pt-2">{ data.response[0].statistics[12].value === null ? 0 : data.response[0].statistics[12].value }</div>
                    <div className="team-two blackshade w-1/2 text-white h-10 pt-2">Total passes</div>
                    <div className="team-two blackshade w-1/4 text-white h-10 pt-2">{ data.response[1].statistics[12].value === null ? 0 : data.response[1].statistics[12].value }</div>
                    </center>
                </div>
            </div>}

        </div>
   
    );
}
 
export default Stats;