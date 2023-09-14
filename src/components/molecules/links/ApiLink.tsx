import * as React from 'react'
import { Link } from 'react-scroll'

import { MethodLabel } from '../../atoms'

interface ApiLink {
  name: string
  method: string
  href: string
}

export default function ApiLink({ name, method, href }: ApiLink) {
  const [isShow, setIsShow] = React.useState(false)

  return (
    <Link className="ml-3 flex flex-col" to={href} smooth={true} duration={500} offset={0} spy={true}>
      <button className="menu gap-3" onClick={() => setIsShow(!isShow)}>
        <MethodLabel method={method} />
        <span className="text-[13px] truncate max-w-[140px] text-title/80">{name}</span>
      </button>
    </Link>
  )
}
