# Rebloggr
A blogging tool built with React.

# Installation
npm: `npm install rebloggr`

yarn: `yarn add rebloggr`

# Instructions
Rebloggr accepts 3 props, a blog(blog), a call to action(cta), and a title icon(titleIcon).
Your blog will be a JSON, and should look like this:
```
const blog = {
	"posts": [
		{ title: "Current Projects 2.0", date: '2017-11-05', content: 'I'm so cool.', link: "http://example.com/blog-post-1" },
		{ title: "What a Day", date: '2017-11-04', content: '...', link: "http://example.com/blog-post-2" }
	],
};
```

Your call to action... will be a call to action, for instance:
```
const CTA = <a>Like this post!<a/>;
```

Finally, your title icon will be any object of your choice, for instance:
```
const TitleIcon = '#'
```

# Example
```
import React from 'react';
import Rebloggr from 'rebloggr';

import CTA from 'components/CTA';

import blog from 'data/blog';
import TitleIcon from 'icons/TitleIcon';

class AwesomeBlog extends React.Component {
  render() {
    return <Rebloggr blog={blog} cta={CTA} titleIcon={TitleIcon} />;
  }
}

ReactDOM.render(
  <AwesomeBlog />,
  document.getElementById('myBlog')
);
```

# Contributing
I know this is a really simple tool, if you can make it better, submit a PR.
