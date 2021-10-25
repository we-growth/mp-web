// @ts-ignore
/* eslint-disable */

import { request } from 'umi';

// 用微信的code换token
export default async function getToken(
  wxcode: {
    code?: string;
  },
  options?: { [key: string]: any },
) {
  console.log('fetch token', wxcode);
  return request<API.Token>('http://127.0.0.1:8000/as/login/mp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: wxcode,
    ...(options || {}),
  });
}
