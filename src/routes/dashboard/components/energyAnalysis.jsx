/**
 * Created by hao.cheng on 2017/4/21.
 */
import React from 'react';
import ReactEcharts from 'echarts-for-react';

const option = {
  title: {
    show: false,
    text: '廊内能耗分析'
  },
  tooltip : {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    right: '4%',
    y: 'top',
    data:['区域A','区域B','区域C']
  },
  grid: {
    top: '15%',
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis : [
    {
      type : 'category',
      boundaryGap : false,
      axisTick: {
        show: false
      },
      axisLine:{
        show:false
      },
      data : ['04/02','04/03','04/04','04/05','04/06','04/07','04/08','04/09','04/10','04/11','04/12','04/13','04/14','04/15']
    }
  ],
  yAxis : [
    {
      type : 'value',
      axisTick: {
        show: false
      },
      axisLine:{
        show:false
      },
    }
  ],
  series : [
    {
      name:'区域A',
      symbol:'circle',
      symbolSize:6,
      type:'line',
      lineStyle:{
        normal:{
          color:'#ffb06a'
        }
      },
      itemStyle:{
        normal:{
          color:'#ffb06a'
        }
      },
      smooth:'true',
      data:[120, 132, 101, 134, 90, 230, 210, 150, 232, 201, 154, 190, 330, 380 ]
    },
    {
      name:'区域B',
      symbol:'circle',
      symbolSize:6,
      type:'line',
      lineStyle:{
        normal:{
          color:'#3addd0'
        }
      },
      itemStyle:{
        normal:{
          color:'#3addd0'
        }
      },
      smooth:'true',
      data:[220, 182, 191, 234, 290, 330, 310,120, 132, 101, 134, 90, 230, 210]
    },
    {
      name:'区域C',
      symbol:'circle',
      symbolSize:6,
      type:'line',
      lineStyle:{
        normal:{
          color:'#fe7b84'
        }
      },
      itemStyle:{
        normal:{
          color:'#fe7b84'
        }
      },
      smooth:'true',
      data:[150, 232, 201, 154, 190, 330, 380, 220, 182, 191, 234, 290, 330, 310]
    }
  ]
};

const EnergyAnalysis = () => (
    <ReactEcharts
        option={option}
        style={{height: '152px', width: '100%'}}
        className={'react_for_echarts'}
    />
);

export default EnergyAnalysis;
