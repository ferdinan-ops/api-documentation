import clsx from 'clsx'

interface IconProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function Icon({ children, className, onClick }: IconProps) {
  return (
    <div
      className={clsx(
        'flex cursor-pointer items-center justify-center rounded-full',
        !className && 'hover:bg-slate-200',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
