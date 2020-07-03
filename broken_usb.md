---
title: Recover USB drive after using EtchDroid
permalink: /broken_usb/
layout: page
---

On this page you can learn how to make your USB drive work again for normal storage after using EtchDroid.

This both includes when you have successfully written an image to a USB drive and used it, or when EtchDroid failed and you want to use your drive normally again.

Note that there is no need to performe these operations if EtchDroid failed and you want to try again. Just restart the app and make sure you unplug and replug the USB drive to avoid any gotchas.

# Scary notifications
<div style="text-align: center;">
<img style="max-width: 250px; width: auto;" src="/assets/img/broken_usb_1.png" alt="Unsupported USB drive"> <img style="max-width: 250px; width: auto;" src="/assets/img/broken_usb_2.png" alt="Issues with USB drive">
</div>

If you just flashed your USB drive and you see one of the notifications above, your USB drive **IS NOT BROKEN**.

It is extremely unlikely that EtchDroid broke your USB drive. If Android shows this, it's fine. If Windows doesn't seem to recognize it any more, that's okay too, that's how Windows works. It's a bit stupid but that's just how it works.

## What does that message actually mean

Most images you'll want to flash with EtchDroid will have a somewhat *weird* format. For example, take an Ubuntu image: that image is specifically made to boot both from a USB drive and a DVD.

This means that the resulting USB drive's file system will be marked as read-only.

Android complains about it because it expects a writable file system. Not finding any, one of these errors will show up telling you how to format it.

Simply unplug the USB drive and plug it into a computer. If the image you provided is valid and EtchDroid was able to write it, it should work just fine.

# How to format the USB drive

Once you're done with the image you've written you may want to format it with a regular file system. This will allow you to use the USB drive to store regular files once again.

## On Android

New! Watch this YouTube video tutorial:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/VBSXz9LfCbw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

1. Close EtchDroid, plug your USB drive.
1. Tap the "Unsupported USB Drive" or "Issues with USB drive" notification.
    If it does not show up:
    1. Open Settings
    1. Find "Storage"
    1. Tap the name of the USB drive
    1. If the file explorer opens, tap the menu button, "Storage settings", "Format"
1. Tap "Format USB drive"

Remember to eject the USB drive from settings before unplugging it.

![Format USB drive (Android)](/assets/img/format_android.png){:width="300px"}

## On Ubuntu

New! Watch these video tutorials on how to do it with graphically and with the terminal:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/a5MCVQ6GW8I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/rwHSqTMB96k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This should work for regular Ubuntu with GNOME or Unity and with other GNU/Linux distributions with GNOME.

If you have a different desktop environment and you cannot find the "Disks" app, you can follow the terminal instructions. It's a bit more complicated, but if you follow the instructions correctly and use your brain, it will work just fine.

1. Open the Activities dashboard
1. Type "disk" and open "Disks" or "Disk Utility"
1. Select your USB drive from the left sidebar
1. If you see any volumes with a "play" icon on the bottom right, make sure you click on them and click "Stop"
1. From the overflow menu on the upper right, select "Format Disk..."
1. Use default settings, then confirm.
    - The default is to use a MBR partition table. If you want to use GPT, you can select it now. But it won't make any difference for most users.
1. Click on the new empty volume, it will say "Free space". Then click the "+" button
1. Keep as is for the maximum size, then go on to the next page
1. Enter a name for your USB drive, under type select "For use with all systems and device" (FAT32)
1. Click "Create" and confirm

![Format USB drive (Ubuntu)](/assets/img/format_linux.png){:width="100%"}

## On Windows

Watch this video tutorial on how to format your USB drive on Windows:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/lFckE3WLN18" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

It's ironic but you have to use a command prompt to format a USB drive on Windows, and the process is quite complicated.

If you don't feel comfortable doing it on Windows, I suggest you do it using Android since it's super easy.

1. Open the Start menu and search for the "Command Prompt"
1. Right-click it and select "Run as administrator"
1. Launch the command `diskpart`: type it and press Enter
1. Type `list disk` to see the currently recognized disks
    - Warning! Make sure you double and triple check so you don't erase the wrong drive!
1. Select the correct disk by typing `select disk #`
    - For example, `select disk 1`
1. Type `clean` to clean up the disk
1. Type `convert mbr` or `convert gpt` to create a MBR/GPT partition table
    - MBR is the most compatible, GPT has some new and cool features. However, it doesn't really matter, they both work.
1. Type `exit` to close `diskpart`. Close the command prompt
1. Open "File explorer"
1. Right-click "This PC" and select "Manage"
1. In the panel on the left, under "Storage", select "Disk Management"
1. You will see the same disk as before, it should say "Unallocated"
1. Right-click it and select "New Simple Volume..."
1. Click Next, then Next again to keep the maximum size, then once again Next to assign a drive letter
1. Under "Format this volume with the following settings", select FAT32 as "File system" for best compatibility
    - You can type a disk name here
1. Click Next and Finish, and you're done.

## On macOS

**Note:** I don't use macOS so instructions below may not be accurate.

I will be recording a video tutorial for macOS too soon.

1. Open the Disk utility
1. Select your USB drive
1. There should be an "Erase drive" button somewhere
1. You should find an option to format it with a "FAT" file system
