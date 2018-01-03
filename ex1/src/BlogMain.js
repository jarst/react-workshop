import React from 'react';

import getPosts from './data/BlogPostProvider';

function BlogMain(props) {
    const posts = getPosts();
    
    return (
        <div className="col-sm-8 blog-main">
            {
                posts.map( (post, index) => (
                    <BlogPost key={index} {...post} />
                ))
            }
            <BlogPagination />
        </div>
    );   
}

function BlogPost(props) {
    const innerHtml = {
        __html: props.content
    };

    return (
        <div className="blog-post">
            <h2 className="blog-post-title">{ props.title }</h2>
            <p className="blog-post-meta">{ props.date } by <a href="#">{ props.author }</a></p>
            <span dangerouslySetInnerHTML={ innerHtml } />
        </div>
    );
}

function BlogPagination(props) {
    return (
        <nav className="blog-pagination">
            <a className="btn btn-outline-primary" href="#">Older</a>
            <a className="btn btn-outline-secondary disabled" href="#">Newer</a>
        </nav>
    );
}

export default BlogMain;