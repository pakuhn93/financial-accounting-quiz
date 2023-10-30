import { Link } from "react-router-dom";
import "./practice.css";

const textPractice = "Below is a list of activities that you can choose from to help solidify your Financial Accounting knowledge.";

export default function Practice(){
    return (
        <section id="sectionPractice">
            <h1>BUS 120 Practice</h1>
            <p>&emsp;{textPractice}</p>
            <section id="linksPractice">
                <Link to="/practice/accounts">Account Problems</Link>
                <Link to="/practice/flashcards">Flashcards</Link>
            </section>
        </section>
    );
}