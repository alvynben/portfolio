import axios from "axios";

const BASE_URL = "https://alvinbenapi.xyz/posts";

/**
 * Fetches posts from the server.
 * @returns {Promise<Array>} A promise that resolves to an array of posts.
 * @throws {Error} If there is an error fetching the posts.
 */
export const getPosts = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
};

/**
 * Retrieves a post from the server based on the provided ID.
 *
 * @param {number} id - The ID of the post to retrieve.
 * @returns {Promise<Object>} - A promise that resolves to the post data.
 * @throws {Error} - If there is an error fetching the post.
 */
export const getPost = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching post:", error);
    }
};