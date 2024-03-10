import axios from "axios";

const BASE_URL = "https://alvinbenapi.xyz/posts";

/**
 * Fetches posts from the server.
 *
 * @param {Object} options - The options for fetching posts.
 * @param {Function} options.setIsLoading - A function to set the loading state.
 * @returns {Promise<Array>} - A promise that resolves to an array of posts.
 * @throws {Error} - If there is an error fetching the posts.
 */
export const getPosts = async ({ setIsLoading }) => {
    try {
        setIsLoading && setIsLoading(true);
        const response = await axios.get(BASE_URL);
        setIsLoading && setIsLoading(false);
        return response.data;
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
};


/**
 * Fetches a post from the server.
 * @param {string} id - The ID of the post to fetch.
 * @param {Object} options - Additional options.
 * @param {Function} options.setIsLoading - A function to set the loading state.
 * @returns {Promise<Object>} - A promise that resolves to the fetched post data.
 */
export const getPost = async (id, {setIsLoading}) => {
    try {
        setIsLoading && setIsLoading(true);
        const response = await axios.get(`${BASE_URL}/${id}`);
        setIsLoading && setIsLoading(false);
        return response.data;
    } catch (error) {
        console.error("Error fetching post:", error);
    }
};