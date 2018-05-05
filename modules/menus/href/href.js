import DomUtil from '../../util/util'
import Cmd from '../../cmd/cmd'
import S from '../../selections/selection'
import Dialog from '../../Common/dialog'
const tpl = `<div class="container">
<input type="text" id="href"/> 
<input type="text" id="val"> <button id="sure">确定</button></div>`
export default {
  name: 'href',
  active: false,
  tpl: '<li name="href"><i class="i-href"></i> </li>',
  events: [{
    type: 'click',
    cb (e, editor) {
      new Dialog().init(tpl, function () {
        document.getElementById('sure').addEventListener('click', function () {
          window.Dialog.hide()
          S.saveRange(editor.orirange)
          Cmd.do('insertHTML', "<a href="+ document.getElementById('href').value + ">"+document.getElementById('val').value + "</a>", editor)
        })
      })
    }
  }]
}