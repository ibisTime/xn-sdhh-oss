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
} from '@redux/biz/start';
import { listWrapper } from 'common/js/build-list';

@listWrapper(
  state => ({
    ...state.bizStart,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class Start extends React.Component {
  render() {
    const fields = [{
      title: '业务编号',
      field: 'code'
    }, {
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
    }];
    return this.props.buildList({
      fields,
      pageCode: 301235,
      searchParams: { status: '0' }
    });
  }
}

export default Start;