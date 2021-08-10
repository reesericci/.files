local filesystem = require('gears.filesystem')
local with_dpi = require('beautiful').xresources.apply_dpi
local get_dpi = require('beautiful').xresources.get_dpi
local rofi_command = 'env /usr/bin/rofi -dpi ' .. get_dpi() .. ' -width ' .. with_dpi(400) .. ' -show drun -theme ' .. filesystem.get_configuration_dir() .. '/configuration/rofi.rasi -run-command "/bin/bash -c -i \'shopt -s expand_aliases; {cmd}\'"'

return {
  default = {
    screenshot = 'flameshot screen',
    screenshot_region = 'flameshot gui',
    terminal = 'alacritty',
    rofi = rofi_command,
    lock = 'dm-tool lock',
    quake = 'alacritty',
    email = 'mailspring',
    mail = 'mailspring',

    browser = 'firefox',
    console = 'alacritty',
    editor  = 'vscodium',
    social = 'discord',
    game = rofi_command,
    files = 'nautilus',
    mail = 'mailspring',
    podcast = 'gnome-podcasts'
  },

  run_on_start_up = {
    'picom --config ' .. filesystem.get_configuration_dir() .. '/configuration/picom.conf',
    'nm-applet', -- wifi
    'touchegg', -- gestures
    'blueberry-tray', -- Bluetooth tray icon
    'flameshot', -- Gotta screenshot
    'fluxgui', -- Blue light filter
    'feh --bg-scale ~/Pictures/wallpapers/thinkcorrectly.png', --wallpaper
    'xfce4-power-manager', -- Power manager
    '~/.config/awesome/configuration/awspawn', -- Script that kills "dirty" apps that linger on reload.
    'mailspring -b', -- Email Applet
    'stretchly' -- stretch
  }
}
