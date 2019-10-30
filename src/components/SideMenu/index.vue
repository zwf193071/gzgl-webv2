<template>
    <div :class="prefixCls">
        <ul class="side-menu">
            <li
                class="menu-item"
                v-for="(item, i) of data"
                :key="`item-${i}`"
                @click="linkTo(i)"
            >
                <img v-if="currentActive === i" :src="require(`@/assets/image/menu/${item.activeImgSrc}`)">
                <img v-else :src="require(`@/assets/image/menu/${item.defaultImgSrc}`)">
                <div
                    class="label"
                    :class="{'label-active': currentActive === i}"
                    v-show="!currentShrink"
                >{{item.label}}</div>
            </li>
        </ul>
        <div class="btn-wrap" @click="toggleMenu">
            <Icon class="btn" type="ios-arrow-back" size="30" style="color: #fff; cursor: pointer;"/>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router'
import config from './config.js'
import Storage from '@/utils/Storage.js'

const prefixCls = ['menu-wrap'];
@Component
export default class SideMenu extends Vue {
    private data: array = [];
    private currentShrink: boolean = false; // 默认菜单为展开状态
    private currentActive: number = 0; // 默认第一个菜单为高亮
    private prefixCls: array = prefixCls;
    
    created() {
        this.data = config.menu
    }
    @Watch('$route')
    private onChildChanged(val: Route, oldVal: Route) {
        console.log(2222)
        console.log(val, oldVal)
        this.currentActive = this.getCurrentRouter(val.path).active
    }
    public toggleMenu() {
        this.currentShrink = !this.currentShrink;
        this.prefixCls = [
            ...prefixCls, 
            {
                [`${prefixCls}-shrink`]: this.currentShrink
            }
        ]
    }
    public linkTo(index) {
        const linkName = this.data[index].link
        Storage.set('currentRoute', linkName)
        if(Boolean(linkName)) {
            this.$router.push(linkName)
        }
    }
    public getCurrentRouter(route) {
        console.log(1211111)
        const menu = this.data
        let index = 0

        return {active: index}
    }
}
</script>
<style scoped>
.menu-wrap{
    position: absolute;
	top: 0px;
	left: 0px;
	bottom: 0px;
    background-color: rgba(133, 144, 166, 0.2);
    border-top-right-radius: 10px;
}
.menu-wrap .side-menu{
    padding-top: 20px;
    width: 80px;
    color: #fff;
    font-size: 12px;  
    list-style: none;
    transition: all .2s ease-in-out;
}
.menu-wrap .side-menu .menu-item{
    margin-bottom: 20px;
    cursor: pointer;
    text-align: center;
}
.menu-wrap .side-menu .label{
    margin-top: 5px;
}
.menu-wrap .side-menu .label-active{
    color: #E96061;
}
.menu-wrap .btn-wrap{
    position: absolute;
    top: 50%;
    left: 80px;
    margin-top: -60px;
	display: inline-block;
	height: 120px;
	border-left: 20px solid rgba(133, 144, 166, 0.2);
	border-top: 20px solid transparent;
	border-bottom: 20px solid transparent;
	border-radius: 0px 5px 5px 0px;
	text-align: center;
    transition: all .2s ease-in-out;
}
.menu-wrap img{
    width: 24px;
}
.menu-wrap .btn{
    position: absolute;
    top: 50%;
    left: 50%;
	margin-top: -20px;
    margin-left: -25px;
    width: 30px; 
    transition: all .2s ease-in-out;
}
.menu-wrap.menu-wrap-shrink .side-menu{
    width: 30px;
}
.menu-wrap.menu-wrap-shrink .btn-wrap{
    left: 30px;
}
.menu-wrap.menu-wrap-shrink img{
    width: 16px;
}
.menu-wrap.menu-wrap-shrink .btn{
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
}
</style>