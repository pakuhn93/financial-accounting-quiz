import './footer.css';
import { Link } from 'react-router-dom';

export default function Footer(){
    return (
        <footer>
            <Link to="/about" className="links">About</Link>
            <Link to="/suggestions" className="links">Suggestions</Link>
            <Link target="_blank" to="https://github.com/pakuhn93/financial-accounting-quiz" className="links">GitHub</Link>
        </footer>
    );
}