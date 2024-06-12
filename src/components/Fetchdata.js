import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Fetchdata = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => setPosts(posts));
    },[]);

   
  return (
    <>
    <h1>Fetchdata</h1>

    <div>

    {posts.map((post)=>{
        <div key={post.id}>

        <h1>{post.title}</h1>
        <h1>{post.body}</h1>
        </div>
    })}
    </div>
    </>
  )
}

export default Fetchdata;