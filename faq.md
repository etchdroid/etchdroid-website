---
title: FAQ
permalink: /faq/
layout: default
---

### What's the deal with Windows images?

While modern Linux distributions use partition schemes and filesystems that are
compatible with both USB drives and optical media at the same time, Windows ISOs
only work on DVDs.

This is because they use the UDF filesystem, which most BIOSes don't support on
USB drives.

In order to make Windows ISOs work with EtchDroid they must first be converted
to a different filesystem.

### Why is it no longer possible to write Apple DMG images?

Writing DMG images is a very uncommon use case and maintaining support for them
is a lot of work. I've decided to remove support for them in order to focus on
stability and performance.

### Why does Android say the USB drive has issues after using EtchDroid?

The short answer is that Android doesn't support the filesystem types used by
most operating system ISOs. You can safely ignore the warning and keep going.

There's a [separate page]({{ site.baseurl }}/broken_usb/) with further
explanations and instructions on how to format the USB drive once you're done
using it.

### My issue is not listed here

You can <a href="{{ site.github }}/discussions" target="_blank" rel="noopener">ask the community on GitHub</a>.
