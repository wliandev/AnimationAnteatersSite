---
layout: page
show_meta: false
title: "Gallery"
subheadline: "The art of Animation Anteaters"
header:
   image_fullwidth: 33bYCcX.jpg
permalink: "/gallery/"
---
<ul>
    {% for post in site.categories.gallery %}
    <li><a href="{{ site.url }}{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>