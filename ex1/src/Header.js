import React from 'react';

function Header(props) {
    return (
        <header>
            <NavHeader/>
            <TitleHeader/>
        </header>
    );
}

function NavHeader(props) {
    const headers = [
        'Home',
        'New features',
        'Press',
        'New hires',
        'About'
    ];

    return (
        <div className="blog-masthead">
            <div className="container">
                <nav className="nav">
                    {
                        headers.map((header, index) =>
                            <a className={'nav-link ' + (index === 0 ? 'active' : '')} key={index} href="#">
                                { header }
                            </a>
                        )
                    }
                </nav>
            </div>
        </div>
    );
}

function TitleHeader(props) {
    return (
        <div className="blog-header">
            <div className="container">
                <h1 className="blog-title">The Bootstrap Blog</h1>
                <p className="lead blog-description">An example blog template built with Bootstrap.</p>
            </div>
        </div>
    );
}

export default Header;