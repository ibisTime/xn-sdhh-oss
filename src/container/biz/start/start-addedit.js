import React from 'react';
import { Form } from 'antd';
import { getQueryString, getUserName } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class StartAddEdit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  render() {
    const fields = [{
      title: '区域负责人',
      field: 'qyfzrmc'
    }, {
      title: '汽车种类',
      field: 'qczl',
      type: 'select',
      key: 'car_type'
    }, {
      title: '客户姓名',
      field: 'khmc'
    }, {
      title: '贷款金额(元)',
      field: 'dkje',
      value: 0,
      amount: true
    }, {
      title: '综合利率(%)',
      field: 'zhll',
      formatter: (v) => v ? (v * 100).toFixed(2) : ''
    }, {
      title: '打款日期',
      field: 'dkrq',
      type: 'date'
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
      field: 'bzjdke',
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
      beforeSubmit: (params) => {
        params.updater = getUserName();
        params.zhll /= 100;
        return params;
      },
      detailCode: 301237,
      addCode: 301220,
      editCode: 301222
    });
  }
}

export default StartAddEdit;
