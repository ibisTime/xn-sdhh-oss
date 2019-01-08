import React from 'react';
import { Form } from 'antd';
import { getQueryString } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class HandlingAddEdit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
  }
  render() {
    const fields = [{
      title: '业务编号',
      field: 'code'
    }, {
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
      title: '业务风险保证金(元)',
      field: 'ywfxbzj',
      amount: true
    }, {
      title: '渠道费发放日期',
      field: 'qdfffrq',
      type: 'date'
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
      field: 'djrc'
    }, {
      title: '调额日期',
      field: 'terq',
      type: 'date'
    }, {
      title: '放款日差',
      field: 'fkrc'
    }, {
      title: '发保合回收日期',
      field: 'fbhhsrq',
      type: 'date'
    }, {
      title: '发保合日差',
      field: 'fbhrc'
    }, {
      title: '抵押日期',
      field: 'dyrq',
      type: 'date'
    }, {
      title: '抵押日差',
      field: 'dyrc'
    }, {
      title: '返点金额(元)',
      field: 'fdje',
      amount: true
    }, {
      title: '评估费(元)',
      field: 'pgf',
      amount: true
    }, {
      title: '垫资利息(元)',
      field: 'dzlx',
      amount: true
    }, {
      title: '应收返点金额(元)',
      field: 'ysfdje',
      amount: true
    }, {
      title: '毛利润(元)',
      field: 'mlr',
      amount: true
    }, {
      title: '备注',
      field: 'remark',
      type: 'textarea',
      normalArea: true
    }];
    return this.buildDetail({
      fields,
      code: this.code,
      view: true,
      detailCode: 301237,
      editCode: 301222,
      beforeSubmit: (params) => {
        params.status = '1';
        return params;
      }
    });
  }
}

export default HandlingAddEdit;
