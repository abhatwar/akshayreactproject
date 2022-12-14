import react, { useEffect, useState } from "react";
import axios from 'axios'


import './Movielist.css';



const Movielist = () => {
    const [getList, setList] = useState([])


    useEffect(() => {
        initialDetails();

    }, [])

    const initialDetails = async () => {
		const ans= await axios.get("https://www.omdbapi.com/?s=star&apikey=86fd54e6")
        setList([...ans.data.Search])
	};




    return (<div className="movielist-first">


    
        {getList.map((obj, index) => {
            return (
                <div key={index}>
                    <div className="card" style={{ width: "18rem" }}>
                       <div className="one"> <img className="card-img-top" src={obj.Poster} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{index + 1}{")"}{obj.Title}</h5>
                            <p className="card-text">{obj.Year}.</p>                       
                         </div>
                         </div>
                    </div>
                </div>




            )
        })}
    </div>)

}
export default Movielist;