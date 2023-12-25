---
layout: largelogo
permalink: /
title: EtchDroid
---

<div style="text-align: center;">
EtchDroid is an open-source application that writes disk images to USB drives.
<br><br>
Use it to make a bootable operating system USB drive when your laptop is dead.
</div>

<section class="store-links">
{% for item in site.store_links %}
    <div class="store-link">
        <a href="{{ item.link }}" target="_blank" rel="noopener">
            <img src="{{ item.button }}" alt="{{ item.name }}">
        </a>
    </div>
{% endfor %}
</section>

<section class="featured-reviews">
{% for item in site.featured_reviews %}
    <div class="featured-review card">
        <p>
            {% for i in (1..5) %}<span class="material-symbols-outlined partially-supported-yellow">star</span>{% endfor %}
        </p>
        <p>{{ item | markdownify }}</p>
    </div>
{% endfor %}
</section>

#### Supported devices

- {% include supported.html %} USB flash drives
- {% include supported.html %} USB SD card adapters
- {% include partially-supported.html %} USB hard drives / SSDs (some might work)
- {% include partially-supported.html %} USB docks and hubs (they might have power issues)
- {% include unsupported.html %} Internal SD card slot
- {% include unsupported.html %} Optical or floppy disk drives
- {% include unsupported.html %} Thunderbolt-only devices

#### Supported disk image types

- {% include supported.html %} Modern GNU/Linux operating system images, including Arch Linux, Ubuntu, Debian, Fedora, pop!\_OS,
  Linux Mint, FreeBSD, BlissOS and many more
- {% include supported.html %} Raspberry PI SD card images (but you must unzip them first!)
- {% include unsupported.html %} Apple DMG disk images
- {% include unsupported.html %} Official Microsoft Windows ISOs from microsoft.com
- {% include partially-supported.html %} Community-built Windows images, made for EtchDroid (be careful: they may contain viruses!)
- {% include partially-supported.html %} Older GNU/Linux OS images < 2010 such as Damn Small Linux and Puppy Linux

### Support the project

Writing and testing this app takes an incredible amount of time and effort. If
EtchDroid saved your day, please consider donating.

- Become a patron on <a href="https://www.patreon.com/depau" target="_blank" rel="noopener">Patreon</a>
- Become a sponsor on <a href="https://github.com/sponsors/depau" target="_blank" rel="noopener">GitHub Sponsors</a>
- More options in the <a href="{{ site.baseurl }}/donate/">donations page</a>

### Contributing to EtchDroid

A good way to contribute to the project is to
<a href="https://hosted.weblate.org/engage/etchdroid/" target="_blank" rel="noopener">translate it to your language</a>.
A full translation from scratch shouldn't take you more than 30 minutes.

<div style="text-align: center; padding-top: 30px;">
<a href="https://hosted.weblate.org/engage/etchdroid/" target="_blank" rel="noopener">
<img src="https://hosted.weblate.org/widget/etchdroid/horizontal-auto.svg" alt="Translation status" />
</a>
</div>

If you're a UI/UX designer and you have some ideas on how to improve the app's
look and feel, let me know in the
<a href="{{ site.github }}/discussions" target="_blank" rel="noopener">discussions</a>
section.

### Free software

EtchDroid is free open-source software, licensed under the
<a href="https://www.gnu.org/licenses/gpl-3.0.en.html" target="_blank" rel="noopener">GNU GPLv3</a>. The source code is available on
<a href="{{ site.github }}" target="_blank" rel="noopener">GitHub</a>.

Feel free to distribute builds of the app or bundle it in your custom ROM, as
long as you don't modify it or you make the source code available.

If you have special licensing needs (e.g. you want to distribute a rebranded
version of EtchDroid or use the code in a proprietary product), you can reach
out to me at
<a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a>.
