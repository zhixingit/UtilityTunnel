import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { color } from '../../../utils';

 const option = {
   title : {
     text: '本月巡检次数',
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
   xAxis : [
     {
       type : 'category',
       data : ['A区', 'B区', 'C区', 'D区', 'E区', 'F区'],
       axisTick: {
         alignWithLabel: true
       },
       axisLine:{
         show:true
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
         show:false
       }
     }
   ],
   series : [
     {
       name:'本月巡检次数',
       type:'bar',
       barWidth: '30%',
       itemStyle:{
         normal:{
           color:color.blue
         }
       },
       data:[4, 10, 6, 9, 2, 7]
     }
   ]
 };


const InspectionNumber = () => (
    <ReactEcharts
        option={option}
        style={{height: '300px', width: '100%'}}
        className={'react_for_echarts'}
    />
);

export default InspectionNumber;
