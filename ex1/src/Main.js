import React from 'react';

import BlogMain from './BlogMain'
import Sidebar from './Sidebar';

function Main(props) {
    return (
        <main role="main" className="container">
            <div className="row">
                <BlogMain/>

                <Sidebar/>
            </div>
        </main>
    );
}

export default Main;