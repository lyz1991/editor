import S from './selections/selection'
import DomUtil from './util/util'
const color = ['red', 'orange', 'yellow', 'green',
  'cyan', 'blue', 'purple', 'pink', 'gray', 'brown', 'yellowgreen', 'skyblue']
export default {
 init (container, editor, name) {
   let frag = document.createDocumentFragment()
   let colorContainer = document.createElement('ul')
   colorContainer.className = 'color-container'
   frag.appendChild(colorContainer)
   for (let i = 0; i < color.length; i++) {
     let span = document.createElement('li')
     span.className = 'color-item'
     span.style.backgroundColor = color[i]
     colorContainer.appendChild(span)
   }
   container.appendChild(frag)
   this.bind(editor, colorContainer, name)
 },
 bind(editor, container, name) {
   container.addEventListener('click', e => {
     console.log(editor.orirange)
     if (DomUtil.getRangeInContainer(editor, editor.orirange)) {
       let color = e.target.style.backgroundColor
       S.saveRange(editor.orirange)
       document.execCommand(name, false, color)
     }
   })
 }
}