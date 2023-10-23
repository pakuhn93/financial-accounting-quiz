import { useState, useEffect } from "react";
import "./accounts.css";
import randNum from "../../utils/randNum";
import { accountProblems } from "../../utils/questions-accounts";

const accounts = ["Asset", "Liability", "Stockholder's Equity", "Revenue", "Expense"];

export default function Accounts(){
    const [question, setQuestion] = useState(accountProblems[randNum(accountProblems.length)]); // the entire problem and its answers
    const [answered, setAnswered] = useState(false); // checks if the problem was answered
    const [answers, setAnswers] = useState({}); // answers are held in key-value pairs
    const [checkCorrect, setCheckCorrect] = useState(false);

    // validates user's answers submitted from the form
    function validateAnswers(problemAnswers){
        console.log("Input:", problemAnswers);
        console.log("Key:", question);
        // ensure problemAnswers has correct key value pairs
        if(problemAnswers.accountType1 && problemAnswers.accountType2 && problemAnswers.account1 && problemAnswers.account2){
            // compare submitted answers to actual answers
            if((problemAnswers.accountType1 == question.accountType1 && problemAnswers.account1 == question.account1 && problemAnswers.accountType2 == question.accountType2 && problemAnswers.account2 == question.account2) || (problemAnswers.accountType1 == question.accountType2 && problemAnswers.account1 == question.account2 && problemAnswers.accountType2 == question.accountType1 && problemAnswers.account2 == question.account1)){
                console.log("CORRECT");
                setCheckCorrect(true);
                return true;
            } else {
                console.log("INCORRECT");
                setCheckCorrect(false); 
                return false;
            }
        } else {
            console.log("INVALID INPUT"); 
            setCheckCorrect(false);
            return false;
        }
    }

    // handles the form data after the form is submitted
    function handleSubmit(e){
        e.preventDefault();
        console.log("Submitted!");

        const form = e.target;
        const formData = new FormData(form);

        const formJson = Object.fromEntries(formData.entries());
        console.log("Data:", formJson);

        setAnswers(formJson);
        setAnswered(true);

        console.log("Validation:", validateAnswers(formJson));
    }

    function handleNextQuestion(e){
        e.preventDefault();
        console.log("Next Question...")

        // reset our state variables when moving onto the next question
        setAnswers({});
        setAnswered(false);
        setQuestion(accountProblems[randNum(accountProblems.length)]);
    }

    console.log("PAGE UPDATED");

    // make sure page updates when this state changes
    // *** MIGHT RUN INTO CONFLICTS WITH DISPLAYING THE WRONG PROBLEM, DUE TO PAGE UPDATE ***
    useEffect(() => {}, [checkCorrect]);

    return (
        <section className="form-centered">
            {
                !answered ?
                (<form id="practice-accounts" onSubmit={handleSubmit}>
                <p className="problem-text">{question.problem}</p>
                <h5>Determine the two account types involved in the example above.</h5>
                <h5>Do these account types increase or decrease?</h5>
                <label htmlFor="accountType1">Choose an Account: </label>
                <select name="accountType1" id="accountType1">
                    {
                        accounts.map((account) => {
                            return (
                                    <option key={`${account}-1`}>{account}</option>
                            );
                        })
                    }
                </select>
                <br></br>

                <label htmlFor="accountIncrease1">Increase</label>
                <input type="radio" id="accountIncrease1" name="account1" value="true" />
                <label htmlFor="accountDecrease1">Decrease</label>
                <input type="radio" id="accountDecrease1" name="account1" value="false" />
                <br></br>
                <br></br>

                <label htmlFor="accountType2">Choose an Account: </label>
                <select name="accountType2" id="accountType2">
                    {
                        accounts.map((account) => {
                            return (
                                    <option key={`${account}-2`}>{account}</option>
                            );
                        })
                    }
                </select>
                <br></br>

                <label htmlFor="accountIncrease2">Increase</label>
                <input type="radio" id="accountIncrease2" name="account2" value="true" />
                <label htmlFor="accountDecrease2">Decrease</label>
                <input type="radio" id="accountDecrease2" name="account2" value="false" />
                <br></br>

                <button type="submit">Submit</button>
            </form>) :
                (<section>
                    <form id="practice-accounts" onSubmit={handleNextQuestion}>
                <p className="problem-text">{question.problem}</p>
                {checkCorrect ? <h3>Correct!</h3> : <h3>Incorrect.</h3>}
                <label htmlFor="accountType1">Choose an Account: </label>
                <select disabled value={answers.accountType1} name="accountType1" id="accountType1" >
                    {
                        accounts.map((account) => {
                            return (
                                    <option key={`${account}-1`}>{account}</option>
                            );
                        })
                    }
                </select>
                <br></br>

                {console.log("account1:", answers.account1)}
                <label htmlFor="accountIncrease1">Increase</label>
                <input disabled checked={answers.account1 == "true" ? true : false} type="radio" id="accountIncrease1" name="account1" value="true" />
                <label htmlFor="accountDecrease1">Decrease</label>
                <input disabled checked={answers.account1 == "false" ? true : false}type="radio" id="accountDecrease1" name="account1" value="false" />
                <br></br>
                <br></br>

                <label htmlFor="accountType2">Choose an Account: </label>
                <select disabled value={answers.accountType2} id="accountType2">
                    {
                        accounts.map((account) => {
                            return (
                                    <option key={`${account}-2`}>{account}</option>
                            );
                        })
                    }
                </select>
                <br></br>

                {console.log("account2:", answers.account2)}
                <label htmlFor="accountIncrease2">Increase</label>
                <input disabled checked={answers.account2 == "true" ? true : false} type="radio" id="accountIncrease2" name="account2" value="true" />
                <label htmlFor="accountDecrease2">Decrease</label>
                <input disabled checked={answers.account2 == "false" ? true : false} type="radio" id="accountDecrease2" name="account2" value="false" />
                <br></br>

                <button type="submit">Next Problem</button>
            </form>

                </section>)
            }
               
        </section>
    );
}