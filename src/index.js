import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './routes';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

// import rootStore from './stores';

import './index.css';

React.Component.prototype.$moment = moment;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfigProvider locale={zhCN}>
    <Router />
  </ConfigProvider>
);
