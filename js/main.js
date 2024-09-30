const { useEffect, useState } = React;
const rootElement = document.getElementById('app');

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number} {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <button onClick={() => props.removePost(props.post)}>🗑️</button>
            </div>
        </div>
    );
};

const PostList = ({ somePost, title, removePost }) => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
            {somePost.map((post, index) =>
                <PostItem number={index + 1} post={post} key={post.id} removePost={removePost} />
            )}
        </div>
    );
};

const MyInput = (props) => {
    return (
        <div>
            <input {...props}  />
       
        </div>
    );
};


const MyButton = (props) => {
    return (
        <button 
            onClick={props.onClick}>
            Publish 
        </button>
    );
};

function App() {
    const [somePost, setPosts] = useState([
      
    ]);
    const [title, setTitle] = useState('');
    const [body, setDescription] = useState('');

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            title,
            
        };
        setPosts([...somePost, newPost]);
        
        
        setTitle('');
        setDescription('');
    };

    const removePost = (post) => {
        setPosts(somePost.filter(p => p.id !== post.id));
    };

    return (
        <div className="App">
           
            <form>
            <h3>To do list</h3>
                <MyInput value={title}
                    type='text' placeholder='Name your business'
                    onChange={e => setTitle(e.target.value) }  />
                <div className="MyButton">
                <MyButton  onClick={addNewPost} />
                </div>
            </form>
            <PostList somePost={somePost} title="My plans" removePost={removePost} />
        </div>
    );
}

ReactDOM.createRoot(rootElement).render(<App />);
