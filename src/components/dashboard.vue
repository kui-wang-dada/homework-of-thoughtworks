agents.vue<template>
    <div class="agents">
        <div class="leftContent">
            <ul>
                <li v-for="item in recommends" @click="addHistory(item)">
                    <div class="wrap">
                        <div class="circle"></div>
                        <div class="main">
                            <div class="title">
                                <h4>{{item.title.name}}</h4>
                                <span class="type" v-for="item_s in item.title.typelist">{{item_s}}</span>
                            </div>
                            <div class="content">
                            <span class="specify">
                                <i class="icon iconfont icon-add1"></i>
                                <a href="">{{item.add}}</a>
                            </span>
                                <span class="resources" v-for="item_h in item.resources">{{item_h}}<i class="icon iconfont icon-false"></i></span>
                                
                            </div>
                        </div>
                    </div>
                    <div class="deny"><i class="icon iconfont icon-forbidden"></i> Deny</div>
                </li>
            </ul>
        </div>
        <div class="rightContent">
            <div class="summary">
                <h3>Summary</h3>
                <hr>
                <p>building<span>2</span></p>
                <p>idle<span>2</span></p>
            </div>
            <div class="history">
                <h3>History</h3>
                <hr>
                <p v-for="his in history">{{his}}</p>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: 'agents',
        data() {
            return {
                recommends: [
                    {
                        listId: 0,
                        title: {
                            name: "bjstdmngbgr02.thoughtworks.com",
                            typelist: [
                                "idle",
                                "192.168.1.2",
                                "/var/lib/cruise-agent"
                            ],
                        },
                        add: "Specify Resources",
                        resources: [
                            "Resources:ubuntu",
                            "firefox3",
                            "core-duo"
                        ]
                    },
                    {
                        listId: 1,
                        title: {
                            name: "bjstdmngbgr03.thoughtworks.com",
                            typelist: [
                                "building",
                                "192.168.1.2",
                                "/var/lib/cruise-agent"
                            ],
                        },
                        add: "Specify Resources",
                        resources: [
                            "Resources:ubuntu",
                            "firefox3",
                            "core-duo"
                        ]
                    },
                    {
                        listId: 2,
                        title: {
                            name: "bjstdmngbgr04.thoughtworks.com",
                            typelist: [
                                "building",
                                "192.168.1.2",
                                "/var/lib/cruise-agent"
                            ],
                        },
                        add: "Specify Resources",
                        resources: [
                            "Resources:ubuntu",
                            "firefox3",
                            "core-duo"
                        ]
                    },
                    {
                        listId: 3,
                        title: {
                            name: "bjstdmngbgr05.thoughtworks.com",
                            typelist: [
                                "idle",
                                "192.168.1.2",
                                "/var/lib/cruise-agent"
                            ],
                        },
                        add: "Specify Resources",
                        resources: [
                            "Resources:ubuntu",
                            "firefox3",
                            "core-duo"
                        ]
                    }
                
                ],
                Summary:[],
                history:[
                    "bjstdmngbgr02/Acceptance_test",
                    "bjstdmngbgr02/Acceptance_test",
                    "bjstdmngbgr02/Acceptance_test",
                ]
            }
        },
        methods:{
            addHistory(item){
                let spi=item.title.name.split(".")[0];
                let arr= spi+"/"+"Acceptance_test";
                this.history.push(arr);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped type="text/scss" lang="scss" rel="stylesheet/scss">
    .agents{
        width:100%;
        display:flex;
        flex-direction: row;
        justify-content: center;
        .leftContent{
            flex:0.8;
            padding:20px;
            border:1px solid #ededed;
            display:flex;
            flex-direction: column;
            align-items: center;
            ul{
                margin:0;
                padding:0;
                width:100%;
                li {
                    margin:20px 0;
                    display: flex;
                    flex-direction: row;
                    align-items: baseline;
                    justify-content: space-between;
                    width: 100%;
                    background: #cce8b5;
                    border: 1px solid #000000;
                    list-style: none;
                    border-radius: 5px;
                    .wrap{
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-around;
                        .circle{
                            float: left;
                            width: 50px;
                            height: 50px;
                            margin:0 15px;
                            border-radius: 25px;
                            background: #ababab;
                        }
                        .main{
                            display:flex;
                            flex-direction: column;
                            align-items: left;
                            .title {
                                font-weight:bold;
                                h4{
                                    display: inline-block;
                                }
                                span.type{
                                    border-left: 1px solid #282828;
                                    margin-left: 20px;
                                    padding-left: 10px;
                                }
                            }
                            .content{
                                margin-bottom:10px;
                                font-size:14px;
                                .specify{
                                    i{
                                        font-size:12px;
                                        margin-right:5px;
                                    }
                                    border-right:1px solid #282828;
                                    margin-right:5px;
                                    padding-right:5px;
                                }
                                .resources{
                                    margin-right:20px;
                                }
                            }
                
                
                        }
                    }
                    .deny{
                        float:right;
                        margin-right:20px;
                        align-items:flex-end;
                    }
                }
            }
           
        }
        .rightContent{
            border:1px solid #282828;
            display:flex;
            flex-direction: column;
            align-items: left;
            padding:20px;
            div{
                width:100%;
                text-align:left;
            }
            div.summary{
                p{
                    position:relative;
                    span{
                        position:absolute;
                        left:50%;
                    }
                }
            }
           
        }
    }
   
    
    
</style>
