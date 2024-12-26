import axios, { type AxiosResponse } from 'axios'

const BASE_URL = `${import.meta.env.VITE_APP_API_BASE_URL}/api`
const validStatus = (status: number): boolean => status >= 200 && status < 300
export const validStatusOrThrow = (response: AxiosResponse): AxiosResponse => {
  if (!validStatus(response.status)) throw response
  return response
}

export class ApiService {
  private api = axios.create()
  private apiUrl: string
  public constructor(apiUrl?: string) {
    this.apiUrl = apiUrl ? apiUrl : BASE_URL
  }

  async get(path: string): Promise<AxiosResponse> {
    return this.api.get(this.apiUrl + path)
  }

  async post(path: string, data: any): Promise<AxiosResponse> {
    return this.api.post(this.apiUrl + path, data)
  }
}
