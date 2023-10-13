import { Link } from 'react-scroll'
import './Header.css'

export default function Header() {
    return (
        <div className='header-div'>
            <h1>Building Castles in the Cloud with Lines of Code.</h1>
            <Link activeClass="active" smooth spy to="about">
                <button>Let's Dive In</button>
            </Link>
        </div>
    )
}