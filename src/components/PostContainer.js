import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {fetchPosts} from "../redux/api/apiActions";

function PostContainer(props) {
    const posts = useSelector(state => state.api.getPostsReq.posts);
    const dispatch = useDispatch();

    const logPosts = () => {
        {/*why doesn't this line work???*/}
        console.log(JSON.stringify(posts));
    }

    return (
        <div>
            <button onClick={() => {
                dispatch(fetchPosts(1));
                logPosts();
            }}>Fetch Posts</button>

            <div>
                {/*why doesn't this line work???*/}
                {posts.map(post => <p>{post.body}</p>)}
            </div>
        </div>
    );
}

export default PostContainer;