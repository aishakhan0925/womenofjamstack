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
      <a href="https://github.com/whitep4nth3r/womenofjamstack#readme" target="_blank" class="hero__button">Add your profile</a>
      <a href="https://jamstack.org/discord" target="_blank" class="hero__button hero__button--alt">Join the discord</a>
    </div>
  </div>
  <div class="hero__card">
    <div class="profiles__item profiles__item--founder">
      <span class="profiles__founderLabel">Founder</span>
      <span class="profiles__itemImgWrapper">
        {% image "./src/_data/images/founder.jpeg", founder.name, "eager" %}
      </span>
      <span class="profiles__itemTextWrapper">
        <h2 class="profiles__itemName">{{ founder.name }}</h2>
        <p class="profiles__itemBio">{{ founder.bio }}</p>
        <p class="profiles__itemJob">{{ founder.jobTitle }} @ {{ founder.company }}</p>
        <span class="profiles__itemSocials">
          <a href="https://twitter.com/{{ founder.twitterUsername }}"
            target="_blank" title="{{ founder.name }} on Twitter">
            {% include "profile_svg/twitter.svg" %}
          </a>
          <a href="https://github.com/{{ founder.githubUsername }}"
          target="_blank" title="{{ founder.name }} on Github">
              {% include "profile_svg/github.svg" %}
          </a>
          <a href="https://twitch.tv/{{ founder.twitchUsername }}"
            target="_blank" title="{{ founder.name }} on Twitch">
              {% include "profile_svg/twitch.svg" %}
          </a>
          <a href="{{ founder.website }}"
            target="_blank" title="{{ founder.name }}'s Website">
              {% include "profile_svg/globe.svg" %}
          </a>
        </span>
      </span>
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
      <li class="profiles__item">
        <span class="profiles__itemImgWrapper profiles__itemImgWrapper--blank">
         {% include "profile_svg/user.svg" %}
        </span>
        <span class="profiles__itemTextWrapper">
          <h2 class="profiles__itemName">Your Name Here</h2>
          <p class="profiles__itemBio">Do you work with the Jamstack and adjacent technologies? You should feature on Women of Jamstack!</p>
          <p class="profiles__itemJob">Submit a PR on GitHub 👇</p>
           <span class="profiles__itemSocials">
            <a class="profiles__ctaButton" href="https://github.com/whitep4nth3r/womenofjamstack" target="_blank">Add your profile</a>
          </span>
        </span>
      </li>
  </ul>
</section>
