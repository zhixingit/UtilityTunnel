/**
 * Created by hao.cheng on 2017/4/21.
 */
import React from 'react';
import ReactEcharts from 'echarts-for-react';
import {color} from '../../../utils'

const option = {
  tooltip: {
    trigger: 'item'
  },
  calculable: true,
  grid: {
    borderWidth: 0,
    // y: 80,
    // y2: 60,
    left: '1%',
    right: '10%',
    top: '10%',
    bottom: '1%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'value',
      show: false
    }
  ],
  yAxis: [
    {
      type: 'category',
      axisTick: {
        show: false
      },
      axisLine:{
        show:false
      },
      axisLabel:{
        textStyle:{
          color:'#666',
          fontWeight:'lighter'
        }
      },
      data: [ '安防', '通风', '供电', '照明', '排水', '消防']
    }
  ],
  series: [
    {
      name: '本月管廊子系统得分',
      type: 'bar',
      barWidth: '50%',
      itemStyle: {
        normal: {
          color: function(params) {
            // build a color map as your need.
            var colorList = [
              '#fbcd40','#54a7fc','#fe7b84','#3addd0','#ffb06a',
              '#4fcbf7'
            ];
            return colorList[params.dataIndex]
          },
          label: {
            show: true,
            position: 'right',
            formatter: '{c}'
          }
        }
      },
      data: [85,70,80,90,65,88],
    }
  ]
};

const ScoreDetail = () => (
    <ReactEcharts
        option={option}
        style={{height: '144px', width: '100%'}}
        className={'react_for_echarts'}
    />
);

export default ScoreDetail;
