import { Link } from "react-router-dom";
import "./practice.css";

export default function Practice(){
    return (
        <section id="sectionPractice">
            <h1>BUS 120 Practice</h1>
            <section id="linksPractice">
                <Link to="/practice/accounts">Account Problems</Link>
                <Link to="/practice/flashcards">Flashcards</Link>
            </section>
        </section>
    );
}