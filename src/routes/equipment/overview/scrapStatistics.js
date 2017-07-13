import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { color } from '../../../utils';

const option = {
  title : {
    text: '设备报废统计',
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
    show:false,
    textStyle:{
      color:'#000'
    },
    right: 24,
    top: 10,
    itemGap:20,
    itemWidth:12.5,
    data: ['数量']
  },
  series : [
    {
      name:'数量',
      type:'bar',
      barWidth: '30%',
      barGap:0,
      itemStyle:{
        normal:{
          color:color.blue
        }
      },
      data:[100, 56, 115, 78, 67,19]
    }
  ]
};



const ScrapStatistics = () => (
  <ReactEcharts
    option={option}
    style={{height: '250px', width: '100%'}}
    className={'react_for_echarts'}
  />
);

export default ScrapStatistics;
