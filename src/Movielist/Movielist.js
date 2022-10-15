import react, { useEffect, useState } from "react";
import axios from 'axios'


import './Movielist.css';



const Movielist = () => {
    const [getList, setList] = useState([])


    useEffect(() => {
        initialDetails();

    }, [])

    const initialDetails = async () => {
		const ans= await axios.get("https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=20&sort_by=&sort_dir=desc&filter=")
        setList([...ans.data.result.products])
	};

    // const initialDetails = async () => {
	// 	const url = `http://www.omdbapi.com/?s=star wars&apikey=263d22d8`;

	// 	const response = await fetch(url);
	// 	const responseJson = await response.json();

	// 	if (responseJson.Search) {
	// 		setList(responseJson.Search);
	// 	}
	// };


    return (<div className="movielist-first">


    
        {getList.map((obj, index) => {
            return (
                <div key={index}>
                    <div className="card" style={{ width: "18rem" }}>
                       <div className="one"> <img className="card-img-top" src={obj.image} alt="Card image cap" />
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