import { Link } from 'react-router-dom'
import bgImage from '../Assets/Juice_bg.jpg'
import '../styles/Home.css'

function Home() {
    return (
        <div className='home' style={{backgroundImage : `url(${bgImage})`}} >
            <div className='headerContainer' >
                <h1>Juice Bar</h1>
                <p>Fresh and Juicy as Always</p>
                <Link to='/menu'>
                    <button> ORDER NOW </button>
                </Link>
            </div>
        </div>
    );
}
export default Home
