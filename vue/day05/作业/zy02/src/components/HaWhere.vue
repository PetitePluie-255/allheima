<template>
    <div>
        <div class="logistics-info-header">
        <div class="logistics-info-header-left">
          <div class="logistics-status blue"> <slot name="status"></slot></div>
          <div class="logistics-company">顺丰速运</div>
          <div class="logistics-no">SF123456789</div>
        </div>
      </div>
      <ul class="logistics-info-list">
        <li v-for="item in logisticsInfo" :key="item.id" v-show="isshow">
          <div class="logistics-info-list-time">{{item.time}}</div>
          <div class="logistics-info-list-content">{{item.content}}</div>
        </li>
      </ul>
      <button @click="check" v-check="user">查看物流详情</button>

    </div>
</template>

<script>
    export default {
        data(){
            return {
                isshow:false,
                
            }
        },  
        props:{
            logisticsInfo:Array,
            user:String
        },
        methods:{
            check(){
                if(this.user === 'admin' || this.user === 'zhangsan' ||this.user === 'lisi'){
                        this.isshow = true;
                    }
            }
        },
        directives:{
    check:{
        inserted(el, binding, vnode){
            if(binding.value === 'admin' || binding.value === 'zhangsan' || binding.value === 'lisi'){
                vnode.context.isshow = true;
                }
                 },
                 update(el, binding, vnode){
            if(binding.value === 'admin' || binding.value === 'zhangsan' || binding.value === 'lisi'){
                vnode.context.isshow = true;
                }
                 },
            }
        }

    }
</script>

<style >

</style>