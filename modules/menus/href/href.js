import DomUtil from '../../util/util'
import Cmd from '../../cmd/cmd'
import S from '../../selections/selection'
import Dialog from '../../Common/dialog'
const tpl = `<div class="container">
<h3>插入链接</h3>
<span class="close">
<i class="i-close" id="close"></i>
</span>
<div class="item">
<span><i class="i-href"></i></span>
<input type="text" id="href"/> 
</div>
<div class="item">
<span><i class="i-charactor"></i></span>
<input type="text" id="val"> 
</div>
<button id="sure">确定</button></div>`
const check = () => {
  if (document.querySelector('#href').value && document.querySelector('#val').value) {
    return true
  }
  return false
}
export default {
  name: 'href',
  active: false,
  tpl: '<li name="href" class="tipright" content="超链接"><i class="i-href"></i> </li>',
  events: [{
    type: 'click',
    cb (e, editor) {
      new Dialog().init(tpl, function () {
        document.getElementById('sure').addEventListener('click', function () {
          window.Dialog.hide()
          S.saveRange(editor.orirange)
          if (check()) {
            Cmd.do('insertHTML', `<a href="${document.getElementById('href').value}">${document.getElementById('val').value}</a>`, editor)
          }
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