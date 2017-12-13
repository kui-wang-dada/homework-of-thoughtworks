<template>
    <div id="app">
        <div class="header">
            <h1>Cruise</h1>
            <div class="header_right">
                <p>Signed in as <a href="">Member</a>
                    <i class="icon iconfont icon-right"></i>
                    <a href="">Sign out</a>
                </p>
                <tap></tap>
            </div>
        </div>
        <div class="content">
            <router-view/>
        </div>
    
    </div>
</template>

<script>
    import tap from "./components/tab";
    export default {
        name: 'app',
        components:{
            tap:tap,
        }
    }
</script>

<style type="text/scss" lang="scss" rel="stylesheet/scss">
    html,body{
        margin:0;
        padding:0;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        padding:50px;
        display:flex;
        flex-direction:column;
        
        .header{
            width:100%;
            display:flex;
            flex-direction:row;
            justify-content: space-between;
            h1{
                align-self:flex-end;
            }
            .header_right{
                flex:0.5;
                display:flex;
                flex-direction:column;
                p{
                    align-self:flex-end;
                    i{
                        margin-left:10px;
                    }
                }
            }
        }
        
    }
    @media screen and (max-width:700px){
        #app{
            width:100%;
            margin:0;
            padding:0;
            .header{
                flex-direction:column;
                h1{
                    align-self:center;
                    margin:0;
                }
                .header_right{
                    align-items:center;
                    p{
                        align-self:center;
                    }
                }
            }
        }
        
    }
  
    
</style>
