import './About.css'
import profilePic from '../../assets/ProfilePic.jpg'

export default function About() {
    return (
        <div>
            <div>
                <h2>About</h2>
                <p>Hi, I'm Simon. I am a hands-on and detail oriented student studying at Arizona State University 
                    working towards a Bachelor's degree in Computer Science. I have experience in creating frontend 
                    applications. While I'm away from the keyboard, I enjoy watching my favorite TV shows, working 
                    out at the gym, and the occasional rock climbing.</p>
            </div>
            <div>
                <img src={profilePic} alt='Profile Picture' id='profilePic' />
            </div>
        </div>
    )
}