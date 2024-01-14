import { api } from '../../../libs/api'
interface GetBooksProps {
  search: string
}

interface BooksVolumeProps {
  items: Volume[]
  kind: string
  totalItems: number
}

const getBooks = async ({ search }: GetBooksProps): Promise<BooksVolumeProps> => {
  const url =
    `/books/v1/volumes?q=${search}&key=AIzaSyDKEPLS_DBkW3OeAK1QmvvYlnp5v0PmFQI` + `&maxResults=40`

  const { data } = await api.get(url)

  return data
}

export default getBooks
