import axios from "axios"

import React, { useEffect, useState } from 'react'
import CommentCreate from "../Comments/CommentsCreate";
import CommentsList, { Comments } from "../Comments/CommentsList";
interface Posts {
    [id: string]: {
        id: string,
        title: string,
        createdAt:string,
        comments:Comments[]
    }
}

function PostList() {
    const [posts, setPosts] = useState<Posts>({});

    const fetchPost = async () => {
        const allPosts = await axios.get('http://posts.com/posts');
        setPosts(allPosts.data);
    }
    useEffect(() => {
        fetchPost();
    }, [])
    const renderPosts = Object.values(posts).map((x) => {
        return (
            <div className="card" key={x.id} style={{ width: '30%', marginBottom: '20px' }}>
                <div className="card-body">
                    <h3>{x.title}</h3>
                    <p>{new Date(x.createdAt).toLocaleDateString() +' '+ new Date(x.createdAt).toLocaleTimeString()}</p>
                    <CommentsList comments={x.comments}/>
                    <CommentCreate postId={x.id}/>
                </div>
            </div>
        )
    });

    return (
        <div className="d-flex flex-row flex-wrap justify-content-between">{renderPosts}</div>
    )
}

export default PostList

