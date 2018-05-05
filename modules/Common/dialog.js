import { $ }from '../util/dom'
export default class Dialog {
  init (tpl, cb) {
    if (!window.Dialog) {
      document.body.appendChild($(`<div class="dialog" id="dialog">${tpl}</div>`)[0])
      this.id = document.getElementById('dialog')
      this.bind ()
      cb && cb()
      this.prevent()
      return window.Dialog = this
    }
    window.Dialog.show(tpl)
  }
  show (tpl) {
    this.id.innerHTML = tpl
    this.id.style.display = 'block'
    this.prevent(tpl)
  }
  bind () {
    this.id.addEventListener('click', function () {
       window.Dialog.hide()
    })
  }
  prevent () {
   this.id.children[0].addEventListener('click', function (e) {
      e.stopPropagation()
    })
  }
  hide () {
    this.id.style.display = 'none'
  }


}
