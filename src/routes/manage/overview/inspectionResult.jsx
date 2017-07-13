import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { color } from '../../../utils';

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
       text: '巡检结果状态',
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
         name:'状态完好',
         type:'pie',
         clockWise:false,
         radius : ['38%','48%'],
         center : ['18%','46%'],
         itemStyle : {
           normal: {
             color:color.green,
             label: {show:false},
             labelLine: {show:false},
           }
         },
         hoverAnimation: false,

         data:[
           {
             value:11,
             name:'状态完好'
           },
           {
             value:89,
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
         radius : ['38%','48%'],
         center : ['18%','46%'],
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
               formatter: '11%',
               textStyle: {
                 color: color.green,
                 fontSize: 28,
                 fontWeight:'bold'
               }
             }
           }
         }, {
           tooltip: {
             show: false
           },
           label: {
             normal: {
               formatter: '状态完好',
               textStyle: {
                 color: color.green,
                 fontSize: 14
               }
             }
           }
         }]
       },
       {
         name:'状态良好',
         type:'pie',
         clockWise:false,
         radius : ['38%','48%'],
         center : ['50%','46%'],
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
             value:67,
             name:'状态良好'
           },
           {
             value:33,
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
         radius : ['38%','48%'],
         center : ['50%','46%'],
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
               formatter: '67%',
               textStyle: {
                 color: color.darkBlue,
                 fontSize: 28,
                 fontWeight:'bold'
               }
             }
           }
         }, {
           tooltip: {
             show: false
           },
           label: {
             normal: {
               formatter: '状态良好',
               textStyle: {
                 color: color.darkBlue,
                 fontSize: 14
               }
             }
           }
         }]
       },
       {
         name:'状态较差',
         type:'pie',
         clockWise:false,
         radius : ['38%','48%'],
         center : ['82%','46%'],
         itemStyle : {
           normal: {
             color:color.yellow,
             label: {show:false},
             labelLine: {show:false},
           }
         },
         hoverAnimation: false,

         data:[
           {
             value:22,
             name:'状态较差'
           },
           {
             value:78,
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
         radius : ['38%','48%'],
         center : ['82%','46%'],
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
               formatter: '22%',
               textStyle: {
                 color: color.darkYellow,
                 fontSize: 28,
                 fontWeight:'bold'
               }
             }
           }
         }, {
           tooltip: {
             show: false
           },
           label: {
             normal: {
               formatter: '状态较差',
               textStyle: {
                 color: color.darkYellow,
                 fontSize: 14
               }
             }
           }
         }]
       },
     ]

   },
   options: [{
     series:[
       {
         data:[
           {
             value:11,
           },
           {
             value:89,
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
         data: [{
           value: 1,
           label: {
             normal: {
               formatter: '11%',
               textStyle: {
                 color: color.green,
                 fontSize: 28,
                 fontWeight:'bold'
               }
             }
           }
         }, {
           tooltip: {
             show: false
           },
           label: {
             normal: {
               formatter: '状态完好',
               textStyle: {
                 color: color.darkGreen,
                 fontSize: 14
               }
             }
           }
         }]
       },
       {
         data:[
           {
             value:67,
             name:'状态良好'
           },
           {
             value:33,
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
         data: [{
           value: 1,
           label: {
             normal: {
               formatter: '67%',
               textStyle: {
                 color: color.blue,
                 fontSize: 28,
                 fontWeight:'bold'
               }
             }
           }
         }, {
           tooltip: {
             show: false
           },
           label: {
             normal: {
               formatter: '状态良好',
               textStyle: {
                 color: color.darkBlue,
                 fontSize: 14
               }
             }
           }
         }]
       },
       {
         data:[
           {
             value:22,
             name:'状态较差'
           },
           {
             value:78,
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
         data: [{
           value: 1,
           label: {
             normal: {
               formatter: '22%',
               textStyle: {
                 color: color.yellow,
                 fontSize: 28,
                 fontWeight:'bold'
               }
             }
           }
         }, {
           tooltip: {
             show: false
           },
           label: {
             normal: {
               formatter: '状态较差',
               textStyle: {
                 color: color.darkYellow,
                 fontSize: 14
               }
             }
           }
         }]
       }
     ]
   },
     {
       series:[
         {
           data:[
             {
               value:30,
             },
             {
               value:70,
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
           data: [{
             value: 1,
             label: {
               normal: {
                 formatter: '30%',
                 textStyle: {
                   color: color.green,
                   fontSize: 28,
                   fontWeight:'bold'
                 }
               }
             }
           }, {
             tooltip: {
               show: false
             },
             label: {
               normal: {
                 formatter: '状态完好',
                 textStyle: {
                   color: color.darkGreen,
                   fontSize: 14
                 }
               }
             }
           }]
         },
         {
           data:[
             {
               value:60,
               name:'状态良好'
             },
             {
               value:40,
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
           data: [{
             value: 1,
             label: {
               normal: {
                 formatter: '60%',
                 textStyle: {
                   color: color.blue,
                   fontSize: 28,
                   fontWeight:'bold'
                 }
               }
             }
           }, {
             tooltip: {
               show: false
             },
             label: {
               normal: {
                 formatter: '状态良好',
                 textStyle: {
                   color: color.darkBlue,
                   fontSize: 14
                 }
               }
             }
           }]
         },
         {
           data:[
             {
               value:10,
               name:'状态较差'
             },
             {
               value:90,
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
           data: [{
             value: 1,
             label: {
               normal: {
                 formatter: '10%',
                 textStyle: {
                   color: color.yellow,
                   fontSize: 28,
                   fontWeight:'bold'
                 }
               }
             }
           }, {
             tooltip: {
               show: false
             },
             label: {
               normal: {
                 formatter: '状态较差',
                 textStyle: {
                   color: color.darkYellow,
                   fontSize: 14
                 }
               }
             }
           }]
         }
       ]
     },
     {
       series:[
         {
           data:[
             {
               value:11,
             },
             {
               value:89,
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
           data: [{
             value: 1,
             label: {
               normal: {
                 formatter: '11%',
                 textStyle: {
                   color: color.green,
                   fontSize: 28,
                   fontWeight:'bold'
                 }
               }
             }
           }, {
             tooltip: {
               show: false
             },
             label: {
               normal: {
                 formatter: '状态完好',
                 textStyle: {
                   color: color.darkGreen,
                   fontSize: 14
                 }
               }
             }
           }]
         },
         {
           data:[
             {
               value:67,
               name:'状态良好'
             },
             {
               value:33,
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
           data: [{
             value: 1,
             label: {
               normal: {
                 formatter: '67%',
                 textStyle: {
                   color: color.blue,
                   fontSize: 28,
                   fontWeight:'bold'
                 }
               }
             }
           }, {
             tooltip: {
               show: false
             },
             label: {
               normal: {
                 formatter: '状态良好',
                 textStyle: {
                   color: color.darkBlue,
                   fontSize: 14
                 }
               }
             }
           }]
         },
         {
           data:[
             {
               value:22,
               name:'状态较差'
             },
             {
               value:78,
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
           data: [{
             value: 1,
             label: {
               normal: {
                 formatter: '22%',
                 textStyle: {
                   color: color.yellow,
                   fontSize: 28,
                   fontWeight:'bold'
                 }
               }
             }
           }, {
             tooltip: {
               show: false
             },
             label: {
               normal: {
                 formatter: '状态较差',
                 textStyle: {
                   color: color.darkYellow,
                   fontSize: 14
                 }
               }
             }
           }]
         }
       ]
     },
     {
       series:[
         {
           data:[
             {
               value:18,
             },
             {
               value:82,
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
           data: [{
             value: 1,
             label: {
               normal: {
                 formatter: '11%',
                 textStyle: {
                   color: color.green,
                   fontSize: 28,
                   fontWeight:'bold'
                 }
               }
             }
           }, {
             tooltip: {
               show: false
             },
             label: {
               normal: {
                 formatter: '状态完好',
                 textStyle: {
                   color: color.darkGreen,
                   fontSize: 14
                 }
               }
             }
           }]
         },
         {
           data:[
             {
               value:79,
               name:'状态良好'
             },
             {
               value:21,
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
           data: [{
             value: 1,
             label: {
               normal: {
                 formatter: '67%',
                 textStyle: {
                   color: color.blue,
                   fontSize: 28,
                   fontWeight:'bold'
                 }
               }
             }
           }, {
             tooltip: {
               show: false
             },
             label: {
               normal: {
                 formatter: '状态良好',
                 textStyle: {
                   color: color.darkBlue,
                   fontSize: 14
                 }
               }
             }
           }]
         },
         {
           data:[
             {
               value:19,
               name:'状态较差'
             },
             {
               value:81,
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
           data: [{
             value: 1,
             label: {
               normal: {
                 formatter: '22%',
                 textStyle: {
                   color: color.yellow,
                   fontSize: 28,
                   fontWeight:'bold'
                 }
               }
             }
           }, {
             tooltip: {
               show: false
             },
             label: {
               normal: {
                 formatter: '状态较差',
                 textStyle: {
                   color: color.darkYellow,
                   fontSize: 14
                 }
               }
             }
           }]
         }
       ]
     },
     {
       series:[
         {
           data:[
             {
               value:15,
             },
             {
               value:85,
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
           data: [{
             value: 1,
             label: {
               normal: {
                 formatter: '11%',
                 textStyle: {
                   color: color.green,
                   fontSize: 28,
                   fontWeight:'bold'
                 }
               }
             }
           }, {
             tooltip: {
               show: false
             },
             label: {
               normal: {
                 formatter: '状态完好',
                 textStyle: {
                   color: color.darkGreen,
                   fontSize: 14
                 }
               }
             }
           }]
         },
         {
           data:[
             {
               value:71,
               name:'状态良好'
             },
             {
               value:29,
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
           data: [{
             value: 1,
             label: {
               normal: {
                 formatter: '67%',
                 textStyle: {
                   color: color.blue,
                   fontSize: 28,
                   fontWeight:'bold'
                 }
               }
             }
           }, {
             tooltip: {
               show: false
             },
             label: {
               normal: {
                 formatter: '状态良好',
                 textStyle: {
                   color: color.darkBlue,
                   fontSize: 14
                 }
               }
             }
           }]
         },
         {
           data:[
             {
               value:25,
               name:'状态较差'
             },
             {
               value:75,
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
           data: [{
             value: 1,
             label: {
               normal: {
                 formatter: '22%',
                 textStyle: {
                   color: color.yellow,
                   fontSize: 28,
                   fontWeight:'bold'
                 }
               }
             }
           }, {
             tooltip: {
               show: false
             },
             label: {
               normal: {
                 formatter: '状态较差',
                 textStyle: {
                   color: color.darkYellow,
                   fontSize: 14
                 }
               }
             }
           }]
         }
       ]
     },
     {
       series:[
         {
           data:[
             {
               value:31,
             },
             {
               value:69,
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
           data: [{
             value: 1,
             label: {
               normal: {
                 formatter: '11%',
                 textStyle: {
                   color: color.green,
                   fontSize: 28,
                   fontWeight:'bold'
                 }
               }
             }
           }, {
             tooltip: {
               show: false
             },
             label: {
               normal: {
                 formatter: '状态完好',
                 textStyle: {
                   color: color.darkGreen,
                   fontSize: 14
                 }
               }
             }
           }]
         },
         {
           data:[
             {
               value:70,
               name:'状态良好'
             },
             {
               value:30,
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
           data: [{
             value: 1,
             label: {
               normal: {
                 formatter: '67%',
                 textStyle: {
                   color: color.blue,
                   fontSize: 28,
                   fontWeight:'bold'
                 }
               }
             }
           }, {
             tooltip: {
               show: false
             },
             label: {
               normal: {
                 formatter: '状态良好',
                 textStyle: {
                   color: color.darkBlue,
                   fontSize: 14
                 }
               }
             }
           }]
         },
         {
           data:[
             {
               value:27,
               name:'状态较差'
             },
             {
               value:73,
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
           data: [{
             value: 1,
             label: {
               normal: {
                 formatter: '22%',
                 textStyle: {
                   color: color.yellow,
                   fontSize: 28,
                   fontWeight:'bold'
                 }
               }
             }
           }, {
             tooltip: {
               show: false
             },
             label: {
               normal: {
                 formatter: '状态较差',
                 textStyle: {
                   color: color.darkYellow,
                   fontSize: 14
                 }
               }
             }
           }]
         }
       ]
     }]


 };



const InspectionResult = () => (
    <ReactEcharts
        option={option}
        style={{height: '300px', width: '100%'}}
        className={'react_for_echarts'}
    />
);

export default InspectionResult;
