// Hooks
import { useState } from "react";
import { useParams } from "react-router";

// External Components
import { Container, Row, Col } from "react-bootstrap";

// Internal Components
import BlogPost from "./components/BlogPost/BlogPost";
import ListOfPosts from "./components/ListOfPosts/ListOfPosts";

export default function Blog() {
    const { postId } = useParams();

    return (
        <Container className="py-4 blog-container" id="blog-container" fluid>
            <Row className="h-100">
                <Col sm={12} className="align-self-center">
                    <h1 id="blogTitle">Blog</h1>
                </Col>
                <Col sm={12} className="align-self-start">
                    {postId ? (
                        <BlogPost postId={postId} />
                    ) : (
                        <ListOfPosts />
                    )}
                </Col>
            </Row>
        </Container>
    );
}
