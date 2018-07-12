# Rebloggr

Display a customizable list of your WordPress blog posts in React.

# Installation

npm: `npm install rebloggr`

yarn: `yarn add rebloggr`

# Instructions

Rebloggr accepts 11 props:

```
      blogUrl: the base url of your blog i.e https://blog.typekev.com,
      titleIcon: string or element to be displayed before your post title,
      titleClassName: string containing the class you want applied to your title span,
      linkClassName: string containing the class you want applied to your <a/>,
      dateClassName: string containing the class you want applied to your date span,
      excerptClassName: string containing the class you want applied to your excerpt span,
      includeDate: bool which determines whether your date will display,
      includeExcerpt: bool which determines whether your excerpt will display,
      cta: string or element to be displayed after your post's other spans i.e a call to action,
      linkTarget: `target` property of <a/> default is '_blank',
      loadingComponent: string or element to be displayed before the fetch of your blog post data is complete,
```

# Example

```
      import React from 'react';
      import Rebloggr from 'rebloggr';
```

```
      <Rebloggr
          className="auto cell"
          titleIcon={<ConsoleLine />}
          titleClassName="font-weight-light"
          loadingComponent={<h1>Loading...</h1>}
        />
```

# Contributing

I know this is a really simple tool, if you can make it better, submit a PR.
