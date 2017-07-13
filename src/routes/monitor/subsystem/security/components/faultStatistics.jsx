import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { color } from '../../../../../utils';

const option = {
  baseOption: {
    timeline: {
      // y: 0,
      axisType: 'category',
      // realtime: false,
      // loop: false,
      autoPlay: false,
      currentIndex: 0,
      playInterval: 2000,
      left:'5%',
      right:'5%',
      bottom:'5%',
      symbol:'circle',
      symbolSize:12,
      lineStyle:{
        show:true,
        color:'#e6e6e6',
        width:2
      },
      label:{
        normal:{
          textStyle:{
            color:'#666'
          }
        },
        // formatter : function(s) {
        //     return (new Date(s)).getFullYear();
        // }
      },
      itemStyle:{
        normal:{
          color:'#e6e6e6'
        },
        emphasis:{
          color:color.green
        }
      },
      checkpointStyle:{
        color:color.green,
        borderWidth:10,
        borderColor:'rgba(85,223,212,0.5)',
        symbolSize:16
      },
      controlStyle: {
        showPlayBtn:false,
        itemSize:22,
        itemGap:20,
        //position: 'left',
        normal:{
          //color:color.green,
          borderColor:'#e6e6e6'
        },
        emphasis:{
          borderColor:color.green
        }
      },
      data: [
        'A区','B区','C区',
        'D区','E区', 'F区'
      ],
    },
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
      left: '3%',
      right: '4%',
      top: '20%',
      bottom: '25%',
      containLabel: true
    },
    xAxis : [
      {
        type : 'category',
        data : ['红外入侵探测器', '摄像头', '声光报警器'],
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
        color:'#000'
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
        stack: '总量',
        barWidth: '25%',
        itemStyle:{
          normal:{
            color:color.blue
          }
        },
        data:[23, 6, 15]
      },
      {
        name:'异常',
        type:'bar',
        stack: '总量',
        barWidth: '25%',
        itemStyle:{
          normal:{
            color:color.yellow
          }
        },
        data:[2, 6, 1]
      }
    ]

  },
  options: [{
    series : [
      {
        name:'正常',
        type:'bar',
        stack: '总量',
        barWidth: '25%',
        itemStyle:{
          normal:{
            color:color.blue
          }
        },
        data:[25, 73, 35]
      },
      {
        name:'异常',
        type:'bar',
        stack: '总量',
        barWidth: '25%',
        itemStyle:{
          normal:{
            color:color.yellow
          }
        },
        data:[2, 5, 3]
      }
    ]
    },
    {
      series : [
        {
          name:'正常',
          type:'bar',
          stack: '总量',
          barWidth: '25%',
          itemStyle:{
            normal:{
              color:color.blue
            }
          },
          data:[23, 6, 13]
        },
        {
          name:'异常',
          type:'bar',
          stack: '总量',
          barWidth: '25%',
          itemStyle:{
            normal:{
              color:color.yellow
            }
          },
          data:[7, 9, 1]
        }
      ]
    },
    {
      series : [
        {
          name:'正常',
          type:'bar',
          stack: '总量',
          barWidth: '25%',
          itemStyle:{
            normal:{
              color:color.blue
            }
          },
          data:[24, 6, 15]
        },
        {
          name:'异常',
          type:'bar',
          stack: '总量',
          barWidth: '25%',
          itemStyle:{
            normal:{
              color:color.yellow
            }
          },
          data:[2, 6, 7]
        }
      ]
    },
    {
      series : [
        {
          name:'正常',
          type:'bar',
          stack: '总量',
          barWidth: '25%',
          itemStyle:{
            normal:{
              color:color.blue
            }
          },
          data:[23, 6, 15]
        },
        {
          name:'异常',
          type:'bar',
          stack: '总量',
          barWidth: '25%',
          itemStyle:{
            normal:{
              color:color.yellow
            }
          },
          data:[2, 8, 1]
        }
      ]
    },
    {
      series : [
        {
          name:'正常',
          type:'bar',
          stack: '总量',
          barWidth: '25%',
          itemStyle:{
            normal:{
              color:color.blue
            }
          },
          data:[25, 6, 13]
        },
        {
          name:'异常',
          type:'bar',
          stack: '总量',
          barWidth: '25%',
          itemStyle:{
            normal:{
              color:color.yellow
            }
          },
          data:[2, 8, 1]
        }
      ]
    },
    {
      series : [
        {
          name:'正常',
          type:'bar',
          stack: '总量',
          barWidth: '25%',
          itemStyle:{
            normal:{
              color:color.blue
            }
          },
          data:[19, 6, 11]
        },
        {
          name:'异常',
          type:'bar',
          stack: '总量',
          barWidth: '25%',
          itemStyle:{
            normal:{
              color:color.yellow
            }
          },
          data:[2, 6, 1]
        }
      ]
    }
  ]


};

const FaultStatistics = () => (
    <ReactEcharts
        option={option}
        style={{height: '300px', width: '100%'}}
        className={'react_for_echarts'}
    />
);

export default FaultStatistics;
