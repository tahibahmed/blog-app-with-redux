import React, { useState } from 'react'
import { blogapi } from './redux/Blogslice'

import { useDispatch } from 'react-redux'
const Blog = () => {
  const dispatch = useDispatch()
  const [users, setusers] = useState({
    type: '',
    post: null,
    description: ''

  })

  const handleChange = (e) => {
    if (e.target.name === "post") {
      setusers({ ...users, post: [e.target.files[0]] })
    } else {
      setusers({ ...users, [e.target.name]: e.target.value })
    }
  }
  
  const handlesubmit = (e) => {
    e.preventDefault()
    
    const postData = new FormData();

    console.log("users data",users.type)
    postData.append('type', users.type);
    postData.append('post', users.post);
    postData.append('description', users.description);
    console.log(postData.getAll("type"))
    dispatch(blogapi(postData))

  }



  return (
    <div>
      <section class="sec-1">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-4">
              <form onSubmit={(e) => { handlesubmit(e) }}  >
                <label for="name_input"></label>
                <input type="text" class="form-control" name='type' value={users.type} onChange={(e) => { handleChange(e) }} id="name_input" />
                <input type="text" class="form-control" name='description' value={users.description} onChange={(e) => { handleChange(e) }} id="name_input" />
                <input type="file" class="form-control" name='post' id="name_input" onChange={(e) => { handleChange(e) }} />
                {/* <button class="btn btn-primary mt-3" id="submit_button" type="button">create</button> */}
                <input type="submit" value={'create'} />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog