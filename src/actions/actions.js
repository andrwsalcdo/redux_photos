// Constant Action Types
const INCREMENT_LIKES = 'INCREMENT_LIKES'
const ADD_COMMENT = 'ADD_COMMENT'
const REMOVE_COMMENT = 'REMOVE_COMMENT'


// increment likes 
export const increment = index => {
    // console.log('increment', index);
    return {
        type: INCREMENT_LIKES,
        index
    }
}
// add comment 
export const addComment = (postId, author, comment) => {
    return {
        type: ADD_COMMENT, 
        postId, 
        author, 
        comment 
    }
}
// remove comment 
export const removeComment = (postId, index) => {
    return {
        type: REMOVE_COMMENT, 
        index, 
        postId
    }
}