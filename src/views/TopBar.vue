<template>
    <div class="navbar" role="navigation">
        <div class="left_area">
            <img class="logo" src="~@/assets/image/logo.png" width="50"/>
            <img class="company" src="~@/assets/image/company.png" width="107" height="30"/>
            <span class="left_area_desc">诸暨市国资管理系统</span>
        </div>
        <div class="right_area" @click="logOut">
            <Input
				v-model.trim="keyword"
                suffix="ios-search"
                class="search-input"
                placeholder="请输入宗地编码或者地址"
				@on-enter="search"
			/>
            <img class="user" src="~@/assets/image/userlogin.png" width="24"/>
            <Dropdown trigger="click" style="vertical-align: -7px;cursor:pointer;">
                admin
                <Icon type="ios-arrow-down"></Icon>
                <DropdownMenu slot="list">
                    <DropdownItem>北京烤鸭</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <Icon type="ios-help-circle-outline" size="18" style="color:#fff;vertical-align: -10px;margin-left: 40px;"/>
            <Tooltip content="点击退出登录">              
                <Icon type="ios-exit-outline" size="18" style="color:#fff;vertical-align: -10px;margin-left: 20px;"/>
            </Tooltip>
        </div>
    </div>   
</template> 

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { apiCover } from '@/api/index'

@Component
export default class TopBar extends Vue {
    private keyword: string = '';
    public logOut() {
        
    }
    public search() {

    }
}
    
</script>
<style>
.search-input .ivu-input{
    background-color: rgba(133, 144, 166, 0.25);
    border: none;
    color: #fff;
}
.search-input .ivu-input-suffix i{
    color: #fff;
}
.navbar .ivu-dropdown-rel{
    color: #fff;
    font-size: 14px;
}
</style>
<style lang="css" scoped>
.navbar{
    min-width: 1024px;
	height: 50px;
    overflow: hidden;
    background-color: rgba(133, 144, 166, 0.2);
}
.left_area{
    float: left;
}
.left_area_desc{
    margin-left: 5px;
    color: #fff;
	font-size: 26px;
    font-weight: bold;
    vertical-align: -5px;
}
.left_area_desc::before {
    content: '';
    display: inline-block;
    margin-right: 10px;
    width: 1px;
    height: 36px;
    background: #515459;
    vertical-align: -10px;
}
.right_area{
    float: right;
    width: 30%;
}
.search-input{
    margin-top: 8px;
    margin-right: 30px;
    width: 50%;
}
.user{
    margin-right: 15px;
    vertical-align: -15px;
}
</style>