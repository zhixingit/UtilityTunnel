import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { color } from '../../../../../utils';

const option = {
  title : {
    text: '设备报警',
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
  yAxis : [
    {
      type : 'category',
      data : ['A区', 'B区', 'C区', 'D区', 'E区', 'F区'],
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
  xAxis : [
    {
      show:true,
      type : 'value',
      axisLine:{
        show:true,
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
      color:'#000'
    },
    right: 24,
    top: 10,
    itemGap:20,
    itemWidth:12.5,
    data: ['一级告警','二级告警','三级告警']
  },
  series : [
    {
      name:'一级告警',
      type:'bar',
      stack: '总量',
      barWidth: '60%',
      label: {
        normal: {
          show: true,
          position: 'insideRight'
        }
      },
      itemStyle:{
        normal:{
          color:color.blue
        }
      },
      data:[10, 12, 7, 9, 3,6]
    },
    {
      name:'二级告警',
      type:'bar',
      stack: '总量',
      barWidth: '60%',
      label: {
        normal: {
          show: true,
          position: 'insideRight'
        }
      },
      itemStyle:{
        normal:{
          color:color.yellow
        }
      },
      data:[6, 14, 7, 3, 5,11]
    },
    {
      name:'三级告警',
      type:'bar',
      stack: '总量',
      barWidth: '60%',
      label: {
        normal: {
          show: true,
          position: 'insideRight'
        }
      },
      itemStyle:{
        normal:{
          color:color.red
        }
      },
      barGap:0,
      data:[8, 7, 5, 12, 6, 8]
    }
  ]
};

const Alarm = () => (
    <ReactEcharts
        option={option}
        style={{height: '300px', width: '100%'}}
        className={'react_for_echarts'}
    />
);

export default Alarm;
