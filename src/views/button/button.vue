<template>
  <div>
    <el-button @click="jian">-</el-button>
    <el-input v-model="number"></el-input>
    <el-button @click="jia">
      +
    </el-button>
    <el-button @click="globel">
      公用globel
    </el-button>
    <el-input
      v-model="wrods"
      @change="woredsChange">
    </el-input>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import Api from '@/httpIntcp';
// const { mapState, mapActions } = createNamespacedHelpers('button')

export default {
  data() {
    return {
      number: 0,
      wrods: '',
    };
  },
  computed: {
    ...mapState('button', {
      'privateGlobel': state => state.globel
    })
  },
  created() {
    console.log(this.privateGlobel);
  },
  methods: {
    ...mapActions('button', [
      'setGlobal'
    ]),
    ...mapActions({
      setGlobels: 'setGlobel'
    }),
    woredsChange(wd) {
      console.log(wd);
      Api.get('/s', {
        wd,
      }).then((res) => {
        console.log(res);
      });
    },
    jian() {
      this.number -= 1;
      this.setGlobal(this.number);
    },
    jia() {
      this.number += 1;
      this.setGlobal(this.number);
    },
    globel() {
      this.setGlobels(true);
      console.log(this.global);
    }
  }
};
</script>

<style lang="scss" scoped>
.button{
  color:#f60;
}
</style>
