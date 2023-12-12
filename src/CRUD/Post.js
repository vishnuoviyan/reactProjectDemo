import React, { useState } from 'react'
import axios from 'axios'
import View from './View'

export default function Post() {
    let [name,setname]=useState("")
    let [pwd,setpwd]=useState("")
    let api="http://localhost:1500"
    function save(e)
    {
        e.preventDefault();
        axios.post(api,{name:name,age:pwd});
        alert("Data saved1")
        window.location.reload()
    }
  return (
    <div>
        <h1>
            CRUD APPICATION
        </h1>

        <form onSubmit={save}>
            <input type='text' value={name} onChange={(e)=>setname(e.target.value)}/>
            <input type='number' value={pwd} onChange={(e)=>setpwd(e.target.value)}/>
            <input type='submit'/>
            
        </form>

        <View/>
    </div>
  )
}
