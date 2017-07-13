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
    bottom:'5%',
    itemGap:10,
    itemWidth:15,
    data:['管廊字典','运维手册','设备手册','应急案例','业内资讯','其它']
  },
  series: [
    {
      name:'文档分布',
      type:'pie',
      radius: ['45%', '60%'],
      center: ['50%', '35%'],
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
        {value:10,
          name:'管廊字典',
          itemStyle:{
            normal:{
              color:'#54cbfc'
            }
          }
        },
        {value:102,
          name:'运维手册',
          itemStyle:{
            normal:{
              color:'#3addd0'
            }
          }
        },
        {value:234,
          name:'设备手册',
          itemStyle:{
            normal:{
              color:'#ffb06a'
            }
          }
        },
        {value:12,
          name:'应急案例',
          itemStyle:{
            normal:{
              color:'#fe7b84'
            }
          }
        },
        {value:48,
          name:'业内资讯',
          itemStyle:{
            normal:{
              color:'#d6fbb5'
            }
          }
        },
        {value:8,
          name:'其它',
          itemStyle:{
            normal:{
              color:'#f797d6'
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
        style={{height: '300px', width: '100%'}}
        className={'react_for_echarts'}
    />
);

export default Inspection;
