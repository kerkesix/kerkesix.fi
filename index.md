---
layout: home
permalink: /
title: "Kerkesix ry"
excerpt: "Hyvän mielen asialla vuodesta 2004."
image:
  feature: home-feature2.jpg
---

<div class="tiles">
{% for post in site.posts limit:4 %}
	{% include post-grid.html %}
{% endfor %}
</div><!-- /.tiles -->
