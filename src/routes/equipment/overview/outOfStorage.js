import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { color } from '../../../utils';

const option = {
  title : {
    text: '出入库统计',
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
    left: '3%',
    right: '4%',
    top: '20%',
    bottom: '5%',
    containLabel: true
  },
  legend: {
    show:true,
    textStyle:{
      color:'#666'
    },
    right: 24,
    top: 10,
    itemGap:20,
    itemWidth:12.5,
    data: ['库存','入库','出库']
  },
  calculable : true,
  xAxis : [
    {
      show:true,
      type : 'value',
      axisLine:{
        show:true,
        lineStyle:{
          color:color.darkBlue2,
          width:2
        }
      },
      axisLabel:{
        textStyle:{
          color:'#666'
        }
      },
      splitLine:{
        show:false
      }
    }
  ],
  yAxis : [
    {
      type : 'category',
      data : ['消防','排水','照明','供电','通风','安防'],
      axisTick : {show: false},
      axisLine:{
        show:true,
        lineStyle:{
          color:color.darkBlue2,
          width:2
        }
      },
      axisLabel:{
        textStyle:{
          color:'#666'
        }
      },
      splitLine:{
        show:true
      }
    }
  ],
  series : [
    {
      name:'入库',
      type:'bar',
      stack: '总量',
      barWidth : '15%',
      barGap:'15%',
      itemStyle: {normal: {
        label : {show: true,position: 'right'},
        color:color.blue
      }},
      data:[320, 302, 341, 374, 390, 450]
    },
    {
      name:'出库',
      type:'bar',
      stack: '总量',
      barGap:'15%',
      itemStyle: {normal: {
        label : {show: true, position: 'left'},
        color:color.yellow
      }},
      data:[-120, -132, -101, -134, -190, -230]
    },
    {
      name:'库存',
      type:'bar',
      barGap:'15%',
      itemStyle : { normal: {
        label : {show: true, position: 'right'},
        color:color.green
      }},
      data:[200, 170, 240, 244, 200, 220]
    },
  ]
};

const OutOfStorage = () => (
  <ReactEcharts
    option={option}
    style={{height: '300px', width: '100%'}}
    className={'react_for_echarts'}
  />
);

export default OutOfStorage;
