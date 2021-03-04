import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {fetchPosts} from "../redux/api/apiActions";

function PostContainer(props) {
    const posts = useSelector(state => state.api.getPostsReq.posts);
    const dispatch = useDispatch();

    const logPosts = () => {
        console.log(JSON.stringify(posts));
    }

    return (
        <div>
            <button onClick={() => {
                dispatch(fetchPosts(1));
                logPosts();
            }}>Fetch Posts</button>

        </div>
    );
}

export default PostContainer;