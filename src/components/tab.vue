<template>
    <div class="tab">
        <router-link tag="div" class="tab-item" to="/dashboard">
            <span class="tab-link">DASHBOARD</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/myCruise">
            <span class="tab-link">MY&nbsp;CRUISE</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/agents">
            <span class="tab-link">AGENTS</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/help">
            <span class="tab-link">HELP</span>
        </router-link>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>
<style scoped lang="scss" rel="stylesheet/scss" type="text/scss">
    .tab{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        height: 44px;
        line-height: 44px;
        font-size: 14px;
        .tab-item {
            border: 2px solid #242424;
            border-bottom:none;
            border-radius: 8px 8px 0 0;
            margin-left: 5px;
            text-align: center;
            .tab-link {
                padding-bottom: 5px;
                color: #282828;
                margin: 0 10px;
            }
        }
        .router-link-active{
               z-index:1;
                background:#606060;
            .tab-link{
                color:#fff;
            }
        }
       
    }
    @media screen and (max-width:700px){
        .tab{
            height:30px;
            line-height:30px;
            font-size:12px;
            
        }
    }
    
</style>
