import { $ }from '../util/dom'
export default class Dialog {
  init (tpl, cb, hidecb) {
    if (!window.Dialog) {
      document.body.appendChild($(`<div class="dialog" id="dialog">${tpl}</div>`)[0])
      this.id = document.getElementById('dialog')
      this.bind (hidecb)
      cb && cb()
      this.prevent()
      return window.Dialog = this
    }
    window.Dialog.show(tpl, cb)
  }
  show (tpl, cb) {
    this.id.innerHTML = tpl
    this.id.style.display = 'block'
    cb && cb()
    this.prevent(tpl)
  }
  bind (cb) {
    this.id.addEventListener('click', function () {
       window.Dialog.hide(cb)
    })
  }
  prevent () {
   this.id.children[0].addEventListener('click', function (e) {
      e.stopPropagation()
    })
  }
  hide (cb) {
    this.id.style.display = 'none'
    cb && cb()
  }

}
