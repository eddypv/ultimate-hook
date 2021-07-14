import axios from 'axios'
import { useState, useEffect } from 'react'


const useResource = (url) =>{
  const [resources, setResources] = useState([])
  useEffect(async()=>{
    await getAll()
  },[])
  const getAll = async()=>{
      try{
        const {data} = await axios.get(url)
        setResources(data)
      }catch(error){
        throw new Error('Error in service getAll')
      }
  }

  const create = async( object) =>{
    try{
      const {data} = await axios.post(url, object)
      const updatedResources =  resources.concat(data)
      setResources(updatedResources)
    }catch(error){
      throw new Error('Error in create')
    }
  }
  return [
    resources, 
    {
      create
    }
  ]
}

export default useResource
