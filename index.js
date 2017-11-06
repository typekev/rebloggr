import React from 'react';

const genPosts = (blog, props) => blog.posts.map((post, index) => {
    const { titleIcon, cta } = props
    const { title, date, content } = post
    return (<div key={index}>
        <h2 className="rebloggr-title">{titleIcon}{title}</h2>
        <h6 className="rebloggr-date">{date}</h6>
        <h3 className="rebloggr-content">{content}</h3>
        {props.cta ? <div className="rebloggr-cta">{cta}</div> : null}
    </div>)
});


function Rebloggr(props) {
    return <div>{genPosts(props.blog, props)}</div>
}

export default Rebloggr;