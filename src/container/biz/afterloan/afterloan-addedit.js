import React from 'react';
import { Form } from 'antd';
import { getQueryString } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class AfterloanAddEdit extends DetailUtil {
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
      field: 'qdf',
      hidden: true
    }, {
      field: 'jx',
      hidden: true
    }, {
      field: 'qtlr',
      hidden: true
    }, {
      field: 'ywfxbzj',
      hidden: true
    }, {
      field: 'qdfffrq',
      type: 'date',
      hidden: true
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
      title: '发保合回收日期',
      field: 'fbhhsrq',
      type: 'date'
    }, {
      title: '抵押日期',
      field: 'dyrq',
      type: 'date'
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

export default AfterloanAddEdit;
