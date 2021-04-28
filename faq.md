---
title: FAQ
permalink: /faq/
layout: page
---

### App hangs after USB drive selection (Samsung with OneUI 3.0+, recent Huawei and OnePlus devices)

This is a known issue, see [magnusja/libaums#293](https://github.com/magnusja/libaums/issues/293).

There is no known workaround at the moment and I do not own an affected device. A potential workaround which has been reported to
usually not work but that is still worth a shot is to *eject* the USB drive before starting EtchDroid.

This can usually be done via the system notification or via Settings → Storage.

Since I do not own any device from Samsung and Huawei, and the newest OnePlus phone I have is a OnePlus 3T - not affected by the issue,
there's very little I can do about it.

If you'd like to see this issue solved you can contribute to the project by:

- Fixing the issue yourself, if you know a bit of Android development and you own an affected device
- Buying me an affected device: see the [Donations](/donate) page for options
  - I consider it common sense that, in this particular case, low-tier donations won't be very helpful since the affected devices cost 800€ or more
- [Posting a bounty](https://www.bountysource.com/issues/96551438-does-not-work-on-samsung-s20-oneui-3-0-android-11) on the issue, volunteers 
  on the Internet who resolve it will be rewarded with your bounty

I'm considering blocklisting the affected devices on Google Play.

### My USB drive is broken, please help!

It's not. Calm down and read this: [My USB drive is broken! Plz helppppp :(](/broken_usb/)

### I flashed [insert OS name here] ISO and it doesn't boot

EtchDroid is only able to write installers for OS images that explicitly support being written to USB drives.

This **does not include Windows**. Windows images need to be handled a lot differently and research is being done to support them.

Other OSes such as macOS and old GNU/Linux distros (such as Damn Small Linux) are also not supported for the same reason.

Known working OS images:
- Ubuntu and all the derivatives
- Debian
- Fedora
- Arch Linux
- Raspberry Pi SD card images (you need to extract the zip file)

### I'm trying to flash this Raspberry Pi image but the SD card does not appear on the list

Due to limitations in the Android API, you **cannot** use the internal SD card slot.

You need to purchase a USB SD card adapter and use that instead.

Also, beware that most Raspberry Pi distributions come in a zip file which contains an `.img` file. You need to extract it first using another app of your choice.

### When I tap "Write DMG image", an empty file picker is shown

That's because you don't have any DMG files on your phone. Download one and see if it shows up.

### When I tap a USB drive from the list, the app hangs

You tried to use the app but it crashed, then you ran it again without unplugging the USB drive. It hangs because as it crashed, it didn't get the chance to clean up the USB interface, so now it's in an inconsistent state. Reattach the USB drive and restart the app.

### I'm getting this "Socket operation on non socket" error

That happens for a number of reasons:

- You unplugged your USB drive while it was being written to
- Your USB drive is defective
- Your USB OTG adapter is defective
- You're using a USB hub
- You're on Android 9 and recently changed your phone's language (yep!)

The first 4 can be easily solved by replacing a component or just being careful not to unplug the USB drive while it's being worked on. The last one can be solved by rebooting your phone.

### My issue is not listed here

File it on GitHub: [link](https://github.com/Depau/EtchDroid/issues)
