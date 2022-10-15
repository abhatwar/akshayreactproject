import React from 'react'
import './MoviesTime.css';
import starwar1 from '../Assests/starwar1.jpg';
import starwar2 from '../Assests/starwar2.jpg';
import starwar3 from '../Assests/starwar3.jpg';

const MoviesTime =()=> {
  return (<div className='movie'>
    <div className='war'>
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-60" src={starwar1} alt="First slide"/>
      </div>
      <div className="carousel-item">
        <img className="d-block w-60" src={starwar2} alt="Second slide"/>
      </div>
      <div className="carousel-item">
        <img className="d-block w-60" src={starwar3} alt="Third slide"/>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>
<div className='container'>
<div className="about">
  <div className="row">
   
    <div className="col-sm">
    Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop-culture phenomenon.
    </div>
  
  </div>
</div>
</div>
 </div> )
}
export default MoviesTime;