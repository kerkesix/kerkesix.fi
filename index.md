---
layout: home
permalink: /
title: "Kerkesix ry"
excerpt: "Hyvän mielen asialla jo vuodesta 2003."
image:
  feature: home-feature.jpg
---

<div class="tiles">
{% for post in site.posts limit:4 %}
	{% include post-grid.html %}
{% endfor %}
</div><!-- /.tiles -->
