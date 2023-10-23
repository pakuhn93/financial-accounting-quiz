import { useState } from 'react';

export default function Test(){

    const [formData, setFormData] = useState({});
    const [answered, setAnswered] = useState(false);

    function handleSubmit(e){
        e.preventDefault();

        const form = e.target; // grab this form's information and store it int oa variable
        const myForm = new FormData(form); // create a new FormData object that contains our form info
        const myFormJson = Object.fromEntries(myForm.entries());

        setFormData(myFormJson); // sets our state variable
        setAnswered(true);

        console.log("Test", myFormJson);
        console.log("Data", formData);
    }

    return (
        <>
            {!answered ? 
            (
                <form id='testForm' onSubmit={handleSubmit}>
                
                    <label htmlFor='choice1'>Choice 1</label>
                    <input type='radio' id='choice1' name="testing1" value="true" />
                    <br></br>
                    <label htmlFor='choice2'>Choice 2</label>
                    <input type='radio' id='choice2' name="testing1" value="false" />
                    <br></br>
                    <br></br>
                    <label htmlFor='choice1'>Choice 1</label>
                    <input type='radio' id='choice1' name="testing2" value="true" />
                    <br></br>
                    <label htmlFor='choice2'>Choice 2</label>
                    <input type='radio' id='choice2' name="testing2" value="false" />
                    <br></br>

                    <button type='submit'>Submit</button>
                </form>
            ) :
            (
                <form id='testForm' onSubmit={handleSubmit}>
                
                    <label htmlFor='choice1'>Choice 1</label>
                    <input disabled type='radio' id='choice1' name="testing1" value="true" />
                    <br></br>
                    <label htmlFor='choice2'>Choice 2</label>
                    <input disabled type='radio' id='choice2' name="testing1" value="false" />
                    <br></br>
                    <br></br>
                    <label htmlFor='choice1'>Choice 1</label>
                    <input disabled type='radio' id='choice1' name="testing2" value="true" />
                    <br></br>
                    <label htmlFor='choice2'>Choice 2</label>
                    <input disabled type='radio' id='choice2' name="testing2" value="false" />
                    <br></br>

                    <button type='submit'>Submit</button>
                </form>
            )}
        </ >
    );
}