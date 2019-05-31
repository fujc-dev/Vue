<template>
  <div>
    <div class="techno-orders">
      <div class="card">
        <img src="../assets/images/r-dot.png" /><strong>职级分布</strong><label>{{upToDatetime}}</label>
      </div>
      <div id="categoryChart" style="height:240px">

      </div>
      <p>
        {{human.post_distribute}}
      </p>
      <div class="piecharts">
        <!--图表明细-->
        <ul>
          <li :key=index v-for="(distribute,index) in postDistribute.distributes"
            @click="onPostDistribute(index,distribute)" :class="{'active':post_distribute_currentIndex == index}">
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
    name: "H1_2",
    data() {
      return {
        upToDatetime: "截至2018年12月31日",   //
        postDistribute: {},                  //数据源
        post_distribute_currentIndex: -1,    //当前默认选中项
        human: { "post_distribute": "副处职：176 人 占比2.80%" }
      };
    },
    created() {
      this.$HRService.GetHrPostDistribute().then((u) => {
        this.postDistribute = u;
        //console.log(this.postDistribute);
        this.builderPostDistributeECharts();
      });
    },
    methods: {
      //构建学历情况数据以及图表样式
      builderPostDistributeECharts: function () {
        //组装ECharts数据
        let _echart_data = [];
        let _echart_color = [];
        for (const key in this.postDistribute.distributes) {
          if (this.postDistribute.distributes.hasOwnProperty(key)) {
            const element = this.postDistribute.distributes[key];
            _echart_data.push({ "value": element.yData, "name": element.xData });
            _echart_color.push(element.color[0]);
          }
        }

        let pieChart = this.$echarts.init(document.getElementById('categoryChart'));
        let option = {
          tooltip: { show: false },
          color: _echart_color,
          series: [
            {
              index: 'pieChart',
              name: 'pieChart',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '12',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: _echart_data
            }
          ]
        };
        pieChart.setOption(option);
        pieChart.on('click', (params) => {
          if (params.componentType === "series" && params.componentSubType === "pie") {
            this.human.post_distribute = params.name + "：" + params.value + " 人" + " 占比" + this.$CommandService.toPercent(parseInt(params.value) / this.postDistribute.summber);
            this.post_distribute_currentIndex = params.dataIndex;
            this.$CommandService.setDispatchAction(pieChart, this.post_distribute_lastIndex, params.dataIndex);
            this.post_distribute_lastIndex = params.dataIndex;
          }
        });
        //设置默认值
        this.post_distribute_currentIndex = 0;
        this.post_distribute_lastIndex = 0;
        this.$CommandService.setDispatchAction(pieChart, 0, 0);
        if (this.postDistribute.distributes && this.postDistribute.distributes.length > 0) {
          let _xdata = this.postDistribute.distributes[0].xData;
          let _ydata = this.postDistribute.distributes[0].yData;
          this.human.post_distribute = _xdata + "：" + _ydata + " 人" + " 占比" + this.$CommandService.toPercent(parseInt(_ydata) / this.postDistribute.summber);
        }
      },

      onPostDistribute: function (index, distribute) {

        let pieChart = this.$echarts.init(document.getElementById('categoryChart'));
        this.post_distribute_currentIndex = index;
        this.$CommandService.setDispatchAction(pieChart, this.post_distribute_lastIndex, this.post_distribute_currentIndex);
        this.post_distribute_lastIndex = this.post_distribute_currentIndex;
        this.human.post_distribute = distribute.xData + "：" + distribute.yData + " 人" + " 占比" + this.$CommandService.toPercent(parseInt(distribute.yData) / this.postDistribute.summber);

      }
    }

  };
</script>
<style lang="less">

</style>