// Hooks
import { useNavigate } from "react-router";

// External Components
import Markdown from "react-markdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

// CSS
import "./BlogPost.css";

function BlogPost({ post }) {
    const navigateTo = useNavigate();
    
    return (
        <div className="blog-post">
            <FontAwesomeIcon className="blog-post-back-btn" icon={faChevronLeft} onClick={() => navigateTo("/blog")} color="#fff" />
            <div key={post._id}>
                <h2>{post.title}</h2>
                <p>{new Date(post.date_created).toLocaleDateString()}</p>
                <Markdown>{post.content}</Markdown>
            </div>
        </div>
    );
}

export default BlogPost;