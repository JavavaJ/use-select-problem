import {API_FETCH_POSTS} from "./apiActions";

const initialState = {
    getPostsReq : {
        posts: [],
    }
};

const apiReducer = (state = initialState, action) => {
    let getPostsReq;
    switch (action.type) {
        case API_FETCH_POSTS:
            getPostsReq = {
                posts: [...state.getPostsReq.posts]
            };

            return {
                ...state,
                getPostsReq
            };
        default: return state;
    }
};

export default apiReducer;