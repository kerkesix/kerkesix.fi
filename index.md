---
layout: archive
permalink: /
title: "Latest Posts"
---

<div class="tiles">
{% for post in site.posts limit:8 %}
	{% include post-grid.html %}
{% endfor %}
</div><!-- /.tiles -->