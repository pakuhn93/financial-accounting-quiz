import { Link } from "react-router-dom";
import "./header.css";

export default function Header(){
    return (
        <header>
            <Link to="/">Home</Link>
            <Link to="/practice">Practice</Link>
        </header>
    );
}