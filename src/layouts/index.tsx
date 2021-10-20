import React from 'react';
import styles from './index.less';

function getQueryString(name: String) {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  let r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return decodeURIComponent(r[2]);
  }
  return null;
}

export default function (props: { children: any }) {
  console.log('wechat ' + getQueryString('code'));

  return (
    <>
      <h5>I am layouts</h5>
      {props.children}
    </>
  );
}
