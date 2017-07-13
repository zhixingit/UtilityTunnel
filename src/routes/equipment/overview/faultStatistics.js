import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { color } from '../../../utils';

const option = {
  title : {
    text: '设备故障统计',
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
    top: '25%',
    bottom: '8%',
    containLabel: true
  },
  xAxis : [
    {
      type : 'category',
      data : [ '安防','通风','供电','照明','排水','消防'],
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
    data: ['正常','异常']
  },
  series : [
    {
      name:'正常',
      type:'bar',
      barWidth: '30%',
      barGap:0,
      stack: '总量',
      itemStyle:{
        normal:{
          color:color.blue
        }
      },
      data:[23, 6, 15, 18,12,45]
    },
    {
      name:'异常',
      type:'bar',
      barWidth: '30%',
      barGap:0,
      stack: '总量',
      itemStyle:{
        normal:{
          color:color.yellow
        }
      },
      data:[15, 9, 11, 15,34,1]
    }
  ]
};



const FaultStatistics = () => (
  <ReactEcharts
    option={option}
    style={{height: '250px', width: '100%'}}
    className={'react_for_echarts'}
  />
);

export default FaultStatistics;
