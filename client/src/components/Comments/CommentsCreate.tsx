import axios from 'axios';
import React, { useState } from 'react'

function CommentCreate({ postId }: { postId: string }) {
    const [content, setContent] = useState('');

    const onSubmit=async(e:React.FormEvent)=>{
        e.preventDefault();
        try {
            await axios.post(`http://posts.com/posts/${postId}/comments`,{
                comment:content
            })
            setContent('')
        } catch (error) {
            
        }
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group mb-3">
                    <input type="text" value={content} onChange={e => setContent(e.target.value)} className='form-control' />
                </div>
                <button type="submit" className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}

export default CommentCreate