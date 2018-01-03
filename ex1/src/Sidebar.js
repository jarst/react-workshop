import React from 'react';

import getSidebarModules from './data/SidebarDataProvider';

function Sidebar(props) {
    const modules = getSidebarModules();

    return (
        <aside className="col-sm-3 ml-sm-auto blog-sidebar">
            <SidebarAbout />
            {
                modules.map( (module, index) =>  <SidebarModule key={index} {...module} /> )
            }
        </aside>

    );
}

function SidebarAbout() {
    return (
        <div className="sidebar-module sidebar-module-inset">
            <h4>About</h4>
            <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum.
                Aenean lacinia bibendum nulla sed consectetur.</p>
        </div>
    )
}

function SidebarModule(props) {
    return (
        <div className="sidebar-module">
            <h4>{ props.header }</h4>
            <ol className="list-unstyled">
                {
                    props.items.map((item, index) => <li key={index}><a href="#">{ item }</a></li> )
                }
            </ol>
        </div>
    );
}

export default Sidebar;
