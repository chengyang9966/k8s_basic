import PostCreate from './components/Post/PostCreate';
import PostList from './components/Post/PostList';

function App() {
  return (
    <div className="container">
      <h1>Create Post!!!</h1>
      <PostCreate />
      <hr />
      <h3>Posts</h3>
      <PostList/>
    </div>
  );
}

export default App;
