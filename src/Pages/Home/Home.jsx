import "./home.css";

const textIntro = "Hello everyone and welcome! My name is Paul and this is a little project that I have been working on during my downtime tutoring at Cuyamaca College. This website is intended to help students practice material related to the BUS 120 - Financial Accounting course."


export default function Home(){
    return (
        <section id="sectionHome">
            <h1>Homepage</h1>
            <p id="textIntro">&emsp;{textIntro}</p>
        </section>
    );
}