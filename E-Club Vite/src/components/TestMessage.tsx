import { MouseEvent } from "react"
import "./TestMessage.css"
interface Props {
    items : string[];
    onSelectItem:(item:string)=>void
    
}
function TestMsg({items,onSelectItem}:Props){
   
    const handleClick = (event:MouseEvent)=> console.log(event);
    return( 
    <>
        <ul className="Backchod">
            {items.map((item) =>(
                <li
                key = {item} 
                onClick={handleClick} > {item} </li>
            ))}
        </ul>
    </>
    );

}
export default TestMsg