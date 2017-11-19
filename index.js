import React from 'react';

const genPosts = (blog, props) => blog.posts.map((post, index) => {
    const { titleIcon, cta } = props
    const { title, date, content, link } = post
    return (<div key={index}>
        <a className="reblog-link" href={link}><h2 className="reblog-title">{titleIcon}{title}</h2>
            <h6 className="reblog-date">{date}</h6>
            <h3 className="reblog-content">{content}</h3></a>
        {props.cta ? <div className="reblog-cta">{cta}</div> : null}
    </div>)
});


function Rebloggr(props) {
    return <div>{genPosts(props.blog, props)}</div>
}

export default Rebloggr;