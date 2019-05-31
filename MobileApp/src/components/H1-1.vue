<template>
  <div>
    <mu-container class="grid-container">
      <mu-row gutter>
        <mu-col span="6">
          <div class="grid-cell">
            <div class="c-img">
              <img src="../assets/images/r-z01.png" />
            </div>
            <div class="c-lable">
              <label>集团总人数</label>
              <strong>{{statictis.total_group_number}}</strong>
            </div>
          </div>
        </mu-col>
        <mu-col span="6">
          <div class="grid-cell">
            <div class="c-img">
              <img src="../assets/images/r-z02.png" />
            </div>
            <div class="c-lable">
              <label>在册人数</label>
              <strong>{{statictis.number_of_persons_on_record}}</strong>
            </div>
          </div>
        </mu-col>
      </mu-row>
      <mu-row gutter>
        <mu-col span="6">
          <div class="grid-cell">
            <div class="c-img">
              <img src="../assets/images/r-z03.png" />
            </div>
            <div class="c-lable">
              <div><label>男</label> <strong>{{statictis.male}}</strong></div>
              <div><label>女</label> <strong>{{statictis.female}}</strong></div>
            </div>
          </div>
        </mu-col>
        <mu-col span="6">
          <div class="grid-cell">
            <div class="c-img">
              <img src="../assets/images/r-z04.png" />
            </div>
            <div class="c-lable">
              <label>平均年龄</label>
              <strong>{{statictis.average_age}}<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></strong>
            </div>
          </div>
        </mu-col>
      </mu-row>
    </mu-container>
    <div>
      <!-- <mu-button color="primary" v-on:click="handler">Primary</mu-button>
      <mu-button @click="$toast.message('Hello World')" color="primary">message</mu-button> -->

      <div  v-for="dev in devps" class="orders">
        <div>
          <img src="../assets/images/r-dot.png">
          <strong>人员岗位变动次数上浮</strong>
          <label>最近12月统计数据</label>
        </div>
        <p>
          . 2019年度人员岗位变动次数达到200次,环比2018年上浮30%
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "H1_1",
    data() {
      return {
        statictis: {},  //集团总人数、在册人数、男女人数、平均年龄
        devps: {}       //人力资源发展趋势分析
      };
    },
    created() {
      var that = this;
      this.$HRService.GetHrDevpTrend().then((u) => {
        this.devps = u;
      });
      this.$HRService.GetHrCountStatictis().then(u => {
        this.statictis = u;
      });

    },
    methods: {

    }
  };
</script>

<style lang="less">
  

  .container {
    background: #f2f2f6;
  }

  .grid-container {
    margin: 0px;
  }

  .grid-container .row {
    margin: 10px 4px;
  }

  .grid-container .col {
    padding-right: 4px;
    padding-left: 4px;
  }


  .grid-container .grid-cell {
    border-radius: 10px;
    background: #fff;
    padding: 10px;
    height: 80px;
    overflow: hidden;
    line-height: 2;
  }

  .grid-container .grid-cell .c-img {
    float: left;
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .grid-container .grid-cell .c-img img {
    width: 35px;
    height: 35px;
  }

  .grid-container .grid-cell .c-lable {
    float: right;
    width: 60%;
    margin: 0 10px 0 5px;
  }

  .grid-container .grid-cell .c-lable label {
    color: #000000;
  }

  .grid-container .grid-cell .c-lable strong {
    color: #3f5576;
  }

  .grid-container.is-stripe .col:nth-child(2n) .grid-cell {
    background: rgba(0, 0, 0, 0.54);
  }

  .orders {
    border-radius: 10px;
    padding: 10px;
    background: #fff;
    height: 100px;
    overflow: hidden;
    line-height: 1.6;
    margin: 0 8px 6px 8px;
  }

  .orders img {
    /* width: 10px;
    height: 16px;
    vertical-align: middle;
    margin-right: 5px; */
    width: 5px;
    height: 13px;
    vertical-align: middle;
    /* margin-right: 5px; */
    margin: 0 5px 2px 0;
  }

  .orders strong {
    font-size: 0.9rem;
  }

  .orders label {
    float: right;
    font-size: 0.8rem;
    padding: 1px 8px 1px 8px;
    color: #737686;
    border: 1px solid #a0b7da;
    border-radius: 10px;
  }

  .orders p {
    color: #3f5576;
    font-size: 0.8rem;
  }
</style>