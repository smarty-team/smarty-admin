

import { defineComponent,PropType,toRefs} from "vue";
import "uno.css";
export type ISize = 'small' | 'medium' | 'large'
export type IColor = 'black' | 'gray' | 'red' | 'yellow' | 'green'|'blue'|'indigo'|'purple'|'pink'

export const props = {
  // 新增
  size: {
    type: String as PropType<ISize>,
    default: 'medium'
  },

  color: {
    type: String as PropType<IColor>,
    default: 'blue'
  },

  round: {
    type: Boolean,
    default: false
  },

  plain: {
    type:Boolean,
    default: false
  },

  icon: {
    type:String,
    default:''
  }

} as const


export default defineComponent({
  name: "MyButton",
  props,
  setup(props, {slots}) {
    const size = {
      'small':{
        x:'2',y:'1',text:'sm'
      },
      'medium':{
        x:'4',y:'2',text:'base'
      },
      'large':{
        x:'6',y:'3',text:'lg'
      }
    }


    return () => <button class={`
      py-${size[props.size].y}
      px-${size[props.size].x}
      font-light
      ${props.round ? 'rounded-full': 'rounded-lg'}
      bg-${props.color}-${props.plain ? '100' : '500'}
      hover:bg-${props.color}-400
      border-${props.color}-${props.plain ? '400' : '400'}
      cursor-pointer
      border-solid
      text-${props.plain ? props.color : 'white' }
      text-${size[props.size].text}
      hover:text-white
      transition duration-300 ease-in-out transform hover:scale-105
      
      `} > 
      { props.icon !== "" ? <i class={`i-ic-baseline-${props.icon} p-3`}></i> : ""}
      {slots.default ? slots.default() : ''}
     </button>
  }
});
