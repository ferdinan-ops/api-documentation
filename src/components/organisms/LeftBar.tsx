import * as React from 'react'
import { HiMagnifyingGlass } from 'react-icons/hi2'

import medantourism from '../../assets/data/medantourism.json'
import { Item } from '../../utils/types/api.type'
import { ProjectLink } from '../molecules'
import { Brand } from '../atoms'

import tamara from '../../assets/data/tamara.json'
import Button from '../atoms/Button'
import { useNavigate } from 'react-router-dom'
import { HeaderMobile } from '.'
import useOutsideClick from '../../hooks/useOutsideClick'
import clsx from 'clsx'

export default function LeftBar() {
  const navigate = useNavigate()
  const ref = React.useRef<HTMLDivElement>(null)

  const [isShow, setIsShow] = React.useState(false)
  const isClickOutside = useOutsideClick({ ref })

  React.useEffect(() => {
    if (isClickOutside) setIsShow(false)
  }, [isClickOutside])

  console.log({ isClickOutside })

  return (
    <React.Fragment>
      <HeaderMobile action={() => setIsShow(true)} />
      <div
        className={clsx(
          'bg-sideBar font-semibold text-title font-source top-0 overflow-scroll no-scroll h-screen flex-col xl:flex z-50 fixed xl:sticky shadow-2xl xl:shadow-none transition-all duration-300',
          isShow ? 'translate-x-0' : '-translate-x-full xl:translate-x-0'
        )}
        ref={ref}
      >
        <section className="flex flex-col sticky top-0 bg-gray py-[30px] mx-5 border-b border-line bg-sideBar">
          <div className="mb-[30px]">
            <Brand withPlus />
          </div>

          <div className="relative">
            <HiMagnifyingGlass className="pointer-events-none absolute top-1/2 ml-3 -translate-y-1/2 text-lg text-gray-400 md:ml-4 md:text-xl" />
            <input
              type="text"
              className="pl-10 xl:pl-12 outline-none text-title placeholder:text-gray-400 bg-title/5 py-3 rounded-lg"
              placeholder="Search..."
            />
          </div>
        </section>

        <div className="flex flex-col my-5">
          <span className="text-title/60 mb-2 text-sm mx-5">Projects</span>
          <nav className="flex flex-col gap-2">
            <ProjectLink
              name={tamara.info.name}
              path={'/' + tamara.info._postman_id}
              items={tamara.item as unknown as Item[]}
            />
            <ProjectLink
              name={medantourism.info.name}
              path={'/' + medantourism.info._postman_id}
              items={medantourism.item as unknown as Item[]}
            />
          </nav>
        </div>

        <div className="flex items-center gap-5 px-5 sticky bottom-0 py-5 bg-sideBar mt-auto border-t border-line">
          {/* <img src="https://source.unsplash.com/random" alt="profile" className="w-9 h-9 object-cover rounded-full" />
        <div className="flex flex-col">
          <span>John Doe</span>
          <span className="text-xs -mt-1 font-normal text-title/50">Admin</span>
        </div>
        <div className="flex p-2 ml-auto bg-red-500 rounded-full hover:bg-red-600 cursor-pointer">
          <HiArrowLeftOnRectangle className="text-base text-white" />
        </div> */}
          <div className="flex gap-2 flex-1 justify-between">
            <Button variant="secondary" className="flex-1 text-sm" onClick={() => navigate('/register')}>
              Daftar
            </Button>
            <Button variant="primary" className="flex-1 text-sm" onClick={() => navigate('/login')}>
              Masuk
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
