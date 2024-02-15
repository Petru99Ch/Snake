
import "./style.scss"



const Component = ({ClName, children}) =>{
    return(
        <div className={ClName}>
            {children}
        </div>
    )
}


const withCoordinate = (Component) =>{
    return ({coord: {top, left}, ...props})=>{
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

    const SnakeBody = withCoordinate(
        withDirection(Component)
    )

const Snake = ({data:{children}}) =>{
    return(
        <Component ClName="snake">
          
            {
                children.map((childData,idx) => {
                 return   (childData.ClName === "head" && <SnakeHead key={`k-${idx}`} {...childData}/>) ||
                          (childData.ClName === "body" && <SnakeTail key={`k-${idx}`} {...childData}/>) ||
                          (childData.ClName === "tail" && <SnakeTail key={`k-${idx}`} {...childData}/>) 
                })
            }
        </Component>
    )
}




export {Snake}