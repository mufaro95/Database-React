import React from 'react';


const Create = () => {
  return (
    <div className="page create">

<h2>Add New Post</h2>
    <form>
      <label>Title: <input type="text" /></label>
      <label>Content: </label>
      <textarea id="w3review" name="w3review" rows="4" cols="50">
</textarea>
    <label for="Category">Category:</label>
    <select id="options">
  <option value=""></option>
  </select>

      <button type="submit">Submit</button>
    </form>
  


       
    </div>
  )
}


export default Create