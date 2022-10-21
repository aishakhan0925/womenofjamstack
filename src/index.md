---
layout: base.html
title: Women of Jamstack
metaDescription:
  Women of Jamstack celebrates the women who are working with the Jamstack and adjacent technologies — and inspires the
  next generation of developers in an industry that still suffers from devastating gender inequality.
templateEngineOverride: njk
eleventyComputed:
  memberCount: "{{ profiles | length + 1 }}"
---

<section class="hero">
  <div class="hero__content">
    <h1 class="hero__contentHeadline">Celebrating the women who are working with the Jamstack</h1>
    <p  class="hero__contentByline">And inspiring the next generation of developers in an industry that still suffers from devastating gender inequality.</p>
    <div class="hero__buttons">
      <a href="https://jamstack.org/discord" target="_blank" class="hero__button hero__button--alt">Join the discord</a>
    </div>
  </div>
</section>

<section>
  <ul class="profiles">
  {% for key, profile in profiles %}
      <li class="profiles__item">
        <span class="profiles__itemImgWrapper">
         {% image "./src/_data/images/" + key + ".jpeg", profile.name, "lazy" %}
        </span>
        <span class="profiles__itemTextWrapper">
          <h2 class="profiles__itemName">{{ profile.name }}</h2>
          <p class="profiles__itemBio">{{ profile.bio }}</p>
          <p class="profiles__itemJob">{{ profile.jobTitle }} {% if profile.company.length > 0 %} @ {{ profile.company }}{% endif %}</p>
          <span class="profiles__itemSocials">
            {% if profile.twitterUsername.length > 0 %}
              <a href="https://twitter.com/{{ profile.twitterUsername }}" 
                target="_blank" title="{{ profile.name }} on Twitter">
                {% include "profile_svg/twitter.svg" %}
              </a>
            {% endif %}
            {% if profile.githubUsername.length > 0 %}
              <a href="https://github.com/{{ profile.githubUsername }}" 
              target="_blank" title="{{ profile.name }} on Github">
                {% include "profile_svg/github.svg" %}
              </a>
            {% endif %}
            {% if profile.twitchUsername.length > 0 %}
              <a href="https://twitch.tv/{{ profile.twitchUsername }}" 
                target="_blank" title="{{ profile.name }} on Twitch">
                  {% include "profile_svg/twitch.svg" %}
              </a>
            {% endif %}
            {% if profile.website.length > 0 %}
              <a href="{{ profile.website }}" 
                target="_blank" title="{{ profile.name }}'s Website">
                {% include "profile_svg/globe.svg" %}
              </a>
            {% endif %}
          </span>
        </span>
      </li>
    {% endfor %}
  </ul>
</section>
