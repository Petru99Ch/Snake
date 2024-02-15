import { Apple } from "../apple/ui"
import { Snake } from "../snake/ui"


const Game = ({data: {children}})=>{
    return(
        <div className="game">
            {
                children.map((childData, idx) =>{
                    
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