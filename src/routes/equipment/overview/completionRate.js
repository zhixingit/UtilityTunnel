import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { color } from '../../../utils';

var labelTop = {
  normal : {
    label : {
      show : true,
      position : 'center',
      // formatter : '{b}',
      textStyle: {
        fontSize: 16,
        baseline : 'center'
      }
    },
    labelLine : {
      show : false
    }
  }
};
var labelFromatter = {
  normal : {
    color:function (params){
      if (params.name == '安防'){
        return color.blue
      }else if(params.name == '通风'){
        return color.yellow
      }else if(params.name == '供电'){
        return color.green
      }else if(params.name == '照明'){
        return color.red
      }else if(params.name == '排水'){
        return color.peach
      }else if(params.name == '消防'){
        return color.yellow2
      }else{
        return color.white
      }
    },
    label : {
      formatter : function (params){
        return params.value + '%'
      },
      textStyle: {
        baseline : 'top'
      }
    }
  },
}
var labelBottom = {
  normal : {
    color: color.gray,
    label : {
      show : false,
      position : 'inner'
    },
    labelLine : {
      show : false
    }
  },
  emphasis: {
    color: 'rgba(0,0,0,0)'
  }
};
var radius = ['25%', '32%'];
const option = {
  legend: {
    x : 'center',
    itemGap:15,
    bottom:'12%',
    textStyle:{
      color:'#666'
    },
    data:[
      '安防','通风','供电','照明','排水','消防'  ]
  },
  title : {
    text: '保养计划完成率',
    textStyle:{
      color:'#666',
      fontFamily:'Microsoft YaHei',
      fontWeight:'normal',
      fontSize:16
    },
    x:'left',
    padding:[20,0,0,20]
  },
  series : [
    {
      type : 'pie',
      center : ['10%', '50%'],
      radius : radius,
      x: '0%', // for funnel
      itemStyle : labelFromatter,
      data : [
        {name:'other', value:82, itemStyle : labelBottom},
        {name:'安防', value:18,itemStyle : labelTop}
      ]
    },
    {
      type : 'pie',
      center : ['26%', '50%'],
      radius : radius,
      x:'20%', // for funnel
      itemStyle : labelFromatter,
      data : [
        {name:'other', value:56, itemStyle : labelBottom},
        {name:'通风', value:44,itemStyle : labelTop}
      ]
    },
    {
      type : 'pie',
      center : ['42%', '50%'],
      radius : radius,
      x:'40%', // for funnel
      itemStyle : labelFromatter,
      data : [
        {name:'other', value:65, itemStyle : labelBottom},
        {name:'供电', value:35,itemStyle : labelTop}
      ]
    },
    {
      type : 'pie',
      center : ['58%', '50%'],
      radius : radius,
      x:'60%', // for funnel
      itemStyle : labelFromatter,
      data : [
        {name:'other', value:66, itemStyle : labelBottom},
        {name:'照明', value:34,itemStyle : labelTop}
      ]
    },
    {
      type : 'pie',
      center : ['74%', '50%'],
      radius : radius,
      x:'80%', // for funnel
      itemStyle : labelFromatter,
      data : [
        {name:'other', value:83, itemStyle : labelBottom},
        {name:'排水', value:17,itemStyle : labelTop}
      ]
    },
    {
      type : 'pie',
      center : ['90%', '50%'],
      radius : radius,
      y: '55%',   // for funnel
      x: '0%',    // for funnel
      itemStyle : labelFromatter,
      data : [
        {name:'other', value:40, itemStyle : labelBottom},
        {name:'消防', value:60,itemStyle : labelTop}
      ]
    },
  ]
};

const CompletionRate = () => (
  <ReactEcharts
    option={option}
    style={{height: '200px', width: '100%'}}
    className={'react_for_echarts'}
  />
);

export default CompletionRate;
