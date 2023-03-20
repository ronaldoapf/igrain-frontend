import { api } from './index'
class InterceptorHandler {
  private tokenInterceptorId: number

  setTokenInterceptor = (): void => {
    this.tokenInterceptorId = api.interceptors.request.use((config) => {
      const token: string | null = localStorage.getItem('@iGrainToken')
      if (config.headers) config.headers.authorization = `Bearer ${token}`
      return config
    })
  }

  removeTokenInterceptor = (): void => {
    api.interceptors.request.eject(this.tokenInterceptorId)
  }
}

export const interceptorHandler = new InterceptorHandler()
