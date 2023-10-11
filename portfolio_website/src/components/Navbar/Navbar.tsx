import './Navbar.css'
import { Link } from 'react-scroll'

export default function Navbar() {
    return (
        <div>
            <ul>
                <li>
                    <Link activeClass="active" smooth spy to="about">
                        ABOUT
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" smooth spy to="projects">
                        PROJECTS
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" smooth spy to="links">
                        LINKS
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" smooth spy to="contact">
                        CONTACT ME
                    </Link>
                </li>
            </ul>
        </div>
    )
}