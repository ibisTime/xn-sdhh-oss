import React from 'react';
import { Form } from 'antd';
import { getQueryString } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class CashierAddEdit extends DetailUtil {
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
      title: '区域负责人',
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
      title: '渠道费(元)',
      field: 'qdf',
      value: 0,
      amount: true
    }, {
      title: '绩效(元)',
      field: 'jx',
      value: 0,
      amount: true
    }, {
      title: '其他利润(元)',
      field: 'qtlr',
      value: 0,
      amount: true
    }, {
      title: '业务风险保证金(元)',
      field: 'ywfxbzj',
      amount: true
    }, {
      title: '渠道费发放日期',
      field: 'qdfffrq',
      type: 'date'
    }, {
      field: 'yhfkrq',
      type: 'date',
      hidden: true
    }, {
      field: 'gshkrq',
      type: 'date',
      hidden: true
    }, {
      field: 'wzdzrq',
      type: 'date',
      hidden: true
    }, {
      field: 'djrq',
      type: 'date',
      hidden: true
    }, {
      field: 'terq',
      type: 'date',
      hidden: true
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

export default CashierAddEdit;
