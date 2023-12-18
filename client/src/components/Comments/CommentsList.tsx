import React from 'react'
export interface Comments {
    id: string,
    comment: string
    status: 'pending' | 'approved' | 'rejected'
}
function CommentsList({ comments }: { comments: Comments[] }) {
    return (
        <ul>{
            comments.map(x => {
                let content: string = '';

                if (x.status === 'approved') {
                    content = x.comment;
                }
                if (x.status === 'pending') {
                    content = 'This comment is awating moderation'
                }

                if (x.status === 'rejected') {
                    content = 'This comment has been rejected'
                }
                return (
                    <li key={x.id}>{content}</li>
                )
            })
        }</ul>
    )
}

export default CommentsList