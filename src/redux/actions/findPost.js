import Axios from "axios";

export const type = "findPost";
export const typeError = "findPostError";

const findPost = (text) => async (dispatch) => {
    try {
        const publications = await Axios.get("http://www.reddit.com/r/" + text + "/.json");
        const payload = publications.data.data.children.map((data) => {
            return {
                title: data.data.title,
                author: data.data.author,
                thumbnail: data.data.thumbnail,
                num_comments: data.data.num_comments,
                ups: data.data.ups,
                downs: data.data.downs
            }
        });
        dispatch({type,payload});

    } catch (error) {
        dispatch({type: typeError,payload: error});
    }
}

export default findPost;