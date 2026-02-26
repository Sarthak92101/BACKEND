import React, { useEffect, useState } from 'react'
import axios from 'axios'


  function Feed() {
const [posts , setPosts] = useState([

  {
    _id:1,
    image:'https://images.unsplash.com/photo-1520342868574-5fa3804e551c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    caption:'Hello',
  } 
])

useEffect(()=>{
axios.get('http://localhost:3000/posts').then(res=>setPosts(res.data.posts))
},[])
  
  return (
    <section className='feed-section'>
      {posts.length > 0 ? (
        <div className="feed-grid">
          {posts.map((post) => (
            <div key={post._id} className='post-card'>
              <img src={post.image} alt={post.caption} />
              <p>{post.caption}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No posts yet</p>
      )}
    </section>
  )
}

export default Feed
