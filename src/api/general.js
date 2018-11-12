import fetch from 'common/js/fetch';

// 加载七牛token
export function getQiniuToken() {
  return fetch(630091, {
    companyCode: 'CD-CBH000020'
  });
}
