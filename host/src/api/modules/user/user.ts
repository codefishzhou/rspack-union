import httpClient from '../../request';

export const register = async (payload: any) => {
    try {
      const res = await httpClient.post('/user/create', payload);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  }

export const login = async (payload: any) => {
  try {
    const res = await httpClient.post('/user/login', payload);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}
