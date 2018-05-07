import DomUtil from '../../util/util'
export default {
  name: 'publish',
  tpl: '<li name="publish"><i class="i-publish"></i>发布文章 </li>',
  events: [{
    type: 'click',
    cb (e, editor) {
     editor.publish()
    }
  }]
}