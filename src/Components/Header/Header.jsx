import { Link } from "react-router-dom";
import "./header.css";

export default function Header(){
    return (
        <header>
            <Link to="/" className="links">Home</Link>
            <Link to="/practice" className="links">Practice</Link>
        </header>
    );
}