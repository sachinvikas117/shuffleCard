import { useEffect, useReducer, useState } from 'react';
import './index.css';
import useFetch from '../../hooks/useFetch';
import CardDisplay from '../cardisplay/cardDisplay';
import BackOffDisplay from '../cardisplay/backFace';
import Loading from '../extrComp/loading';
import ErrorDisplay from '../extrComp/errorDisplay';
import { shuffle } from '../../utlity/shuffle';




const GameComponent=()=>{
    const [loading,error,data]=useFetch("https://deckofcardsapi.com/api/deck/new/draw/?count=52")
    const [start,setStart]=useState(false)
    const [cardCollection,setCardCollection]=useState([])

   const startShuffle=()=>{
    setStart(true)
    let card=[...data]
    card=shuffle(card)
    setCardCollection(card)
   }

   const display=()=>{
    if(start){
        return(
            loading? <Loading></Loading>:error==null?data.length>0? <CardDisplay cards={cardCollection}></CardDisplay>:"":<ErrorDisplay></ErrorDisplay>
        )
    }
    return (<BackOffDisplay></BackOffDisplay>)
   }

   const startAgain=()=>{
    setStart(false)
   }

    return(
        <div className="container">
           
        <div>
       
       {start? <button onClick={startAgain} className='button'> Start Again</button>: <button onClick={startShuffle} className='button'> Start Shuffle</button>}
        </div>
         {display()}
         
        </div>
    )


}


export default GameComponent