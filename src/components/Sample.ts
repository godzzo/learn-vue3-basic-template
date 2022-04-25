import { h, ref } from 'vue'

export const TextComponent = ({
  color,
}: {
  color: 'blue' | 'red' | 'green'
}) => {
  const ownColor = ref('yellow')

  return h(
    'div',
    {
      class: `bg-${color}-700 text-${ownColor.value}-300 font-bold text-xl p-4`,
    },
    'Hello World'
  )
}
