import { Apple } from "../apple/ui"
import { Snake } from "../snake/ui"

import { useEffect, useReducer} from "react"


const reduceGameState = (state, action) =>{
    // 1. find the snake & snake index 

    let snakeIdx = state.children
        .findIndex(item => item.name ="snake")

        // 1.1 update the snake head direction 
        if(action.direction) {
            state.children[snakeIdx].children[0].dir = action.direction
        }
    // 2. computed the values
  
    state.children[snakeIdx].children = state.children
         .find(item => item.name == "snake")
         .children
         .reverse()
         .map((item, idx, arr) =>{
            if(item.dir) {
                if(item.name !== "head" ){
                    
                    item.dir = arr[idx+1].dir
                    
                    item.coord = {...arr[idx+1].coord}

                } else {
                    
                    if(item.dir == "up"){
                        item.coord.top--
                    } 
                    else if(item.dir == "down"){
                        item.coord.top++
                    } 
                    else if(item.dir == "right"){
                        item.coord.left++
                    } 
                    else if(item.dir == "left"){
                        item.coord.left--
                    }  
                } 
            }
            
           
            return item
            
         }).reverse()
    //  3. clone the previous gameData
    let newState = structuredClone(state)
    // 4. set the co[y as the new state]
    return newState
}

const Game = ({data, data: {children}})=>{

    let [state, dispatch] = useReducer(reduceGameState, data)

    useEffect(()=>{
        setTimeout(()=>{
            dispatch({ direction: Math.random() < 0.1 ? ['up', 'right', 'down', 'left'][parseInt(Math.random() *3.9)]: null})
        }, 100)
    })

    return(
        <div className="game">
            {
                state.children.map((childData, idx) =>{
                    
                    switch (childData.name){
                        case "snake":
                            return <Snake key={`k-${idx}`} data={childData}/>

                        case "apple":
                            return <Apple key={`k-${idx}`} data={childData}/>
                    }
                        
                    
                })
            }
        </div>
    )
}

export {Game}