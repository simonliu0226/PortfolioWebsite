import './Navbar.css'
import { Link } from 'react-scroll'

export default function Navbar() {
    return (
        <div>
            <ul>
                <li>
                    <Link activeClass="active" smooth spy to="about">
                        <button>ABOUT</button>
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" smooth spy to="projects">
                        <button>PROJECTS</button>
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" smooth spy to="links">
                        <button>LINKS</button>
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" smooth spy to="contact">
                        <button>CONTACT ME</button>
                    </Link>
                </li>
            </ul>
        </div>
    )
}