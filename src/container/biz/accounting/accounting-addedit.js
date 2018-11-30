import React from 'react';
import { Form } from 'antd';
import { getQueryString } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class AccountingAddEdit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  render() {
    const fields = [{
      title: '业务编号',
      field: 'code',
      readonly: true
    }, {
      title: '区域负责人名称',
      field: 'qyfzrmc1',
      _keys: ['qyfzrmc'],
      readonly: true
    }, {
      field: 'qyfzrmc',
      hidden: true
    }, {
      title: '汽车种类',
      field: 'qczl1',
      type: 'select',
      key: 'car_type',
      _keys: ['qczl'],
      readonly: true
    }, {
      field: 'qczl',
      hidden: true
    }, {
      title: '客户姓名',
      field: 'khmc1',
      _keys: ['khmc'],
      readonly: true
    }, {
      field: 'khmc',
      hidden: true
    }, {
      title: '贷款金额(元)',
      field: 'dkje1',
      amount: true,
      _keys: ['dkje'],
      readonly: true
    }, {
      field: 'dkje',
      hidden: true
    }, {
      title: '综合利率(%)',
      field: 'zhll1',
      _keys: ['zhll'],
      formatter: (v) => v ? (v * 100).toFixed(2) : '',
      readonly: true
    }, {
      field: 'zhll',
      hidden: true
    }, {
      title: '打款日期',
      field: 'dkrq1',
      type: 'date',
      _keys: ['dkrq'],
      readonly: true
    }, {
      field: 'dkrq',
      type: 'date',
      hidden: true
    }, {
      field: 'qdf',
      hidden: true
    }, {
      field: 'jx',
      hidden: true
    }, {
      field: 'qtlr',
      hidden: true
    }, {
      title: '银行放款日期',
      field: 'yhfkrq',
      type: 'date'
    }, {
      title: '公司回款日期',
      field: 'gshkrq',
      type: 'date'
    }, {
      title: '温州垫资日期',
      field: 'wzdzrq',
      type: 'date'
    }, {
      title: '打件日期',
      field: 'djrq',
      type: 'date'
    }, {
      title: '调额日期',
      field: 'terq',
      type: 'date'
    }, {
      field: 'fbhhsrq',
      type: 'date',
      hidden: true
    }, {
      field: 'dyrq',
      type: 'date',
      hidden: true
    }];
    return this.buildDetail({
      fields,
      code: this.code,
      view: this.view,
      detailCode: 301237,
      editCode: 301222
    });
  }
}

export default AccountingAddEdit;
