<template>
	<div class="login">
		<div class="login-box">
			<div class="info">
				<img src="../assets/login/user.png"> 用户名*
			</div>
			<Input
				v-model.trim="account"
				size="large"
				clearable
				ref="account"
				@on-enter="toPassword"
				class="input-item"
			/>
			<div class="info">
				<img src="../assets/login/password.png">密码*
			</div>
			<Input
				v-model.trim="password"
				size="large"
				type="password"
				clearable
				ref="password"
				class="input-item"
				style="margin-bottom: 36px"
			/>
            <Button class="login-btn" type="default" long size="large" aria-label="登录"></Button>
		</div>
		<div class="footer">@2019 ALL RIGHT RECEIVED 中博空间 版权所有</div>
	</div>
</template>
<script lang="ts">
import { Prop, Vue } from 'vue-property-decorator';
export default class Login extends Vue {
	private account: string = '';
	private password: string = '';

	toPassword() {
		console.log(this)
	}
}
</script>
<style scoped>
.login{
	width:100%;
	height:100vh;
	font-size: 14px;
	background: url('../assets/login/BG1.jpg') no-repeat center center fixed;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
}
.login-box{
	width: 350px;
	position: fixed;
	bottom: 5%;
	left: 23%;
}
.login-box .ivu-input-large{
	margin-bottom: 15px;
	height: 40px;
	width:350px;
	background-color: rgba(36,39,45,0.6);
	border: none;
	font-size: 1.5625rem;
}
.login-box .info{
  	color: #FFF;
	font-size: 1.5rem;
	margin-bottom: 8px;
}
.info img{
	width: 15px;
	margin-bottom: 3px;
	margin-right: 5px;
}
.login-box .login-btn{
	height: 40px;
	width:350px;
	background: #000000 url('../assets/login/submit.png') no-repeat center center;
	background-size: auto 40px ;
	color: #FFF;
}
.footer{
	position: fixed;
	bottom: 10px;
	right: 15px;
	color:#FFF;
}
</style>