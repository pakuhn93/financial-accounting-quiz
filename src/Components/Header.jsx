import { Link } from "react-router-dom";

export default function Header(){
    return (
        <header>
            <Link to="/practice/accounts">Click here to practice account questions!</Link>
        </header>
    );
}