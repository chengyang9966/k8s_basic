import React, { useState } from 'react';
import axios from "axios";

const PostCreate = () => {
    const [title, setTtitle] = useState('');

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('http://posts.com/posts/create', {
                title
            });
            setTtitle('');
        } catch (error) {

        }


    }
    return (
        <div className="">
            <form onSubmit={onSubmit}>
                <div className="form-group mb-3">
                    <label>Title</label>
                    <input type="text" value={title} onChange={e => setTtitle(e.target.value)} className="form-control" />
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
};


export default PostCreate;