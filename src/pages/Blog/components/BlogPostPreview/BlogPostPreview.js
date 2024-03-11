// Hooks
import { useNavigate } from "react-router";

// External Components
import Markdown from "react-markdown";

// CSS
import "./BlogPostPreview.css";

function BlogPostPreview({ post }) {
    const navigateTo = useNavigate();
    
    return (
        <div onClick={() => navigateTo(`/blog/${post.slug}`)} className="blog-post-preview" key={post._id}>
            <h2>{post.title}</h2>
            <p>{new Date(post.date_created).toLocaleDateString()}</p>
            <Markdown>{`${post.content.split("\n").slice(0, 1)}...`}</Markdown>
        </div>
    );
}

export default BlogPostPreview;