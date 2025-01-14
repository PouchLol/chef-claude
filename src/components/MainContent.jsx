import "./maincontent.css"
import list from "./list.js"


export default function MainContent(){
    const listEl=list.map((x)=>{
        return <li key={list.indexOf(x)+1}>{x.value}</li>
    })
    return (
        <>
        <h1 className="ingredients-header">Ingredients in Hand: </h1>
        <ul className="ingredients-list">
            {listEl}
        </ul>
        </>
    )
}