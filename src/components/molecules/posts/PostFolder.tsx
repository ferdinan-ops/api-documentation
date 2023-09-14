import { Auth, IBody, Item, Response, Url } from '../../../utils/types/api.type'
import { Markdown, Section } from '../..'
import PostApi from './PostApi'

interface PostFolderProps {
  name: string
  method?: string
  description?: string
  apiLists: Item[] | null
  url?: Url
  body?: IBody
  auth?: Auth
  response?: Response[]
}

export default function PostFolder(props: PostFolderProps) {
  return (
    <>
      {props.method ? (
        <PostApi
          id={props.name}
          name={props.name}
          url={props.url as Url}
          description={props.description}
          method={props.method}
          body={props.body as IBody}
          auth={props.auth}
          response={props.response as Response[]}
        />
      ) : (
        <article className="xl:grid xl:grid-cols-5">
          <Section variant="left">
            <h2 className="text-2xl font-medium text-title mb-3">{props.name}</h2>
            {props.description && <Markdown>{props.description as string}</Markdown>}
          </Section>
          <Section variant="right" className="xl:grid hidden" />
        </article>
      )}
      {props.apiLists?.map((api, index) =>
        api.item ? (
          <PostFolder
            name={api.name}
            method={api.request?.method}
            description={api.request?.description}
            apiLists={api.item}
            body={api.request?.body}
            auth={api.request?.auth as Auth}
            key={index}
          />
        ) : (
          <PostApi
            id={props.name + '-' + api.name}
            name={api.name}
            method={api.request.method}
            url={api.request.url}
            description={api.request?.description}
            body={api.request?.body}
            auth={api.request.auth as Auth}
            response={api.response}
            key={index}
          />
        )
      )}
    </>
  )
}
