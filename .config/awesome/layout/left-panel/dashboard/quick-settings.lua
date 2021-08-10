local wibox = require('wibox')
local mat_list_item = require('widget.material.list-item')

return wibox.widget {
  wibox.widget {
    wibox.widget {
      text = 'Quick settings',
      font = 'mononoki, bold 12',
      widget = wibox.widget.textbox
    },
    widget = mat_list_item
  },
  require('widget.volume.volume-slider'),
  --require('widget.brightness.brightness-slider'),
  layout = wibox.layout.fixed.vertical
}
