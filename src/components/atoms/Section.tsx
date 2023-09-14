import clsx from 'clsx'

interface SectionProps {
  children?: React.ReactNode
  variant: 'left' | 'right'
  className?: string
}
export default function Section({ children, variant, className }: SectionProps) {
  return (
    <section
      className={clsx(
        'xl:px-10 xl:py-8',
        variant === 'left' && 'border-t-2 col-span-3 border-line flex flex-col gap-5 py-8',
        variant === 'right' && 'xl:border-t-2 col-span-2 bg-dark border-white/10 xl:rounded-none rounded-lg p-4',
        className
      )}
    >
      {children}
    </section>
  )
}
