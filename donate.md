---
title: Donate
permalink: /donate/
layout: default
---

Writing and testing this app takes an incredible amount of time and effort. If
the app has been helpful, please consider showing your support through a
donation.

<div class="card">
<strong>Please note:</strong> While every contribution is deeply appreciated, donations don't
equate to special treatment or support. EtchDroid is a hobby project, and I
dedicate time to it as my schedule allows. I welcome suggestions and bug reports
from all users, donor or not.
</div>

For customized versions of EtchDroid tailored to your company's branding or
other specific needs (including relicensing), I may be open to freelance
opportunities. Reach out at
[{{ site.author.email }}](mailto:{{ site.author.email }}) to discuss further.

### Recurring

- Become a patron on <a href="https://www.patreon.com/depau" target="_blank" rel="noopener">Patreon</a>
- Become a sponsor on <a href="https://github.com/sponsors/depau" target="_blank" rel="noopener">GitHub Sponsors</a>

### One-time

- Buy me a sandwich with <a href="https://paypal.me/DavideDepau" target="_blank" rel="noopener">PayPal</a>

### Cryptocurrencies

If you'd rather donate in cryptocurrency, below are my addresses.

<div class="card">
<strong>Note:</strong> only send Ethereum ERC-20 tokens to the Tether address.
If you'd like to use a different blockchain, please send me an email.
</div>

<div class="crypto-box">
{% for entry in site.crypto_addresses %}
<div class="crypto-item">
    <div class="crypto-name">{{ entry.name }}</div>
    <div class="crypto-qr">{% include {{ entry.qrcode }} %}</div>
    <div class="crypto-address">
        <input type="text" class="monospace" value="{{ entry.address }}" readonly size="1">
        <button class="copy-button" data-clipboard-text="{{ entry.address }}" title="Copy address"><span class="material-symbols-outlined">content_copy</span></button>
    </div>
</div>
{% endfor %}
</div>
