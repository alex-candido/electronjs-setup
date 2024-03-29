interface IBooks {
  imageLinks: {
    thumbnail: string
    smallThumbnail: string
  }
  previewLink: string
  title: string
  authors: string[]
  publisher: string
  categories: string[]
  language: string
  publishedDate: string
  pageCount: number
  description: string
}
