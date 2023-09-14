import * as React from 'react'
import { Header, Markdown, Settings } from '../components'
import DATA from '../assets/data/tamara.json'
import { useTitle } from '../hooks'
import PostFolder from '../components/molecules/posts/PostFolder'
import { Auth, IBody, Item } from '../utils/types/api.type'
import Icon from '../components/atoms/Icon'
import { HiChevronUp, HiOutlineCog6Tooth } from 'react-icons/hi2'

export default function Detail() {
  const [isOpen, setIsOpen] = React.useState(false)

  useTitle(DATA.info.name)

  return (
    <section className="flex flex-col">
      <Header />
      <div className="flex min-h-[calc(100vh-50px)] flex-col">
        <section className="xl:grid xl:grid-cols-5">
          <section className="col-span-3 xl:px-10 mb-10">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-semibold text-title">{DATA.info.name}</h1>
              <div className="relative">
                <Icon className="w-10 h-10 bg-slate-200 hover:bg-slate-300" onClick={() => setIsOpen(!isOpen)}>
                  <HiOutlineCog6Tooth className="text-2xl" />
                </Icon>
                <Settings isOpen={isOpen} setIsOpen={setIsOpen} />
              </div>
            </div>
            {DATA.info?.description && (
              <article className="mt-10">
                <Markdown>{DATA.info?.description}</Markdown>
              </article>
            )}
          </section>
          <section className="col-span-2 bg-dark xl:grid hidden" />
        </section>

        {DATA.item.map((folder, index) => (
          <PostFolder
            name={folder.name}
            apiLists={folder.item as unknown as Item[]}
            description={folder?.description}
            url={folder?.request?.url}
            method={folder?.request?.method || ''}
            body={folder?.request?.body as IBody}
            auth={folder.request?.auth as unknown as Auth}
            response={folder?.response}
            key={index}
          />
        ))}
      </div>

      <Icon
        className="w-12 h-12 bg-primary fixed bottom-4 right-5 shadow-2xl shadow-black"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <HiChevronUp className="text-white text-xl" />
      </Icon>
    </section>
  )
}
