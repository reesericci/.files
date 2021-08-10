## Material Design theme for [AwesomeWM](https://awesomewm.org/)

## Firefox Theme
I have designed a firefox theme for material-awesome! If you would like to download it, click the link below.
[https://addons.mozilla.org/firefox/downloads/file/3577094/material_awesome-1.0-an+fx.xpi](https://addons.mozilla.org/firefox/downloads/file/3577094/material_awesome-1.0-an+fx.xpi)

## BandagedBD (BetterDiscord) Discord Theme
I made a theme for BandagedBD that complements this desktop, check it out at the link below:
[https://github.com/reesericci/material-awesome-discord](https://github.com/reesericci/material-awesome-discord)

## Installation
### Arch & Arch Derivatives

### 1) Get AUR dependencies (pacman will install all mainstream dependencies)
- [Tryone144's picom fork (picom-tryone-git)](https://aur.archlinux.org/packages/picom-tryone-git/) for the compositor (blur and animations)
- [mononoki font (ttf-mononoki)](https://aur.archlinux.org/packages/ttf-mononoki/) as the only font
### 2) Install the PKGBUILD
Go to the releases tab and download the latest PKGBUILD
### 2b)
Open your terminal emulator of choice and change directory (cd) into the same directory as the PKGBUILD and then run ```makepkg -si -p material-awesome.PKGBUILD``` to install the package.

### 3) Set Themes & Icons
Open ```lxappearance``` and set the ```Widget``` to be Materia Dark and set the ```Icons``` to be Papirus Dark

### Install manually

### 1) Get all the dependencies
- [AwesomeWM](https://awesomewm.org/) as the window manager
- [Rofi](https://github.com/DaveDavenport/rofi) for the app launcher
- [Tryone144's picom fork](https://github.com/tryone144/picom) for the compositor (blur and animations)
- [i3lock-fancy](https://github.com/meskarune/i3lock-fancy) the lockscreen application
- [xclip](https://github.com/astrand/xclip) for copying screenshots to clipboard
- [Blueberry](https://github.com/linuxmint/bluetooth) for bluetooth management
- [NetworkManager & NetworkManager Applet](https://wiki.gnome.org/Projects/NetworkManager) for network management
- [XFCE4 Power Manager](https://docs.xfce.org/xfce/xfce4-power-manager/start) Power management
- [lxappearance](https://sourceforge.net/projects/lxde/files/LXAppearance/) to set up the gtk and icon theme
- [git](https://git-scm.com) for cloning the material-awesome config
- (Optional) [Materia](https://github.com/nana-4/materia-theme) as GTK theme
- (Optional) [Papirus Dark](https://github.com/PapirusDevelopmentTeam/papirus-icon-theme) as icon theme
- (Optional) [Flameshot](https://flameshot.js.org) for the screenshot utility
- (Optional) [Alacritty](https://github.com/alacritty/alacritty) for the terminal emulator

### 2) Clone the configuration

```
git clone https://github.com/reesericci/material-awesome.git ~/.config/awesome
```
### 3) Copy bashrc for stylized terminal
``` 
cp ~/.config/awesome/theme/bashrc ~/.bashrc 
```
### 4) Set Themes & Icons
Open ```lxappearance``` and set the ```Widget``` to be Materia Dark and set the ```Icons``` to be Papirus Dark

## Other information

### Default Apps - To change them modify the configuration/apps.lua file
- Browser: [Firefox Nightly](https://firefox.com)
- Console: [Alacritty](https://github.com/alacritty/alacritty)
- Code Editor: [Atom](https://atom.io)
- Social: [Discord](https://discordapp.com)
- Files: [Nautilus/GNOME Files](https://wiki.gnome.org/action/show/Apps/Files?action=show&redirect=Apps%2FNautilus)
- Music: [Spotify](https://snapcraft.io/spotify)
- Email: [Mailspring](https://getmailspring.com)
- Screenshot Utility: [Flameshot](https://flameshot.js.org)
## On startup apps - Modify the configuration/apps.lua file
- Compton
- NetworkManager applet
- Blueberry applet
- Flameshot 
- XFCE4 Power Manager
- [F.lux](https://justgetflux.com/) Blue light filter
- [Polychromatic Applet (Openrazer frontend)](https://polychromatic.app/) for my Razer Blade RGB control
- [pacwall](https://github.com/Kharacternyk/pacwall) for wallpaper (Auto-generates based on packages)
- [Slack applet](https://slack.com) for communication
- [Mailspring applet](https://getmailspring.com) for email
## Config Files/Settings
* [Configuration](./configuration) is about all the **settings** available
* [Layout](./layout) hold the **disposition** of all the widgets
* [Module](./module) contain all the **features** available
* [Theme](./theme) hold all the **aestetic** aspects
* [Widget](./widget) contain all the **widgets** available
