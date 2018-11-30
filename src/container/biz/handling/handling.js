import React from 'react';
import {
  setTableData,
  setPagination,
  setBtnList,
  setSearchParam,
  clearSearchParam,
  doFetching,
  cancelFetching,
  setSearchData
} from '@redux/biz/handling';
import { listWrapper } from 'common/js/build-list';

@listWrapper(
  state => ({
    ...state.bizHandling,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class Handling extends React.Component {
  render() {
    const fields = [{
      title: '区域负责人名称',
      field: 'qyfzrmc',
      search: true
    }, {
      title: '汽车种类',
      field: 'qczl',
      type: 'select',
      key: 'car_type',
      search: true
    }, {
      title: '客户姓名',
      field: 'khmc'
    }, {
      title: '贷款金额(元)',
      field: 'dkje',
      amount: true
    }, {
      title: '综合利率(%)',
      field: 'zhll',
      render: (v) => v ? (v * 100).toFixed(2) : ''
    }, {
      title: '打款日期',
      field: 'dkrq',
      type: 'date'
    }, {
      title: '银行放款日期',
      field: 'yhfkrq',
      type: 'date',
      rangedate: ['yhfkrqStart', 'yhfkrqEnd'],
      search: true
    }, {
      title: '垫资利息(元)',
      field: 'dzlx',
      amount: true
    }, {
      title: '毛利润(元)',
      field: 'mlr',
      amount: true
    }, {
      title: '应收返点金额(元)',
      field: 'ysfdje',
      amount: true
    }, {
      title: '打件日期',
      field: 'djrq',
      type: 'date',
      rangedate: ['djrqStart', 'djrqEnd'],
      search: true
    }, {
      title: '打件日差',
      field: 'djrc'
    }, {
      title: '温州垫资日期',
      field: 'wzdzrq',
      type: 'date'
    }, {
      title: '发保合回收日期',
      field: 'fbhhsrq',
      type: 'date'
    }, {
      title: '发保合日差',
      field: 'fbhrc'
    }, {
      title: '抵押日期',
      field: 'dyrq',
      type: 'date'
    }, {
      title: '抵押日差',
      field: 'dyrc'
    }];
    return this.props.buildList({
      fields,
      pageCode: 301235,
      searchParams: { status: '0' },
      footer: [{
        title: '本页应收返点金额合计(元)',
        field: 'ysfdje',
        type: 'amount'
      }, {
        title: '本页贷款金额合计(元)',
        field: 'dkje',
        type: 'amount'
      }, {
        title: 'v毛利润合计(元)',
        field: 'mlr',
        type: 'amount'
      }]
    });
  }
}

export default Handling;
