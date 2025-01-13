import "./input.css"

export default function Input(){
    
    return (
        <form className="body-form">
            <input aria-label="add-ingredient" className="body-input" placeholder="eg: oregano"></input>
            <button className="body-button"> + Add ingredient!</button>
        </form>
    )
}