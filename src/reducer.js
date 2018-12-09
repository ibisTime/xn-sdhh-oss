import { combineReducers } from 'redux';

import { user } from './redux/user';
import { menu } from './redux/menu';
import { securityRole } from './redux/security/role';
import { securityMenu } from './redux/security/menu';
import { securitySysParam } from './redux/security/sysParam';
import { securityUser } from './redux/security/user';
import { securityDataDict } from './redux/security/dataDict';
import { bizStart } from './redux/biz/start';
import { bizCashier } from './redux/biz/cashier';
import { bizAccounting } from './redux/biz/accounting';
import { bizAfterloan } from './redux/biz/afterloan';
import { bizBusiness } from './redux/biz/business';
import { bizHandling } from './redux/biz/handling';
import { bizFinished } from './redux/biz/finished';
import { bizParmas } from './redux/biz/params';

export default combineReducers({
  user,
  menu,
  securityRole,
  securityMenu,
  securityUser,
  securitySysParam,
  securityDataDict,
  bizStart,
  bizCashier,
  bizAccounting,
  bizAfterloan,
  bizBusiness,
  bizHandling,
  bizFinished,
  bizParmas
});
