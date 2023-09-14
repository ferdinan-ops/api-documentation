import { HiBars3, HiChevronDown } from 'react-icons/hi2'
import { Logo } from '../../assets'

interface HeaderMobileProps {
  action: (value: boolean) => void
}

export default function HeaderMobile({ action }: HeaderMobileProps) {
  return (
    <header className="h-[80px] bg-dark xl:hidden flex items-center px-6 fixed inset-x-0 top-0 z-40">
      <nav className="flex items-center justify-between w-full">
        <HiBars3 className="w-7 h-7 text-white" onClick={action} />
        <img src={Logo} alt="api doc logo" className="h-10 -mr-7" />
        <div className="text-sm text-font-dark font-semibold flex items-center gap-1 px-2 py-1 rounded-full bg-white/10">
          <span>CURL</span>
          <HiChevronDown className="text-sm" />
        </div>
      </nav>
    </header>
  )
}
