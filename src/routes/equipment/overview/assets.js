import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { color } from '../../../utils';

const option = {
    title : {
      text: '近两年资金预算(单位：万元)',
      textStyle:{
        color:'#666',
        fontFamily:'Microsoft YaHei',
        fontWeight:'normal',
        fontSize:16
      },
      x:'left',
      padding:[20,0,0,20]
    },
    tooltip : {
      trigger: 'axis',
      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      show:false,
      left: '5%',
      right: '5%',
      top: '20%',
      bottom: '5%',
      containLabel: true
    },
  xAxis : [
    {
      type : 'category',
      data : ['2014', '2015', '2016', '2017'],
      axisTick: {
        alignWithLabel: true
      },
      axisLine:{
        show:false
      },
      axisLabel:{
        textStyle:{
          color:'#666'
        }
      }
    }
  ],
  yAxis : [
    {
      show:true,
      type : 'value',
      axisLine:{
        show:false,
        noormal:{
          color:'#666'
        }
      },
      axisLabel:{
        textStyle:{
          color:'#666'
        }
      }
    }
  ],
  legend: {
    show:true,
    textStyle:{
      color:'#666'
    },
    right: 24,
    top: 10,
    itemGap:20,
    itemWidth:12.5,
    data: ['预算','实际']
  },
  series : [
    {
      name:'预算',
      type:'bar',
      barWidth: '15%',
      barGap:0,
      itemStyle:{
        normal:{
          color:color.blue
        }
      },
      data:[23, 6, 15, 18]
    },
    {
      name:'实际',
      type:'bar',
      barWidth: '15%',
      barGap:0,
      itemStyle:{
        normal:{
          color:color.yellow
        }
      },
      data:[15, 9, 11, 13]
    }
  ]
};



const Assets = () => (
  <ReactEcharts
    option={option}
    style={{height: '300px', width: '70%'}}
    className={'react_for_echarts'}
  />
);

export default Assets;
