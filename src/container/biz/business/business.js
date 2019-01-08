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
} from '@redux/biz/business';
import { listWrapper } from 'common/js/build-list';

@listWrapper(
  state => ({
    ...state.bizBusiness,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class Business extends React.Component {
  render() {
    const fields = [{
      title: '区域负责人',
      rTitle: <div>区域<br/>负责人</div>,
      field: 'qyfzrmc',
      search: true
    }, {
      title: '汽车种类',
      rTitle: <div>汽车<br/>种类</div>,
      field: 'qczl',
      type: 'select',
      key: 'car_type',
      search: true
    }, {
      title: '客户姓名',
      rTitle: <div>客户<br/>姓名</div>,
      field: 'khmc',
      search: true
    }, {
      title: '贷款金额(元)',
      rTitle: <div>贷款<br/>金额(元)</div>,
      field: 'dkje',
      amount: true
    }, {
      title: '综合利率(%)',
      rTitle: <div>综合<br/>利率(%)</div>,
      field: 'zhll',
      render: (v) => v ? (v * 100).toFixed(2) : ''
    }, {
      title: '打款日期',
      rTitle: <div>打款<br/>日期</div>,
      field: 'dkrq',
      type: 'date',
      rangedate: ['dkrqStart', 'dkrqEnd'],
      search: true
    }, {
      title: '发保合回收日期',
      rTitle: <div>发保合<br/>回收日期</div>,
      field: 'fbhhsrq',
      type: 'date'
    }, {
      title: '发保合日差',
      rTitle: <div>发保合<br/>日差</div>,
      field: 'fbhrc'
    }, {
      title: '打件日期',
      rTitle: <div>打件<br/>日期</div>,
      field: 'djrq',
      type: 'date',
      rangedate: ['djrqStart', 'djrqEnd'],
      search: true
    }, {
      title: '打件日差',
      rTitle: <div>打件<br/>日差</div>,
      field: 'djrc'
    }, {
      title: '温州垫资日期',
      rTitle: <div>温州<br/>垫资日期</div>,
      field: 'wzdzrq',
      type: 'date'
    }, {
      title: '垫资利息(元)',
      rTitle: <div>垫资<br/>利息(元)</div>,
      field: 'dzlx',
      amount: true
    }, {
      title: '银行放款日期',
      rTitle: <div>银行<br/>放款日期</div>,
      field: 'yhfkrq',
      type: 'date',
      search: true,
      rangedate: ['yhfkrqStart', 'yhfkrqEnd']
    }, {
      title: '公司回款日期',
      rTitle: <div>公司<br/>回款日期</div>,
      field: 'gshkrq',
      type: 'date'
    }, {
      title: '抵押日期',
      rTitle: <div>抵押<br/>日期</div>,
      field: 'dyrq',
      type: 'date'
    }, {
      title: '抵押日差',
      rTitle: <div>抵押<br/>日差</div>,
      field: 'dyrc'
    }, {
      title: '应收返点金额(元)',
      rTitle: <div>应收<br/>返点金额(元)</div>,
      field: 'ysfdje',
      amount: true
    }, {
      title: '毛利润(元)',
      field: 'mlr',
      amount: true
    }, {
      title: '是否归档',
      field: 'status',
      type: 'select',
      data: [{
        key: '0',
        value: '未归档'
      }, {
        key: '1',
        value: '已归档'
      }],
      keyName: 'key',
      valueName: 'value',
      search: true
    }];
    return this.props.buildList({
      fields,
      pageCode: 301235,
      footer: [{
        title: '本页应收返点金额合计(元)',
        field: 'ysfdje',
        type: 'amount'
      }, {
        title: '本页贷款金额合计(元)',
        field: 'dkje',
        type: 'amount'
      }, {
        title: '本页毛利润合计(元)',
        field: 'mlr',
        type: 'amount'
      }]
    });
  }
}

export default Business;
