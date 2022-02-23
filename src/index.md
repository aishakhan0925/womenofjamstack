---
layout: base.html
title: Women of Jamstack
metaDescription:
  Women of Jamstack celebrates the women who are working with the Jamstack and adjacent technologies — and inspires the
  next generation of developers in an industry that still suffers from devastating gender inequality.
templateEngineOverride: njk
---

<ul>
 {% for key, profile in profiles %}
    <li>
      <div>
        <h2>{{ profile.name }}</h2>
        <p>{{ profile.bio }}</p>
        <a href="https://twitter.com/{{ profile.twitterUsername }}" target="_blank">TWITTER</a>
        <a href="https://github.com/{{ profile.githubUsername }}" target="_blank">GITHUB</a>
        <a href="{{ profile.website }}" target="_blank">WEBSITE</a>
      </div>
    </li>
{% endfor %}
<ul>
