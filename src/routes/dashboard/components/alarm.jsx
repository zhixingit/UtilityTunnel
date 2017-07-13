/**
 * Created by hao.cheng on 2017/4/21.
 */
import React from 'react';
import ReactEcharts from 'echarts-for-react';

 const option = {
   tooltip : {
     trigger: 'item',
     formatter: "{a} <br/>{b} : {c} ({d}%)"
   },
   legend: {
     show:false,
     x : 'center',
     y : 'bottom',
     data:['一般','轻微','重要','紧急']
   },
   calculable : true,
   series : [
     {
       name:'本月告警',
       type:'pie',
       radius : ['20%', '70%'],
       center : ['50%', '45%'],
       roseType : 'radius',
       color: ['#3addd0', '#54cbfc', '#ffb06a', '#fe7b84'],
       data:[
         {value:18, name:'一般'},
         {value:15, name:'轻微'},
         {value:8, name:'重要'},
         {value:5, name:'紧急'},
       ]
     }
   ]
 };


const Alarm = () => (
    <ReactEcharts
        option={option}
        style={{height: '152px', width: '100%'}}
        className={'react_for_echarts'}
    />
);

export default Alarm;
