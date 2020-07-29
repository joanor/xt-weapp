'use strict'
Object.defineProperty(exports, '__esModule', {value: true})
var component_1 = require('../common/component')
component_1.VantComponent({
  props: {
    color: String,
    bgcolor: String,
    vertical: Boolean,
    type: {
      type: String,
      value: 'circular'
    },
    size: String,
    textSize: String,
    various: Boolean
  },
  data: {
    array12: Array.from({length: 12})
  }
})
