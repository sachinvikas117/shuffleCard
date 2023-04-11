const { useState, useEffect } = require("react")

const useFetch=(url)=>{
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null)
    const [data,setData]=useState([])


    useEffect(()=>{
        setLoading(true)
        const fetchdata=async()=>{
            try{
                let resp=await fetch(url)
                console.log(resp)
                let respData=await resp.json()
                console.log(respData)
                setData(respData.cards)
                setLoading(false)
            }catch(e){
                setError(e)
                setLoading(false)
            }
        }
       
        fetchdata();
    },[url])


    return [loading,error,data]

}


export default useFetch