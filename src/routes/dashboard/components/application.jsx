/**
 * Created by hao.cheng on 2017/4/21.
 */
import React from 'react';
import ReactEcharts from 'echarts-for-react';

 const option = {
     color: ['#90CAFB'],
     tooltip : {
       trigger: 'axis',
       axisPointer : {            // 坐标轴指示器，坐标轴触发有效
         type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
       }
     },
     grid: {
       show:false,
       left: 12,
       right: 12,
       bottom: 12,
       top: 12,
       containLabel: true
     },
     xAxis : [
       {
         type : 'category',
         textStyle:{
           color:'#666'
         },
         data : ['采购申请', '检修申请', '报废申请'],
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
         show:false,
         type : 'value'
       }
     ],
     series : [
       {
         name:'采购申请',
         type:'bar',
         barWidth: '60%',
         label: {
           normal: {
             show: true,
             position: 'top'
           }
         },
         data:[435, 228, 157]
       }
     ]
   };


const Application = () => (
    <ReactEcharts
        option={option}
        style={{height: '144px', width: '100%'}}
        className={'react_for_echarts'}
    />
);

export default Application;
