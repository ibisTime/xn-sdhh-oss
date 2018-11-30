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
      title: '打件日差',
      field: 'djrc',
      readonly: true,
      hidden: !this.view
    }, {
      title: '调额日期',
      field: 'terq',
      type: 'date'
    }, {
      title: '放款日差',
      field: 'fkrc',
      readonly: true,
      hidden: !this.view
    }, {
      title: '发保合回收日期',
      field: 'fbhhsrq',
      type: 'date'
    }, {
      title: '发保合日差',
      field: 'fbhrc',
      readonly: true,
      hidden: !this.view
    }, {
      title: '抵押日期',
      field: 'dyrq',
      type: 'date'
    }, {
      title: '抵押日差',
      field: 'dyrc',
      readonly: true,
      hidden: !this.view
    }, {
      title: '返点金额(元)',
      field: 'fdje',
      amount: true,
      readonly: true,
      hidden: !this.view
    }, {
      title: '评估费(元)',
      field: 'pgf',
      amount: true,
      readonly: true,
      hidden: !this.view
    }, {
      title: '垫资利息(元)',
      field: 'dzlx',
      amount: true,
      readonly: true,
      hidden: !this.view
    }, {
      title: '应收返点金额(元)',
      field: 'ysfdje',
      amount: true,
      readonly: true,
      hidden: !this.view
    }, {
      title: '保证金(元)',
      field: 'bzjdke',
      amount: true,
      readonly: true,
      hidden: !this.view
    }, {
      title: '毛利润(元)',
      field: 'mlr',
      amount: true,
      readonly: true,
      hidden: !this.view
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
