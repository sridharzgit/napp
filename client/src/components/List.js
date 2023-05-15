import {useState,useEffect} from 'react'
import { csInstance } from '../apis/api'
import axios from 'axios'



const List = () =>{
    const [appsList,setAppsList] = useState([])
    useEffect(()=>{
        const getAppsList = async () => {
            const appsList = await csInstance.get("/apps")
            console.log("appsList",appsList)
            setAppsList(appsList.data)
            
        } 
        getAppsList();
    },[])
    return (<>
    <ul>
        {appsList.map(app=><li key={app._id} >{app.name}</li>)}
    </ul>
        
    </>)
}

export default List