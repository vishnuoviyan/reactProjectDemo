import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function View() {
    let [view,setview]=useState([])
    let api="http://localhost:1500"

    useEffect(()=>{
        axios.get(api).then((s)=>{
            setview(s.data)
        })
    },[])

    function del(close)
    {
        axios.delete(`${api}/${close}`).then(()=>{
            axios.get(api).then((s)=>{
                setview(s.data)
            })
        })
    }
    let navi=useNavigate()
    function ed(id,name,pwd)
    {
        localStorage.setItem("_id",id);
        localStorage.setItem("name",name);
        localStorage.setItem("age",pwd);
        navi("/edit")
    }
  return (
    <div>
        <h2>
            Read data
        </h2>

        <table>
            <tr>
                <th>Username</th>
                <th>Passcode</th>
                <th>Operations</th>
            </tr>
            {view.map((e)=>(
                <tr>
                   <td>
                    {e.name}
                   </td>
                   <td>
                    {e.age}
                   </td>
                   <td>
                    <button onClick={()=>del(e._id)}>Remove</button>
                    <button onClick={()=>ed(e._id,e.name,e.age)}>Update</button>
                   </td>
                </tr>
            ))}
        </table>
    </div>
  )
}
