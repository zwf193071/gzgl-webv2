<template>
  <div class="home">
    <Layout :style="{minHeight: '100vh'}">
      <TopBar />
      <Layout style="position: relative; margin-top: 20px;">
        <SideMenu />
        <Content class="content">
          <router-view class="content--inner" />
        </Content>
      </Layout>  
    </Layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import Router from 'vue-router';
import TopBar from '@/views/TopBar.vue'; // @ is an alias to /src
import SideMenu from '@/components/SideMenu';

@Component({
  components: {
    TopBar,
    SideMenu
  },
})
export default class Home extends Vue {
  
}
</script>
<style scoped>
.home{
  background: url('~@/assets/image/BG.png') no-repeat center center fixed;
}
.content{
  position: relative;
  margin-left: 120px;
}
</style>
