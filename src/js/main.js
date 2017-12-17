// 导入第三方的包
import Vue from 'vue';


// 导入根组件
import AppComponent from '../component/App.vue';


// 编写数据,关联vue
new Vue({
    el : '#add',
    // 在模块化组件当中需要用到render函数
    render: c => c(AppComponent) 
});