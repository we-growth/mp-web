import styles from './index.less';

import { useDispatch } from 'umi';

function getQueryString(name: String) {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  let r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return decodeURIComponent(r[2]);
  }
  return null;
}

export default function (props: { children: any }) {
  //  获取登录状态
  const token = localStorage.getItem('Token');

  if (token == null) {
    //获取url中微信认证·
    const wxcode = getQueryString('code');
    if (wxcode != null) {
      console.log('wechat ' + wxcode);
      const dispatch = useDispatch();
      dispatch({
        type: 'testModel/getToken',
        payload: { code: wxcode },
      });
    }
  }

  return (
    <>
      <h5>I am layouts</h5>
      {props.children}
    </>
  );
}
