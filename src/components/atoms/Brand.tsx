import { HiPlusCircle } from 'react-icons/hi2'
import { Logo } from '../../assets'
import { Link } from 'react-router-dom'

interface BrandProps {
  withPlus?: boolean
  width?: string
  containerClass?: string
}

export default function Brand({ withPlus, width, containerClass }: BrandProps) {
  return (
    <div className="flex justify-between items-center">
      <Link to="/" className={`${containerClass} flex items-center gap-4 text-[26px]`}>
        <img src={Logo} alt="api doc logo" className={`${width} w-10 h-10 object-contain`} />
        {withPlus && <h1 className="font-semibold text-font">API Doc</h1>}
      </Link>
      {withPlus && (
        <Link to="/">
          <HiPlusCircle className="text-4xl text-primary hover:text-emerald-700" />
        </Link>
      )}
    </div>
  )
}
