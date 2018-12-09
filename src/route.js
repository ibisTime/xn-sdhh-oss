import asyncComponent from './component/async-component/async-component';

const ROUTES = [
  {
    path: '/system/role',
    component: asyncComponent(() => import('container/security/role/role'))
  },
  {
    path: '/system/role/addedit',
    component: asyncComponent(() => import('container/security/role-addedit/role-addedit'))
  },
  {
    path: '/system/role/menu',
    component: asyncComponent(() => import('container/security/role-menu/role-menu'))
  },
  {
    path: '/system/menu',
    component: asyncComponent(() => import('container/security/menu/menu'))
  },
  {
    path: '/system/menu/addedit',
    component: asyncComponent(() => import('container/security/menu-addedit/menu-addedit'))
  },
  {
    path: '/system/user',
    component: asyncComponent(() => import('container/security/user/user'))
  },
  {
    path: '/system/user/role',
    component: asyncComponent(() => import('container/security/user/assign'))
  },
  {
    path: '/system/user/pwd_reset',
    component: asyncComponent(() => import('container/security/user/pwdReset'))
  },
  //  系统参数
  {
    path: '/system/sysPara',
    component: asyncComponent(() => import('container/security/sysParam/sysParam'))
  },
  //  系统参数修改
  {
    path: '/system/sysPara/addedit',
    component: asyncComponent(() => import('container/security/sysParam-addedit/sysParam-addedit'))
  },
  {
    path: '/system/dataDict',
    component: asyncComponent(() => import('container/security/dataDict/dataDict'))
  },
  {
    path: '/system/dataDict/addedit',
    component: asyncComponent(() => import('container/security/dataDict-addedit/dataDict-addedit'))
  },
  {
    path: '/system/user/addedit',
    component: asyncComponent(() => import('container/security/user-addedit/user-addedit'))
  },
  // 业务管理-业务录入-开录
  {
    path: '/biz/start',
    component: asyncComponent(() => import('container/biz/start/start'))
  },
  // 业务管理-业务录入-开录-详情
  {
    path: '/biz/start/addedit',
    component: asyncComponent(() => import('container/biz/start/start-addedit'))
  },
  // 业务管理-业务录入-出纳
  {
    path: '/biz/cashier',
    component: asyncComponent(() => import('container/biz/cashier/cashier'))
  },
  // 业务管理-业务录入-出纳-详情
  {
    path: '/biz/cashier/addedit',
    component: asyncComponent(() => import('container/biz/cashier/cashier-addedit'))
  },
  // 业务管理-业务录入-会计
  {
    path: '/biz/accounting',
    component: asyncComponent(() => import('container/biz/accounting/accounting'))
  },
  // 业务管理-业务录入-会计-详情
  {
    path: '/biz/accounting/addedit',
    component: asyncComponent(() => import('container/biz/accounting/accounting-addedit'))
  },
  // 业务管理-业务录入-贷后
  {
    path: '/biz/afterloan',
    component: asyncComponent(() => import('container/biz/afterloan/afterloan'))
  },
  // 业务管理-业务录入-贷后-详情
  {
    path: '/biz/afterloan/addedit',
    component: asyncComponent(() => import('container/biz/afterloan/afterloan-addedit'))
  },
  // 业务管理-业务查询-全部业务
  {
    path: '/biz/business',
    component: asyncComponent(() => import('container/biz/business/business'))
  },
  // 业务管理-业务查询-全部业务-详情
  {
    path: '/biz/business/addedit',
    component: asyncComponent(() => import('container/biz/finished/finished-addedit'))
  },
  // 业务管理-业务查询-未归档查询
  {
    path: '/biz/handling',
    component: asyncComponent(() => import('container/biz/handling/handling'))
  },
  // 业务管理-业务查询-未归档查询-详情
  {
    path: '/biz/handling/addedit',
    component: asyncComponent(() => import('container/biz/handling/handling-addedit'))
  },
  // 业务管理-业务查询-归档查询
  {
    path: '/biz/finished',
    component: asyncComponent(() => import('container/biz/finished/finished'))
  },
  // 业务管理-业务查询-归档查询-详情
  {
    path: '/biz/finished/addedit',
    component: asyncComponent(() => import('container/biz/finished/finished-addedit'))
  },
  // 业务管理-参数设置-参数设置
  {
    path: '/biz/params',
    component: asyncComponent(() => import('container/biz/params/params'))
  },
  // 业务管理-参数设置-参数设置-详情
  {
    path: '/biz/params/addedit',
    component: asyncComponent(() => import('container/security/sysParam-addedit/sysParam-addedit'))
  }
];

export default ROUTES;
