// Constant Action Types
const INCREMENT_LIKES = 'INCREMENT_LIKES'
const ADD_COMMENT = 'ADD_COMMENT'
const REMOVE_COMMENT = 'REMOVE_COMMENT'


// increment likes 
export const increment = index => {
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
export const removeComment = (postId, i) => {
    return {
        type: REMOVE_COMMENT, 
        i, 
        postId
    }
}