/**
 * Created by hao.cheng on 2017/4/21.
 */
import React from 'react';
import ReactEcharts from 'echarts-for-react';

const option = {
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  legend: {
    show:true,
    textStyle:{
      color:'#666'
    },
    orient: 'vertical',
    top: 20,
    right:12,
    itemGap:10,
    itemWidth:15,
    data:['已完成','处理中','已接收','未派发']
  },
  series: [
    {
      name:'日常巡检',
      type:'pie',
      radius: ['60%', '85%'],
      center: ['45%', '45%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: 'center'
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '20',
            fontWeight: 'bold'
          }
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data:[
        {value:335,
          name:'已完成',
          itemStyle:{
            normal:{
              color:'#54cbfc'
            }
          }
        },
        {value:310,
          name:'处理中',
          itemStyle:{
            normal:{
              color:'#3addd0'
            }
          }
        },
        {value:234,
          name:'已接收',
          itemStyle:{
            normal:{
              color:'#ffb06a'
            }
          }
        },
        {value:48,
          name:'未派发',
          itemStyle:{
            normal:{
              color:'#fe7b84'
            }
          }
        }
      ]
    }
  ]
};

const Inspection = () => (
    <ReactEcharts
        option={option}
        style={{height: '152px', width: '100%'}}
        className={'react_for_echarts'}
    />
);

export default Inspection;
