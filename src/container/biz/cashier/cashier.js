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
} from '@redux/biz/cashier';
import { listWrapper } from 'common/js/build-list';

@listWrapper(
  state => ({
    ...state.bizCashier,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class Cashier extends React.Component {
  render() {
    const fields = [{
      title: '区域负责人',
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
      type: 'date',
      search: true,
      rangedate: ['dkrqStart', 'dkrqEnd']
    }, {
      title: '渠道费(元)',
      field: 'qdf',
      amount: true
    }, {
      title: '绩效(元)',
      field: 'jx',
      amount: true
    }, {
      title: '其他利润(元)',
      field: 'qtlr',
      amount: true
    }, {
      title: '保证金(元)',
      field: 'bzjdke',
      amount: true
    }, {
      title: '渠道费发放日期',
      field: 'qdfffrq',
      type: 'date'
    }, {
      title: '温州垫资日期',
      field: 'wzdzrq',
      type: 'date',
      noVisible: true
    }];
    return this.props.buildList({
      fields,
      pageCode: 301235,
      searchParams: { status: '0' },
      footer: [{
        title: '本页贷款金额合计(元)',
        field: 'dkje',
        type: 'amount'
      }, {
        title: '本页渠道费合计(元)',
        field: 'qdf',
        type: 'amount'
      }, {
        title: '本页绩效合计(元)',
        field: 'jx',
        type: 'amount'
      }, {
        title: '本页其他利润合计(元)',
        field: 'qtlr',
        type: 'amount'
      }, {
        title: '本页保证金合计(元)',
        field: 'bzjdke',
        type: 'amount'
      }]
    });
  }
}

export default Cashier;
