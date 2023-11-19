import {cva} from "class-variance-authority";

export const dtStyles = cva(`
  font-bold min-h-12
  bg-gray-100 text-center grid place-content-center
  border-gray-200
`,  {
  variants: {
    type: {default: '', corner: 'border-b border-r'}
  },
  defaultVariants: {
    type: 'default'
  }
})

export const ddStyles = cva(`
  flex items-center pl-4 border-gray-200
`, {
  variants: {
    type: {default: '', corner: 'border-b'}
  },
  defaultVariants: {
    type: 'default'
  }
})
