import React, { useEffect, useState } from 'react';
import apiData from '../services/wordpressApi';

export default function PostTitles() {
    const [posts, setPosts] = useState([]);
    
    const getPostsData = async () => {
        try {
          await apiData
            .getPosts()
            .then((data) => {    
              setPosts(data.json);
            });
        } catch (err) {
          console.log(err);
        }
      };

    useEffect(() => {
        getPostsData();
        
   }, [])
  return (
    
    <ul>
      {posts.map((post) =>
          <li key={post.id}>
          {post.title.rendered}
        </li>
      )}
    </ul>
 );
}