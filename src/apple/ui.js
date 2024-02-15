import { Component, withCoordinate } from "../utils/utils"
import "./apple.scss"

const AppleStr = withCoordinate(Component)

const Apple = ({data}) =>{
   
  return (  
        <Component ClName='apple' >
            <AppleStr {...data}  />
        </Component>
            
        )
}

export {Apple}