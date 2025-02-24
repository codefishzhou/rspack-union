import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

interface RequestConfig extends AxiosRequestConfig {
  // 可扩展自定义配置
}

interface HttpResponse<T = any> {
  code: number;
  data: T;
  message?: string;
}
class HttpClient {
  private instance: AxiosInstance;

  constructor(config: RequestConfig = {}) {
    this.instance = axios.create({
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
      },
      ...config
    });

    // 请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // 这里可以添加全局请求处理逻辑，例如添加token
        return config;
      },
      (error: AxiosError) => Promise.reject(error)
    );

    // 响应拦截器
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        // 处理全局响应逻辑
        return response.data;
      },
      (error: AxiosError) => this.handleError(error)
    );
  }

  private handleError(error: AxiosError): never {
    // 统一错误处理
    if (error.response) {
      const { status, data } = error.response;
      throw new Error(`请求错误 ${status}: ${JSON.stringify(data)}`);
    }
    throw new Error(`网络错误: ${error.message}`);
  }

  public async get<T = any>(url: string, config?: RequestConfig): Promise<HttpResponse<T>> {
    return this.instance.get(url, config);
  }

  public async post<T = any>(url: string, data?: any, config?: RequestConfig): Promise<HttpResponse<T>> {
    return this.instance.post(url, data, config);
  }

  public async put<T = any>(url: string, data?: any, config?: RequestConfig): Promise<HttpResponse<T>> {
    return this.instance.put(url, data, config);
  }

  public async delete<T = any>(url: string, config?: RequestConfig): Promise<HttpResponse<T>> {
    return this.instance.delete(url, config);
  }
}

// 创建默认实例并导出
const httpClient = new HttpClient({
  baseURL: process.env.API_APP_BASE_URL + '/worknotes'
});

export default httpClient;