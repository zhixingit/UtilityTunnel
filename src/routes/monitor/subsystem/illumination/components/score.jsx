/**
 * Created by hao.cheng on 2017/4/21.
 */
import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { color } from '../../../../../utils';

const option = {
  title : {
    text: '本月消防系统得分',
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
  series : [
    {
      name:'本月得分',
      type:'pie',
      clockWise:false,
      radius : ['52%','60%'],
      center : ['50%','55%'],
      itemStyle : {
        normal: {
          color:color.blue,
          label: {show:false},
          labelLine: {show:false},
        }
      },
      hoverAnimation: false,

      data:[
        {
          value:93,
          name:'本月得分'
        },
        {
          value:7,
          name:'invisible',
          itemStyle : {
            normal : {
              color: '#f7f7f7',
              label: {show:false},
              labelLine: {show:false}
            },
            emphasis : {
              color: '#f7f7f7'
            }
          }
        }

      ]
    },
    {
      name: '白',
      type: 'pie',
      clockWise: true,
      hoverAnimation: false,
      radius : ['0%','52%'],
      center : ['50%','55%'],
      itemStyle : {
        normal: {
          color:'rgba(0,0,0,0)',
        }
      },
      label: {
        normal: {
          position: 'center'
        }
      },
      data: [{
        value: 1,
        label: {
          normal: {
            formatter: '93',
            textStyle: {
              color: color.blue,
              fontSize: 75,
              // fontWeight:'bold'
            }
          }
        }
      },
      //   {
      //   tooltip: {
      //     show: false
      //   },
      //   label: {
      //     normal: {
      //       formatter: '本月得分',
      //       textStyle: {
      //         color: color.darkBlue,
      //         fontSize: 14
      //       }
      //     }
      //   }
      // }
      ]
    },
  ]
};

const EchartsPie = () => (
    <ReactEcharts
        option={option}
        style={{height: '300px', width: '100%'}}
        className={'react_for_echarts'}
    />
);

export default EchartsPie;
