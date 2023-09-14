import clsx from 'clsx'

interface MethodLabelProps {
  method: string
  className?: string
}

export default function MethodLabel({ method, className }: MethodLabelProps) {
  return (
    <span
      className={clsx(
        'p-1 rounded font-bold text-white tracking-wide',
        method === 'GET' && 'bg-green-500',
        method === 'POST' && 'bg-yellow-500',
        method === 'PUT' && 'bg-blue-500',
        method === 'DELETE' && 'bg-red-500',
        !className && 'text-[10px]',
        className
      )}
    >
      {method}
    </span>
  )
}
