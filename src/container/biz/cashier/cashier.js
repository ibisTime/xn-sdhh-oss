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
      title: '区域负责人名称',
      field: 'qyfzrmc'
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
      title: '温州垫资日期',
      field: 'wzdzrq',
      type: 'date',
      noVisible: true
    }];
    return this.props.buildList({
      fields,
      pageCode: 301235,
      searchParams: { status: '0' }
    });
  }
}

export default Cashier;
