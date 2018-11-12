import React from 'react';
import { Form } from 'antd';
import { getQueryString, showSucMsg } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class HandlingAddEdit extends DetailUtil {
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
      field: 'qyfzrmc',
      required: true
    }, {
      title: '汽车种类',
      field: 'qczl',
      type: 'select',
      key: 'car_type',
      required: true
    }, {
      title: '客户姓名',
      field: 'khmc',
      required: true
    }, {
      title: '贷款金额(元)',
      field: 'dkje',
      amount: true,
      required: true
    }, {
      title: '综合利率(%)',
      field: 'zhll',
      required: true,
      formatter: (v) => v ? (v * 100).toFixed(2) : ''
    }, {
      title: '打款日期',
      field: 'dkrq',
      type: 'date',
      required: true
    }, {
      title: '渠道费(元)',
      field: 'qdf',
      amount: true,
      required: true
    }, {
      title: '绩效(元)',
      field: 'jx',
      amount: true,
      required: true
    }, {
      title: '其他利润(元)',
      field: 'qtlr',
      amount: true,
      required: true
    }, {
      title: '银行放款日期',
      field: 'yhfkrq',
      type: 'date',
      required: true
    }, {
      title: '公司回款日期',
      field: 'gshkrq',
      type: 'date',
      required: true
    }, {
      title: '温州垫资日期',
      field: 'wzdzrq',
      type: 'date',
      required: true
    }, {
      title: '打件日期',
      field: 'djrq',
      type: 'date',
      required: true
    }, {
      title: '调额日期',
      field: 'terq',
      type: 'date',
      required: true
    }, {
      title: '发保合回收日期',
      field: 'fbhhsrq',
      type: 'date',
      required: true
    }, {
      title: '抵押日期',
      field: 'dyrq',
      type: 'date',
      required: true
    }, {
      title: '备注',
      field: 'remark',
      type: 'textarea',
      normalArea: true
    }];
    return this.buildDetail({
      fields,
      code: this.code,
      view: this.view,
      detailCode: 301237,
      editCode: 301223,
      beforeSubmit: (params) => {
        params.zhll /= 100;
        return params;
      }
    });
  }
}

export default HandlingAddEdit;
