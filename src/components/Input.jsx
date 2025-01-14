import "./input.css"
import abcd from  "./list.js"

export default function Input(){
    
    
    function formSubmitted(event){
        event.preventDefault()
        const ingredientEl = document.getElementById("input-text").value
        abcd.push({value:ingredientEl})
        console.log(abcd)
    }
    return (
        <form className="body-form" id="form-el" onSubmit={formSubmitted}>
            <input aria-label="add-ingredient" name="ingredient" className="body-input" id="input-text" placeholder="eg: oregano"></input>
            <button className="body-button"> + Add ingredient!</button>
        </form>
    )
}