<template>
  <div class="view-container">
    <mu-container>
      <div class="header">
        <div class="left-part">

        </div>
        <div class="title-part">
          人力资源分析
        </div>
        <div class="right-part">

        </div>
      </div>
      <mu-tabs :value.sync="active" @change="handleChange" color="#0693fb" indicator-color="white" full-width>
        <mu-tab to="/H1/H1_1">
          <div class="view-navigation">
            <div class="r-h-01">
              <i></i><span>人力概览</span>
            </div>
          </div>
        </mu-tab>
        <mu-tab to="/H1/H1_2">
          <div class="view-navigation">
            <div class="r-h-02"><i></i><span>职级分布</span></div>
          </div>
        </mu-tab>
        <mu-tab to="/H1/H1_3">
          <div class="view-navigation">
            <div class="r-h-03"><i></i><span>学历职称</span></div>
          </div>
        </mu-tab>
        <mu-tab to="/H1/H1_4">
          <div class="view-navigation">
            <div class="r-h-04"><i></i><span>分类统计</span></div>
          </div>
        </mu-tab>
        <mu-tab to="/H1/H1_5">
          <div class="view-navigation">
            <div class="r-h-05"><i></i><span>地区分布</span></div>
          </div>
        </mu-tab>
      </mu-tabs>
      <router-view></router-view>
    </mu-container>
  </div>
</template>

<script>
  export default {
    name: "H1",
    data() {
      return {
        active: 0
      };
    },
    methods: {
      handleChange(val) {
        //console.log(this.$Config.h1_default_active);
        this.$Config.h1_default_active = val
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .view-navigation {
    margin: 0;
  }


  .view-navigation i {
    height: 25px;
    width: 25px;
    display: block;
    margin: 0 auto;
  }

  .view-navigation span {
    display: block;
    margin: 15px 0 0 0;
    font-size: 1rem;
  }

  .mu-tab-active .view-navigation .r-h-01 i {
    background: url("../assets/images/r-h-01.png") no-repeat;
    background-size: 25px 20px;
  }

  .view-navigation .r-h-01 i {
    background: url("../assets/images/r-m-01.png") no-repeat;
    background-size: 25px 20px;
  }

  .mu-tab-active .view-navigation .r-h-02 i {
    background: url("../assets/images/r-h-02.png") no-repeat;
    background-size: 25px 20px;
  }

  .view-navigation .r-h-02 i {
    background: url("../assets/images/r-m-02.png") no-repeat;
    background-size: 25px 20px;
  }

  .mu-tab-active .view-navigation .r-h-03 i {
    background: url("../assets/images/r-h-03.png") no-repeat;
    background-size: 25px 20px;
  }

  .view-navigation .r-h-03 i {
    background: url("../assets/images/r-m-03.png") no-repeat;
    background-size: 25px 20px;

  }

  .mu-tab-active .view-navigation .r-h-04 i {
    background: url("../assets/images/r-h-04.png") no-repeat;
    background-size: 25px 20px;
  }

  .view-navigation .r-h-04 i {
    background: url("../assets/images/r-m-04.png") no-repeat;
    background-size: 25px 20px;

  }

  .mu-tab-active .view-navigation .r-h-05 i {
    background: url("../assets/images/r-h-05.png") no-repeat;
    background-size: 25px 20px;
  }

  .view-navigation .r-h-05 i {
    background: url("../assets/images/r-m-05.png") no-repeat;
    background-size: 25px 20px;
  }

  .view-container {
    margin: 0 0 60px 0;
  }

  .demo-text {
    padding: 100px 10px 0 10px;
    background: #fff;
    /* p {
    margin: 8px 0;
  } */
  }





  .container {
    width: 100%;
    padding-right: 0px;
    padding-left: 0px;
    margin-right: auto;
    margin-left: auto;
  }

  .container .mu-tabs.mu-tabs-full-width {
    /* position: absolute;
    top: 0px; */
    height: 100px;
  }

  .mu-tabs-full-width .mu-tab {
    display: flex;
    align-items: center;
    height: 100px;
    justify-content: center;
  }
</style>