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
import { Component, Vue } from 'vue-property-decorator';
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
.content{
  position: relative;
  margin-left: 120px;
}
</style>
