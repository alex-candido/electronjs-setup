import { api } from './api'

const fetcher = async (url: string) => await api.get(url).then((res) => res.data)

export default fetcher
