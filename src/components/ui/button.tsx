import * as React from 'react'
import { Slot } from 'radix-ui'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-250 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--naz-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--page)] disabled:pointer-events-none disabled:opacity-45',
  {
    variants: {
      variant: {
        default:
          'bg-[var(--button-primary-bg)] text-[var(--button-primary-fg)] hover:bg-[var(--naz-blue)] hover:text-[var(--naz-white)] hover:-translate-y-0.5',
        secondary:
          'border border-[var(--line)] bg-[var(--card-solid)] text-[var(--ink)] hover:border-[var(--hover-border)] hover:bg-[var(--button-secondary-hover)]',
        glass:
          'border border-[var(--line)] bg-[var(--card)] text-[var(--ink)] backdrop-blur-md hover:border-[var(--hover-border)] hover:bg-[var(--button-secondary-hover)]',
        ghost:
          'text-[var(--ink)] hover:bg-[rgba(8,12,16,0.05)] hover:text-[var(--naz-blue)]',
        outline:
          'border border-[var(--line)] bg-transparent text-[var(--ink)] hover:border-[var(--hover-border)] hover:bg-[var(--button-secondary-hover)]',
      },
      size: {
        default: 'h-11 px-6',
        sm: 'h-9 px-4 text-xs',
        lg: 'h-12 px-7 text-sm',
        xl: 'h-14 px-9 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot.Root : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button }
