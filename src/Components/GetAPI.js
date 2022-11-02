import React, {useEffect, useState} from 'react'
import axios from 'axios'


function GetAPI() {
    const [state, setState] = useState([])
    let url = "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME"

    useEffect(() => {
      axios.get(url).then((res)=>{
        //   console.log(res.data);
          setState(res.data)
      })
    }, [])
    
  return (
    <div className='api-container'> 
        <div className='grid-container'>
            {state.map(item=>{
            return(
            <div className='img-container'>
                <img src={item.url} width={"400px"} height={"400px"}></img>
            </div>
            )
            })}
        </div>
    </div>
  )
}

export default GetAPI