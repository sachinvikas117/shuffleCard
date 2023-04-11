import { useEffect, useRef, useState } from "react"
import './../gameComponent/index';

const CardDisplay=({cards})=>{
    const [display,setDisplay]=useState(cards[0])
    const [index,setIndex]=useState(0)
    const [imageLoad,setImageLoad]=useState(false)
    const [actionMessage,setActionMessage]=useState(true)
    const nextCard=()=>{
        if(index<=cards.length){
            setIndex(prev=>prev+1)
            setImageLoad(true)
            
        }

    }
    
    const abc=()=>{
        setImageLoad(false)
        
    }

    useEffect(()=>{
        setDisplay(cards[index])
        
    },[index])

    useEffect(()=>{
        setTimeout(()=>{
            setActionMessage(false)
        },2000)

    },[])

    
    return(
        <>
        <div className="textcolor">{index}/{cards.length}</div>
         <div  className="cardDisplay">
           <div onClick={nextCard}><img src={display.images.png} onLoad={abc} /></div> 
           {imageLoad?<div  className="cardLoading textcolor">Loading...card</div>:""}
          {actionMessage?<div className="messageDisplay">Click on card to see Next Card</div>:""} 
        </div>
       
        </>
       
    )

}


export default CardDisplay