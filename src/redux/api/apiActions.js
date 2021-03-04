import axios from "axios";

export const API_FETCH_POSTS = 'API_FETCH_POSTS';

export const fetchPosts = (postId) => { // to simulate post request
    return (dispatch) => {

        let baseUrl = 'https://jsonplaceholder.typicode.com/';
        let postFix = 'comments?postId=';
        let url = `${baseUrl}${postFix}${postId}`;

        axios.get(url)
            .then(response => {
                const data = response.data;
                console.log(JSON.stringify(data)); // work!
                dispatch(fetchPostsSuccess(data));
            });
    }
};

const fetchPostsSuccess = posts => {
    return {
        type: API_FETCH_POSTS,
        payload: posts
    }
};

