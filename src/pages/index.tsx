import { useState } from 'react';
import { Icon, TabBar } from 'zarm';

import 'zarm/dist/zarm.css';

const TabIcon = Icon.createFromIconfont(
  '//at.alicdn.com/t/font_2879843_r382thm1svq.js',
);

function IndexPage() {
  const [activeKey, setActiveKey] = useState('home');

  return (
    <div>
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

export default IndexPage;
