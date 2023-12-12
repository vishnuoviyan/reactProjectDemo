import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from './CRUD/Post';
import Update from './CRUD/Update';

export default function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Post/>}/>
                <Route path='/edit' element={<Update/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
