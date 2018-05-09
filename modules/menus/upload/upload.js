import DomUtil from '../../util/util'
import S from '../../selections/selection'
import Cmd from '../../cmd/cmd'
import Dialog from '../../Common/dialog'
const tpl = `<div class="container">
<h3>插入图片</h3>
<span class="close">
<i class="i-close" id="close"></i>
</span>
<div class="item inputitem">
点击上传图片(可多张)
<input type="file" multiple/> 
</div>
<button id="sure">确定</button></div>`
export default {
  name: 'upload',
  tpl: '<li name="upload"><i class="i-upload"></i></li>',
  events: [{
    type: 'click',
    cb (e, editor) {
      new Dialog().init(tpl, function () {
        document.querySelector('input[type="file"]').addEventListener('change', function () {
          console.log('change')
          window.Dialog.hide()
        })
        document.getElementById('sure').addEventListener('click', function () {
          window.Dialog.hide()
          S.saveRange(editor.orirange)
        })
        document.getElementById('close').addEventListener('click', function () {
          window.Dialog.hide()
          S.saveRange(editor.orirange)
        })
      }, function () {
        editor.container.focus()
      })
    }
  }]
}