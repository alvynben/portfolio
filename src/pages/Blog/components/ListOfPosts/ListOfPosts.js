// Hooks
import { useState } from "react";

// External Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

// Internal Components
import BlogPostPreview from "../BlogPostPreview/BlogPostPreview";

// CSS
import "./ListOfPosts.css";

export default function ListOfPosts({ posts}) {
    const [currentPage, setCurrentPage] = useState(1);
    const goToPreviousPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const goToNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const POSTS_PER_PAGE = 3;
    const indexOfLastPost = currentPage * POSTS_PER_PAGE;
    const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <>
                            <>
                                <FontAwesomeIcon
                                    className={`blog-post-nav-btn ${currentPage === 1 && "hidden disabled"}`}
                                    icon={faCaretLeft}
                                    onClick={goToPreviousPage}
                                    color="#fff"
                                    size="2x"
                                    aria-disabled={currentPage <= 1}
                                />
                                <FontAwesomeIcon
                                    className={`blog-post-nav-btn ${indexOfLastPost >= posts.length && "hidden disabled"}`}
                                    icon={faCaretRight}
                                    onClick={goToNextPage}
                                    color="#fff"
                                    size="2x" n
                                />
                            </>
                            {currentPosts.map((post, index) => (
                                <BlogPostPreview
                                    key={index}
                                    post={post}
                                />
                            ))}
                        </>
    )
                            }