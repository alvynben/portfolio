// Hooks
import { useEffect, useState } from "react";
import { useParams } from "react-router";

// External Components
import { Container, Row, Col } from "react-bootstrap";

// Internal Components
import BlogPost from "./components/BlogPost/BlogPost";
import ListOfPosts from "./components/ListOfPosts/ListOfPosts";

// API
import { getPosts, getPost } from "../../api/posts";

export default function Blog() {
    const [displayPost, setDisplayPost] = useState({});
    const { postId } = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then((posts) => {
            setPosts(posts);
        });
    }, []);

    useEffect(() => {
        if (postId) {
            getPost(postId).then((post) => {
                setDisplayPost(post);
            });
        }
    }, [postId]);

    return (
        <Container className="py-4 blog-container" id="blog-container" fluid>
            <Row className="h-100">
                <Col sm={12} className="align-self-center">
                    <h1 id="blogTitle">Blog</h1>
                </Col>
                <Col sm={12} className="align-self-start">
                    {postId ? (
                        <BlogPost post={displayPost} />
                    ) : (
                        <ListOfPosts posts={posts} />
                    )}
                </Col>
            </Row>
        </Container>
    );
}
