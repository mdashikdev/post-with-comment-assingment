import React from 'react';
import { useState,useEffect, createContext } from "react";
import Header from '../Header/Header'
import Post from '../Post/Post'
import posts from '../../FakeData/posts.json'

export const ContextApi=createContext();

const Home = () => {
    // const [posts, setposts] = useState([]);
    // const url='https://jsonplaceholder.typicode.com/posts';
    // useEffect(() => {

    // }, [])

    return (
        <ContextApi.Provider value='test'>
            <Header postCount={posts.data.length} />
            {
                posts.data.map(post => <Post postInfo={post} key={post.id} />)
            }
        </ContextApi.Provider>
    );
};

export default Home;