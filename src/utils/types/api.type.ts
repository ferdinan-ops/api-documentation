interface BearerToken {
  key: string
  value: string
  type: string
}

interface FormdataItem {
  key: string
  value: string
  type: string
  src?: string
}

export interface Auth {
  type: string
  bearer: BearerToken[]
}

interface Query {
  key: string
  value: string
}

export interface Url {
  raw: string
  host: string[]
  path: string[]
  query?: Query[]
}

interface Header {
  key: string
  value: string
  type: string | null
}

export interface IBody {
  mode: string
  formdata: FormdataItem[] | null
  raw: string | null
}

export interface Response {
  name: string
  originalRequest: {
    method: string
    header: Header[]
    body: IBody
    url: Url
  }
  status: string
  code: number
  _postman_previewlanguage: string
  header: Header[]
  cookie: string[]
  body: string
}

interface Request {
  auth: Auth | null
  method: string
  header: Header[] | null
  body: IBody
  url: Url
  description: string
}

export interface Item {
  name: string
  item: Item[] | null
  request: Request
  response: Response[]
}

interface Info {
  _postman_id: string
  name: string
  description: string
}

export interface PostmanCollection {
  info: Info
  item: Item[]
}
