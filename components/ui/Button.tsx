import { type ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  ref?: React.Ref<HTMLButtonElement>
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  ref,
  ...props
}: ButtonProps) {
  return (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center rounded-full font-semibold transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        variant === 'primary' && 'bg-primary text-white hover:bg-primary-hover',
        variant === 'outline' &&
          'border border-primary text-primary hover:bg-primary-light',
        variant === 'ghost' && 'text-foreground hover:bg-surface',
        size === 'sm' && 'px-4 py-2 text-sm',
        size === 'md' && 'px-5 py-2.5 text-sm',
        size === 'lg' && 'px-6 py-3 text-base',
        className,
      )}
      {...props}
    />
  )
}
