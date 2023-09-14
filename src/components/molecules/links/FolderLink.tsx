import * as React from 'react'
import { HiOutlineFolder, HiOutlineFolderOpen } from 'react-icons/hi2'

import ApiLink from './ApiLink'
import { MethodLabel } from '../../atoms'
import { Item } from '../../../utils/types/api.type'
import { Link } from 'react-scroll'

interface FolderLinkProps {
  name: string
  items: Item[] | null
  method?: string
}

export default function FolderLink({ name, items, method }: FolderLinkProps) {
  const [isShow, setIsShow] = React.useState(false)

  return (
    <div className="ml-3 flex flex-col gap-2">
      {!items ? (
        <Link className="menu gap-3 cursor-pointer" to={name} smooth={true} duration={500} offset={0} spy={true}>
          <MethodLabel method={method as string} />
          <span className="text-sm truncate max-w-[160px] text-title/90">{name}</span>
        </Link>
      ) : (
        <button className="menu gap-3" onClick={() => setIsShow(!isShow)}>
          {isShow ? (
            <HiOutlineFolderOpen className="text-[17px] flex" />
          ) : (
            <HiOutlineFolder className="text-[17px] flex" />
          )}
          <span className="text-sm truncate max-w-[160px] text-title/90">{name}</span>
        </button>
      )}
      {isShow && items && (
        <div className="flex flex-col gap-2">
          {items.map((item, index) =>
            item.item ? (
              <FolderLink name={item.name} items={item.item} key={index} />
            ) : (
              <ApiLink href={`${name}-${item.name}`} name={item.name} key={index} method={item?.request?.method} />
            )
          )}
        </div>
      )}
    </div>
  )
}
