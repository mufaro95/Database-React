import React from 'react'
// import supabase from './supabaseClient'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

// pages
import Home from "./pages/home"
import Create from "./pages/create"
import Update from "./pages/update"


function App() {
  return (
    <BrowserRouter>
      <nav>
        <h1>Database Browser</h1>
        <Link to="/">Home</Link>
        <Link to="/post">Posts</Link>
        <Link to="/create">Add new post</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:post" element={<Update />} />
        <Route path="/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );

}



export default App