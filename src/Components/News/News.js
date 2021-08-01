import './News.css';
import {useEffect,useState} from "react";


const News = () => {

    // const env = dotenv.config().parsed;

    console.log("variable is " + process.env.REACT_APP_NEWS_API_KEY);

    const [news,setNews] = useState({});
    const [query, setQuery] = useState();
    const [isPending, setIsPending] = useState(false);
    const pending = [1,2,3,4,5,6,7,8,9,10];

    useEffect(() => {
        getNews();
    },[])

        function handleSubmit(e){
            e.preventDefault();
            setQuery(e.target.value);
            setIsPending(true);
        fetch(`https://content.guardianapis.com/search?section=football&order-by=newest&use-date=last-modified&show-fields=thumbnail&page-size=20&q=${ query }&api-key=${ process.env.REACT_APP_NEWS_API_KEY }`,{
            "method": "GET",
        })
        .then(res => res.json())
        .then(result => {
            setIsPending(false);
            setNews(result);
            console.log(result);
        });
        }


        function getNews(){
        setIsPending(true);
        fetch(`https://content.guardianapis.com/search?section=football&order-by=newest&use-date=last-modified&show-fields=thumbnail&page-size=20&q=transfer&api-key=${ process.env.REACT_APP_NEWS_API_KEY }`,{
            "method": "GET",
        })
        .then(res => res.json())
        .then(result => {
            setIsPending(false);
            setNews(result);
            console.log(result);
        });
    }


    


    return (

        <div className="news pb-20 sm:mx-24 md:mx-24 lg:mx-80">

            <div className="ml-5 mt-6">
              <span className="text-3xl text-white font-extrabold tracking-wider">Sizzling News</span> 
                <span className="block text-xl text-white font-semibold">Recent developments.</span>
            </div>

            <form onSubmit={ handleSubmit } className="w-full mt-6 mb-6">
                <center className="flex mx-auto">
                <input 
                className="news-search ml-2 w-5/6 pl-3 py-2 outline-none border focus:border-blue-500 sm:w-11/12" 
                type="text"
                value={query}
                onChange = {(e) => setQuery(e.target.value)}
                placeholder="Search e.g football or transfer" />
                <button className="news-search-btn outline-none bg-blue-500 px-3"><i className="fas fa-search text-white text-xl"></i></button>
                </center>
            </form>

            { isPending && 
            <div>
              { pending.map( blocks => (
                  <div class="player rounded-lg mx-6 py-8 shadow-md px-3 mt-8 sm:mx-24 md:mx-24 lg:mx-32">
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

            </div>}


            { news.response && 
            <div>
            {news.response.results.map( data => (
                <a href={`${ data.webUrl }`}>
            <div className="news-block grid grid-cols-3 gap-4 mx-3 mb-3 rounded-md py-4 shadow-lg lg:mx-20">
                { data.fields.thumbnail && 
                <div className="thumbnail">
                    <img
                    className="mt-1 ml-3 rounded-md" 
                    src={`${ data.fields.thumbnail }`} alt="" />
                </div>}
                <div className="col-span-2 text-white px-2">
                    <span className="block text-sm pt-1 font-bold lg:text-xl">
                    { data.webTitle }
                    </span>
                    <a href={`${ data.webUrl }`}>
                    <button className="news-btn mt-8 l-2 border border-blue-500 px-4 py-1 rounded-full hover:bg-blue-600 text-white hidden md:block">
                        Read more
                    </button>
                    </a>
                </div>
            </div>
            </a>))}

            </div>}



        </div>

    );
}
 
export default News;