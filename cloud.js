import LY from 'lvyii-engine'
import {blockFunc} from './blocks'

LY.Cloud.define('cloudTest', function (request) {
  let {text} = request.params
  return text?text:'hello lvyii'
})

LY.Cloud.define('getInfo', blockFunc.getInfo)