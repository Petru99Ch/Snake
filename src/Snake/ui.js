
import "./style.scss"
import {Component} from "../utils/utils"
import {withDirection} from "../utils/utils"
import {withCoordinate} from "../utils/utils"







// SNAKE Parts
const SnakeHead = withCoordinate(
        withDirection(Component)
    )

const SnakeTail = withCoordinate(
        withDirection(Component)
    )

    const SnakeBody = withCoordinate(
        withDirection(Component)
    )

const Snake = ({data:{children}}) =>{
    return(
        <Component ClName="snake">
          
            {
                children.map((childData,idx) => {
                 return   (childData.ClName === "head" && <SnakeHead key={`k-${idx}`} {...childData}/>) ||
                          (childData.ClName === "body" && <SnakeBody key={`k-${idx}`} {...childData}/>) ||
                          (childData.ClName === "tail" && <SnakeTail key={`k-${idx}`} {...childData}/>) 
                })
            }
        </Component>
    )
}




export {Snake}