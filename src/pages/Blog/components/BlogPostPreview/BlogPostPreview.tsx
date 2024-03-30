// Hooks
import { useNavigate } from "react-router";

// External Components
import Markdown from "react-markdown";

// CSS
import "./BlogPostPreview.css";
import React from "react";

interface BlogPostPreviewProps {
    post: {
        _id: string;
        title: string;
        date_created: string;
        slug: string;
        content: string;
    };
}

const BlogPostPreview: React.FC<BlogPostPreviewProps> = ({ post }) => {
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