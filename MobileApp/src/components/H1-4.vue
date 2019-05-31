<template>
  <div class="h1-4">
    <h2>{{message}}</h2>
    <ul>
      <li v-for="book in books">
        {{book.name}}
      </li>
      
    </ul>
    <div>
        <mu-button color="primary" v-on:click="handler" >Primary</mu-button>
        <mu-button @click="$toast.message('Hello World')" color="primary">message</mu-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "H1_4",
  data() {
    return { 
      message:"H1-4 Page!",
      books:[
        {name:"《Vue.js 实战》"}, {name:"《Javascript 语言精辟》"}, {name:"《Javascript 高级程序设计》"},
      ]
    };
  },
  methods: {
    handler:function(e){
      this.$toast.message('hello world');
      // this.$toast.success('hello world');
      // this.$toast.info('hello world');
      // this.$toast.warning('hello world');
      // this.$toast.error('hello world');
    }
  }
};
</script>

<style lang="less">
.h1-4 {
  padding: 105px 10px 0 10px;
}
</style>