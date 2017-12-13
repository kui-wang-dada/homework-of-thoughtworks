<template>
    <div class="agents">
        <div class="titleBar">
            <h3>Dashboard</h3>
            <span>All</span>
            <span class="active">Physical</span>
            <span>Virtual</span>
        </div>
        <div class="agentsMain">
            <div class="leftContent">
                hello,i am dashboard
            </div>
            <div class="rightContent">
            
            </div>
        </div>
    
    
    </div>
</template>

<script>
    export default {
        name: 'agents',
        data() {
            return {
            
            }
        },
       
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped type="text/scss" lang="scss" rel="stylesheet/scss">
    .agents {
        position: relative;
        top: -2px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .titleBar {
            width: 100%;
            height: 50px;
            display: flex;
            box-sizing:border-box;
            border:2px solid #242424;
            border-bottom:none;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            background: #606060;
            h3 {
                color: #efefef;
                margin-left: 10px;
            }
            span {
                margin-left: 10px;
                width: 80px;
                padding: 5px 0;
                border-radius: 10px;
                background: #999999;
                border: 1px solid #000000;
                color: #000;
            }
            span.active {
                background: #dbdbdb;
            }
        }
        .agentsMain {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            .leftContent {
                flex: 0.8;
                padding: 20px;
                border: 2px solid #242424;
                border-right:none;
                display: flex;
                flex-direction: column;
                align-items: center;
             
                
            }
            .rightContent {
                border: 2px solid #242424;
                display: flex;
                flex-direction: column;
                flex: 0.2;
                align-items: left;
                padding: 10px;
                div {
                    width: 100%;
                    text-align: left;
                    font-size:12px;
                }
            
                
            }
        }
        @media screen and (max-width: 700px) {
            .agentsMain {
                flex-direction: column;
                .leftContent {
                    padding: 0;
                    margin: 0;
                    ul li .wrap .circle {
                        width: 0;
                        height:0;
                        
                    }
                }
                
            }
        }
        @media screen and (max-width:350px){
            .agentsMain .leftContent ul li{
                flex-direction:column;
                .wrap .main .title span.type{
                    display:block;
                    border:none;
                    margin-top:5px;
                }
                .wrap .main .content .specify{
                    display:block;
                }
                .deny{
                    align-self:center;
                }
            }
            
        }
        
    }


</style>
