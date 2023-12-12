import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Update() {
    let [id,setid]=useState(0)
    let [name,setname]=useState("")
    let [pwd,setpwd]=useState("")
    let api="http://localhost:1500"
    let navi=useNavigate()
    function save(e)
    {
        e.preventDefault();
        axios.put(`${api}/${id}`,{name:name,age:pwd})
        alert('data updated!!')
        navi("/")
    }
    useEffect(()=>{
        setid(localStorage.getItem("_id"))
        setname(localStorage.getItem("name"))
        setpwd(localStorage.getItem("age"))
    },[])
  return (
    <div>
        <h2>Update data</h2>
        <form onSubmit={save}>
            <input type='text' value={name} onChange={(e)=>setname(e.target.value)}/>
            <input type='number' value={pwd} onChange={(e)=>setpwd(e.target.value)}/>
            <input type='submit'/>
            
        </form>

    </div>
  )
}
