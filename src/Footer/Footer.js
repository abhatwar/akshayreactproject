import './Footer.css'

const Footer=()=>{
return(
    <div className='footer'>
        <h2 className='Brand-Name'>STAR WARS MOVIES</h2>

        <div className="flex-Container">
            <div><h3>Watch</h3></div>
            <div className='ver-line'></div>
            <div><h3>Download</h3></div>
            <div className='ver-line'></div>
            <div><h3>Enjoy Movies</h3></div>
        </div>
        <hr className='line'/>
        <table className='table-data'>
            <tr>
                <td>mob</td>
                <td>:</td>
                <td>7875817350</td>
            </tr>
            <tr>
                <td>email</td>
                <td>:</td>
                <td>akshay.hatwar5678@gmail.com</td>
            </tr>
            
        </table>
    </div>

)
}
export default Footer;