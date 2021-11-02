import * as qs from 'querystring';
import login from '@/services/login';
import { useState, useEffect } from 'react';
import { Redirect } from 'umi';
import 'zarm/dist/zarm.css';

function getQueryString(name: string): any {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  let r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return decodeURIComponent(r[2]);
  }
  return null;
}

function LogInPage() {
  const wxcode = getQueryString('code');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (wxcode != null) {
        const { access_token } = await login({ code: wxcode });
        console.log('fetch token success', access_token);
        localStorage.setItem('Token', access_token);
        setLoading(false);
      }
    })();
  }, []);

  if (wxcode == null) {
    //获取url中微信认证·
    console.log('redirect to wechat login.');
    const param = {
      appid: 'wx375ff48794a248a2',
      redirect_uri: encodeURI(window.location.href), // 回调地址
      response_type: 'code',
      scope: 'snsapi_base', //  snsapi_base静默 snsapi_userinfo授权
    };
    // 拼接微信授权地址
    const weChatUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize';
    const link = `${weChatUrl}?${qs.stringify(param)}#wechat_redirect`;
    window.location.href = link;
  }

  return <>{loading ? <h2>Loading...</h2> : <Redirect to="/" />}</>;
}

export default LogInPage;
