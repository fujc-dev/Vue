<template>
  <div>
    <div class="techno-orders">
      <div class="card">
        <img src="../assets/images/r-dot.png" /><strong>职级分布</strong><label>{{upToDatetime}}</label>
      </div>
      <div id="categoryChart" style="height:240px">

      </div>
      <p>
        {{human.qualificationsdistribute}}
      </p>
      <div class="piecharts">
        <!--图表明细-->
        <ul>
          <li :key=index v-for="(distribute,index) in qualificationsdistribute.distributes"
            @click="onQualificationsDistribute(index,distribute)"
            :class="{'active':qualificationsdistribute_currentIndex == index}">
            <div class="col1">
              <div class="circle" :style='{"background-color":distribute.color[0]}'>
                &nbsp;&nbsp;&nbsp;</div>
              <div>{{distribute.xData}}</div>
            </div>
            <div class="col2">
              <label>占比</label>
              <label>{{distribute.percentage}}</label>
            </div>
            <div class="col3">
              <strong>{{distribute.yData}}</strong>
              <label>人</label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    name: "H1_3",
    data() {
      return {
        upToDatetime: "截至2018年12月31日",            //
        qualificationsdistribute: {},                 //数据源
        qualificationsdistribute_currentIndex: -1,    //当前默认选中项
        human: { "qualificationsdistribute": "副处职：176 人 占比2.80%" }
      };
    },
    created() {
      this.$HRService.GetHrQualificationsDistribute().then((u) => {
        this.qualificationsdistribute = u;
        this.builderQualificationsDistribute();
      });
    },
    methods: {
      //构建学历情况数据以及图表样式
      builderQualificationsDistribute: function () {
        let _echart_xAxis_data = [];    //
        let _echart_series_data = []    //
        let _echart_color = [];         //

        for (const key in this.qualificationsdistribute.distributes) {
          if (this.qualificationsdistribute.distributes.hasOwnProperty(key)) {
            const element = this.qualificationsdistribute.distributes[key];
            _echart_xAxis_data.push(element.xData)
            _echart_series_data.push(element.yData);
            _echart_color.push(element.color[0]);
          }
        }

        let categoryChart = this.$echarts.init(document.getElementById('categoryChart'))
        let option = {
          xAxis: {
            type: 'category',
            data: _echart_xAxis_data,
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              interval: 0,
              rotate: 40
            }
          },
          yAxis: {
            show: false,
            type: 'value'
          },
          series: [{
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            barMaxWidth: 20,
            data: _echart_series_data,
            itemStyle: {
              color: function (params) {
                return _echart_color[params.dataIndex]
              }
            }
          }]
        };
        categoryChart.setOption(option);
        //设置默认值
        if (this.qualificationsdistribute.distributes && this.qualificationsdistribute.distributes.length > 0) {
          this.qualificationsdistribute_currentIndex = 0;
          let _xdata = this.qualificationsdistribute.distributes[0].xData;
          let _ydata = this.qualificationsdistribute.distributes[0].yData;
          this.human.qualificationsdistribute = _xdata + "：" + _ydata + " 人" + " 占比" + this.$CommandService.toPercent(parseInt(_ydata) / this.qualificationsdistribute.summber);
        }
      },

      onQualificationsDistribute: function (index, distribute) {
        this.qualificationsdistribute_currentIndex = index;
        this.human.qualificationsdistribute = distribute.xData + "：" + distribute.yData + " 人" + " 占比" + this.$CommandService.toPercent(parseInt(distribute.yData) / this.qualificationsdistribute.summber);
      }
    }

  };
</script>
<style lang="less">

</style>