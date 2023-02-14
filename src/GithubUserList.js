import React, {useState} from "react"
import {GithubUser} from "./GithubUser"

export function GithubUserList (){
    const [user, setUsers] = useState([])
    const [value, setValue] = useState("");

  function handleSubmit () {
    setUsers([...user,value ])
    setValue("")
  }
  return(
    <div>
        <input value={value} onChange={(ele) => setValue(ele.target.value)}/>
        <button onClick={handleSubmit} >Add: </button>
        {user.map((username,index)=>
        (<GithubUser key={index} user={username}/>))}
    </div>
  )
  
}