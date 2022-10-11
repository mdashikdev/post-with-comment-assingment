import {React,useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Post from '../Post/Post';
import posts from '../../FakeData/posts.json'


const PostDetails = () => {
    const {postId}=useParams();
    const singlePost=posts.data.find(pst => pst.id === postId)
    return (
        <Post postInfo={singlePost} routerStatus='postDetails' />
    );
};

export default PostDetails;