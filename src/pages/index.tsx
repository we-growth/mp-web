import { connect } from 'umi';
import { useSelector, useDispatch } from 'umi';
import { useState } from 'react';
import { Icon, TabBar, Cell, Button } from 'zarm';
import * as qs from 'query-string';

import 'zarm/dist/zarm.css';
import styles from './index.less';

const TabIcon = Icon.createFromIconfont(
  '//at.alicdn.com/t/font_2879843_r382thm1svq.js',
);

function IndexPage() {
  const [activeKey, setActiveKey] = useState('home');
  const weChatAuthorize = () => {
    const param = {
      appid: 'wx375ff48794a248a2',
      redirect_uri: encodeURI(window.location.href), // 回调地址
      response_type: 'code',
      scope: 'snsapi_base', //  snsapi_base静默 snsapi_userinfo授权
    };
    // 拼接微信授权地址
    const weChatUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize';
    const link = `${weChatUrl}?${qs.stringify(param)}#wechat_redirect`;
    console.log('wechat link', link);
    window.location.href = link;
  };
  const dispatch = useDispatch();
  const count = useSelector((state) => state.testModel.count);

  const handleClick = () => {
    // 使用 dispatch 调用 testModel 中的 change 方法
    dispatch({ type: 'testModel/change' });
  };

  return (
    <div>
      <Button shadow theme="primary" onClick={() => weChatAuthorize()}>
        认证
      </Button>

      <h3>{count}</h3>

      <button onClick={handleClick}>Update Count</button>

      <TabBar activeKey={activeKey} onChange={setActiveKey}>
        <TabBar.Item
          itemKey="home"
          title="首页"
          icon={<TabIcon type="icon-home" />}
        />
        <TabBar.Item
          itemKey="message"
          title="消息"
          icon={<TabIcon type="icon-message" />}
        />
        <TabBar.Item
          itemKey="me"
          title="我的"
          icon={<TabIcon type="icon-user" />}
          badge={{ shape: 'dot' }}
        />
      </TabBar>
    </div>
  );
}

// // 这里的 testModel 是对应 model 的 namespace
// function mapStateToProps({ testModel }) {
//   return { ...testModel };
// }

// export default connect(mapStateToProps)(IndexPage);

export default IndexPage;
