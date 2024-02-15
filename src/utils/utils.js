const Component = ({ClName, id,children}) =>{
    return(
        <div className={ClName} id={id}>
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

export {Component, withCoordinate, withDirection}