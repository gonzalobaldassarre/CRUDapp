import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

// const BlogContext = React.createContext(); // lo hace createDataContext
//
//Necesito crear los 3 parametros que necesito para generar un contexto con createDataContext
// que son 
// 1- reducer 2- actions - 3-state

// reducer 
const blogReducer = (state, action) => {
    switch(action.type){
        case 'EDIT_BLOGPOST':
                return state.map( blogPost => { return blogPost.id === action.playload.id ? action.playload : blogPost });

        case 'DELETE_BLOGPOST':
            return state.filter( blogPost => { return blogPost.id !== action.playload });
        case 'GET_BLOGPOSTS':
            return action.payload;
        default:
            return state;
    }
};


const getBlogPosts = (dispatch) => {
    return async() => {
        const response = await jsonServer.get('/blogposts/');
        // response.data === [{}.{}]..
        dispatch({ type: 'GET_BLOGPOSTS', payload: response.data });
    }
}
// actions
const addBlogPost = (dispatch) => {
    
    return async (title,content,goToIndex) => {
        await jsonServer.post('/blogposts', { title,content });
    //    dispatch({ type: 'ADD_BLOGPOST', playload: { title, content } } );
        goToIndex();
    };
};
const deleteBlogPost = (dispatch) => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`);
        // No es completamente necesario hacer otra llamada , eliminamos
        // del estado
        dispatch({ type: 'DELETE_BLOGPOST', playload: id } );
    };
};

const editBlogPost = (dispatch) => {
    return async (id, title, content, goToIndex) => {
        await jsonServer.put(`/blogposts/${id}`, {title, content});
        dispatch({ type: 'EDIT_BLOGPOST', playload: { id, title, content } } );
        goToIndex();
    };
};

export const { Context , Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
    []
);