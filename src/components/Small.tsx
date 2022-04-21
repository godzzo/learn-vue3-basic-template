import { defineComponent, h, PropType } from 'vue'

export const BasicOptions = defineComponent({
  props: {
    title: { type: String, require: true },
  },
  methods: {
    sayHi() {
      alert(this.title)
    },
  },
  render() {
    return <div class="bg-blue-100 p-2">{this.title}</div>
  },
})

export const BasicComposite = defineComponent({
  props: ['title'],
  setup(props) {
    const sayHi = () => {
      alert(props.title)
    }

    return () => (
      <div onClick={() => sayHi()} class="bg-blue-100 p-2">
        {props.title}
      </div>
    )
  },
})

export const ShortestWorking = defineComponent(() => () => (
  <div>ShortestWorking - DOUBLE ARROW ROXXX 🧐 🤓 😎 </div>
))

export const bookmarkIcon = defineComponent(() => () => (
  <svg
    version="1.1"
    x="0px"
    y="0px"
    viewBox="0 0 330 330"
    style="enable-background:new 0 0 330 330;"
  >
    <path d="M265,0H65c-8.284,0-15,6.716-15,15v300c0,5.766,3.305,11.022,8.502,13.52c5.197,2.498,11.365,1.796,15.868-1.807L165,254.21 l90.63,72.503c2.712,2.17,6.027, .287,9.372,3.287c2.208,0,4.43-0.487,6.496-1.48c5.197-2.497,8.502-7.753,8.502-13.52V15 C280,6.716,273.284,0,265,0z M250,283.79l-75.63-60.503c-2.739-2.191-6.055-3.287-9.37-3.287s-6.631,1.096-9.37,3.287L80,283.79V30 h170V283.79z" />
  </svg>
))
