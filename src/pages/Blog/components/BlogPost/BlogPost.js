// Hooks
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";

// External Components
import Markdown from "react-markdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Spinner } from "react-bootstrap";

// API
import { getPost } from "api/posts";

// CSS
import "./BlogPost.css";

function BlogPost({ postSlug }) {
    const navigateTo = useNavigate();
    const [post, setPost] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (postSlug) {
            getPost(postSlug, { setIsLoading }).then((post) => {
                setPost(post);
            });
        }
    }, [postSlug]);

    return (
        <>
            {isLoading ? <Spinner animation="border" variant="primary" /> : (
                <div className="blog-post">
                    <FontAwesomeIcon className="blog-post-back-btn" icon={faChevronLeft} onClick={() => navigateTo("/blog")} color="#fff" />
                    <div key={post._id}>
                        <h2>{post.title}</h2>
                        <p>{new Date(post.date_created).toLocaleDateString()}</p>
                        <Markdown>{post.content}</Markdown>
                    </div>
                </div>
            )}

        </>
    )

}

export default BlogPost;