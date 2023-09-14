import clipboardCopy from 'clipboard-copy'
import * as React from 'react'
import Prism from 'prismjs'

import { Code, Markdown, MethodLabel, RequestBox, RequestItem, Section } from '../..'
import { Auth, IBody, Response, Url } from '../../../utils/types/api.type'
import { HiCheck, HiOutlineClipboard } from 'react-icons/hi2'

import '../../../prism-laserwave.css'
import Icon from '../../atoms/Icon'

interface PostApiProps {
  name: string
  method?: string
  description?: string
  url: Url
  body?: IBody
  response: Response[]
  auth?: Auth
  id: string
}

export default function PostApi({ name, method, description, url, body, response, auth, id }: PostApiProps) {
  const { raw } = url
  const [isCopied, setIsCopied] = React.useState(false)

  React.useEffect(() => {
    Prism.highlightAll()
  }, [])

  const handleCopy = (url: string) => {
    clipboardCopy(url).then(() => {
      setIsCopied(true)
      setTimeout(() => {
        setIsCopied(false)
      }, 1000)
    })
  }

  return (
    <article className="xl:grid xl:grid-cols-5" id={id}>
      <Section variant="left">
        <div className="flex items-center gap-4">
          <MethodLabel method={method as string} />
          <h3 className="text-lg font-bold text-primary truncate max-w-full">{name}</h3>
        </div>
        <div className="w-full px-4 py-3 bg-dark rounded-md flex items-center justify-between relative">
          <p className="font-mono text-white font-medium text-sm break-words max-w-full">{raw}</p>
          <Icon className="w-7 h-7 bg-white/5 hover:bg-white/10 absolute top-2 right-2" onClick={() => handleCopy(raw)}>
            {isCopied ? <HiCheck className="text-green-400" /> : <HiOutlineClipboard className="text-white" />}
          </Icon>
        </div>
        {description && <Markdown>{description as string}</Markdown>}

        {auth && (
          <RequestBox title="Authorization">
            <RequestItem label="type" value={auth.type} />
            {auth.bearer.map((item, index) => (
              <RequestItem label={item.key} value={item.value} key={index} />
            ))}
          </RequestBox>
        )}

        {url.query?.length ? (
          <RequestBox title="Params">
            {url.query.map((item, index) => (
              <RequestItem label={item.key} value={item.value} key={index} />
            ))}
          </RequestBox>
        ) : null}

        {body?.raw || body?.formdata?.length ? (
          <React.Fragment>
            {body.mode === 'raw' && (
              <div className="flex flex-col gap-3">
                <h4 className="text-[17px] font-bold text-title">Body ({body?.mode})</h4>
                <Code raw={body.raw as string} />
              </div>
            )}
            {body.mode === 'formdata' && (
              <RequestBox title={`Body ${body.mode}`}>
                {body.formdata?.map((item, index) => (
                  <RequestItem key={index} label={item.key} value={item.value || (item.src as string)} />
                ))}
              </RequestBox>
            )}
          </React.Fragment>
        ) : null}
      </Section>

      <Section variant="right" className={response.length > 0 ? '' : 'hidden xl:grid'}>
        {response.length > 0 ? (
          <div className="flex flex-col gap-1 xl:gap-3">
            <h4 className="text-sm xl:text-[17px] font-bold text-white">Example Response</h4>
            <div className="flex flex-col gap-4">
              {response.map((res, index) => (
                <div className="flex flex-col gap-3 xl:gap-5" key={index}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-font-dark font-semibold xl:text-base text-sm">{res.name}</h3>
                    <span className="px-2 py-1 border border-font-dark text-font-dark text-[10px] xl:text-xs rounded font-semibold">
                      {res.code} {res.status}
                    </span>
                  </div>
                  <Code raw={res.body} />
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </Section>
    </article>
  )
}
