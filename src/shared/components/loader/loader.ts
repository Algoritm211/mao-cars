import {cva} from "class-variance-authority";

export const maoLoader = cva('loading loading-spinner text-purple-900', {
  variants: {
    size: {
      xs: 'loading-xs',
      sm: 'loading-sm',
      md: 'loading-md',
      lg: 'loading-lg',
    },
  },
  defaultVariants: {
    size: 'md',
  }
})
