
import "./style.scss"



const Component = ({ClName, children}) =>{
    return(
        <div className={ClName}>
            {children}
        </div>
    )
}


const withCoordinate = (Component) =>{
    return ({top, left, ...props})=>{
        return(
            <div style={{top:`${top}px`, left:`${left}px`, position: "absolute"}}>
                <Component {...props}/>
            </div>
        )
        

    }
}


const withDirection = (Component) =>{
    return({dir, ...props}) =>{
        return(
            <div className={`dir-${dir}`}>
                <Component {...props}/>
            </div>
        )
    }
}




// SNAKE Parts
const SnakeHead = withCoordinate(
        withDirection(Component)
    )

const SnakeTail = withCoordinate(
        withDirection(Component)
    )

const Snake = () =>{
    return(
        <Component ClName="snake">
            <SnakeHead top={100} left={200} ClName ="head" dir="up" />
            <SnakeTail top={172} left={200} ClName ="tail" dir="up" />
        </Component>
    )
}




export {Snake}