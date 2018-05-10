import DomUtil from '../../util/util'
import S from '../../selections/selection'
import { $ } from '../../util/dom'
import Cmd from '../../cmd/cmd'
import Dialog from '../../Common/dialog'
const tpl = `<div class="container">
<h3>插入图片</h3>
<span class="close">
<i class="i-close" id="close"></i>
</span>
<div class="item inputitem">
点击上传图片(可多张)
<input type="file" multiple accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"/> 
</div>
<button id="sure">确定</button></div>`
const imgItem = src => `<div class="imgContainer">
<img src="${src}">
</div>`
export default {
  name: 'upload',
  tpl: '<li name="upload"><i class="i-upload"></i></li>',
  events: [{
    type: 'click',
    cb (e, editor) {
      new Dialog().init(tpl, function () {
        document.querySelector('input[type="file"]').addEventListener('change', function () {

          for (let i = 0, len = this.files.length; i < len; i++) {
            let fr = new FileReader()
            fr.onload = function () {
              editor.container.appendChild($(imgItem(this.result))[0])
              S.initRange(editor)
            }
            fr.readAsDataURL(this.files[i])
          }
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