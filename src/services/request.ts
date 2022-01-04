import axios, { AxiosRequestConfig } from 'axios';

const useRequest = () => {
  const baseUrl = '/api'; // process.env.VUE_APP_API_BASE_URL
  const request = async <R = any>(opts: AxiosRequestConfig): Promise<R> => {
    const baseURL = baseUrl;
    // headers
    const headers = {} as any;

    // add token to headers
    // const token = localStorage.getItem('token');
    // if (token) {
    //   headers['Authorization'] = token;
    // }
    // axios response'
    const res = await axios.request({
      ...opts,
      baseURL,
      headers,
    });

    // response data
    return res.data;
  };

  const get = async <T = any, R = ResponseWithData<T>, PM = any>(url: string, params?: PM, opts?: AxiosRequestConfig): Promise<R> => {
    opts = {
      ...opts,
      method: 'GET',
      url,
      params,
    };
    return await request<R>(opts);
  };

  const post = async <T = any, R = ResponseWithData<T>, PM = any>(url: string, data?: T, params?: PM, opts?: AxiosRequestConfig): Promise<R> => {
    opts = {
      ...opts,
      method: 'POST',
      url,
      data,
      params,
    };
    return await request<R>(opts);
  };

  const put = async <T = any, R = ResponseWithData<T>, PM = any>(url: string, data?: T, params?: PM, opts?: AxiosRequestConfig): Promise<R> => {
    opts = {
      ...opts,
      method: 'PUT',
      url,
      data,
      params,
    };
    return await request<R>(opts);
  };

  const del = async <T = any, R = ResponseWithData<T>, PM = any>(url: string, data?: T, params?: PM, opts?: AxiosRequestConfig): Promise<R> => {
    opts = {
      ...opts,
      method: 'DELETE',
      url,
      data,
      params,
    };
    return await request<R>(opts);
  };


  return {
    baseUrl,
    request,
    get,
    post,
    put,
    del
  };
};

export default useRequest;
