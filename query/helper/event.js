const handlerEvent=(type,data,posts)=>{
    if (type == 'PostCreated') {
        posts[data['id']] = Object.assign(data, {
            comments: []
        });
    }

    if (type == 'CommentCreated') {
        const { id, comment, status ,postId} = data
        const post = posts[postId];
        post.comments.push({ comment, id, status });
        console.log('post',JSON.stringify(post))
        console.log('post.comments',JSON.stringify(post.comments))

    }

    if (type == 'CommentUpdated') {
        console.log('data',JSON.stringify(data))
        const { postId, status, id,comment } = data;

        const post = posts[postId];
        console.log('post.comments',JSON.stringify(post.comments))
        const comments = post.comments.find(x => x.id === id);
        comments.status = status;
        comments.comment = comment;
    }
}

module.exports ={
    handlerEvent
}