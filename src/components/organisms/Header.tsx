import * as React from 'react'
import clsx from 'clsx'

interface SupportedProps {
  name: string
  onClick: () => void
  isActive: boolean
}

const SupportedList = ['CURL', 'PYTHON', 'RUBY', 'JAVASCRIPT', 'PHP', 'JAVA']

const Supported = ({ name, onClick, isActive }: SupportedProps) => {
  return (
    <button
      className={clsx(
        'border-b-2',
        isActive ? 'border-primary pb-1 text-white' : 'text-font-dark pb-1 border-transparent'
      )}
      onClick={onClick}
    >
      {name}
    </button>
  )
}

export default function Header() {
  const [isActive, setIsActive] = React.useState('CURL')

  return (
    <header className="h-[50px] grid-cols-5 grid-flow-row-dense xl:grid hidden">
      <div className="col-span-3" />
      <div className="col-span-2 bg-dark text-white flex items-center justify-between px-9 font-semibold text-sm">
        {SupportedList.map((name, index) => (
          <Supported key={index} name={name} onClick={() => setIsActive(name)} isActive={name === isActive} />
        ))}
      </div>
    </header>
  )
}
