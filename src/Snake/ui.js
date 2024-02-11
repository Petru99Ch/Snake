import { useState } from "react"
import "./snake.scss"


const SnakeHead = ({dirData}) =>{

   const [dir, setDir]  = useState(dirData == undefined || dirData == "" ? "up" : dirData)

    return(
        <div className={`snake__head dir--${dir}`}>
            
        </div>
    )
}

export {SnakeHead}