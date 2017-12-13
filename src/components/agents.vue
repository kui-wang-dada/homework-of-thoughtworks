<template>
    <div class="agents">
        <div class="titleBar">
            <h3>Agents</h3>
            <span>All</span>
            <span class="active">Physical</span>
            <span>Virtual</span>
        </div>
        <div class="agentsMain">
            <div class="leftContent">
                <ul>
                    <li v-for="item in recommends" @click="addHistory(item)" :class="item.isChoose">
                        <div class="wrap">
                            <div class="circle"></div>
                            <div class="main">
                                <div class="title">
                                    <h4>{{item.title.name}}</h4>
                                    <span class="type" v-for="item_s in item.title.typelist">{{item_s}}</span>
                                </div>
                                <div class="content">
                                    <span class="specify" @click.stop="showDialog(item)">
                                        <i class="icon iconfont icon-add1"></i>
                                        <a href="javascript:void(0)">{{item.add}}</a>
                                    </span>
                                    <span>Resources:</span>
                                    <span class="resources" v-for="item_h in item.resources">{{item_h}}
                                        <i class="icon iconfont icon-false"
                                           @click.stop="delResources(item,item_h)"></i></span>
                                    <div v-show="item.isShow" class="modal">
                                        <h6>(separate multiple resources name with commas)</h6>
                                        <input type="text" @click.stop v-model="item.inputMsg">
                                        <div class="modal_btn">
                                            <input type="button" value="Add resources"  @click.stop="addResource(item)">
                                            <input type="button" value="Close" @click.stop="cancelResource(item)">
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                        <div class="deny"><i class="icon iconfont icon-forbidden"></i>Deny</div>
                    
                    </li>
                </ul>
            </div>
            <div class="rightContent">
                <div class="summary">
                    <h3>Summary</h3>
                    <hr>
                    <p v-for="item in Summary">{{item.name}}<span>{{item.count}}</span></p>
                
                </div>
                <div class="history">
                    <h3>History</h3>
                    <hr>
                    <p v-for="item in history">{{item}}</p>
                </div>
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
                        isShow: false,
                        isChoose: "",
                        inputMsg:"",
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
                            "ubuntu",
                            "firefox3",
                            "core-duo"
                        ]
                    },
                    {
                        listId: 1,
                        isShow: false,
                        isChoose: "",
                        inputMsg:"",
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
                            "ubuntu",
                            "firefox3",
                            "mysql",
                            "core-duo"
                        ]
                    },
                    {
                        listId: 2,
                        isShow: false,
                        isChoose: "",
                        inputMsg:"",
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
                            "ubuntu",
                            "firefox3",
                            "mysql",
                            "core-duo"
                        ]
                    },
                    {
                        listId: 3,
                        isShow: false,
                        isChoose: "",
                        inputMsg:"",
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
                            "ubuntu"
                            
                        ]
                    },
                    {
                        listId: 4,
                        isShow: false,
                        isChoose: "",
                        inputMsg:"11",
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
                            "ubuntu",
                            "firefox3",
                            "core-duo"
                        ]
                    }
                
                ],
                Summary: [
                    {
                        name: "idle",
                        count: ''
                    },
                    {
                        name: "building",
                        count: ''
                    }
                ],
                history: [
                    "bjstdmngbgr02/Acceptance_test",
                    "bjstdmngbgr02/Acceptance_test",
                    "bjstdmngbgr02/Acceptance_test",
                ]
            }
        },
        created() {
            this.getStyle();
        },
        methods: {
            getStyle() {
                for (let i = 0; i < this.recommends.length; i++) {
                    if (this.recommends[i].title.typelist[0] == "idle") {
                        this.recommends[i].isChoose = "idle"
                        this.Summary[0].count++;
                    } else if (this.recommends[i].title.typelist[0] == "building") {
                        this.recommends[i].isChoose = "building"
                        this.Summary[1].count++;
                    }
                }
            },
            addHistory(item) {
                let spi = item.title.name.split(".")[0];
                let arr = spi + "/" + "Acceptance_test";
                this.history.push(arr);
            },
            delResources(item, item_h) {
                this.recommends[item.listId].resources = this.recommends[item.listId].resources.filter(o => o != item_h)
                
            },
            showDialog(item){
                item.isShow=true;
            },
            addResource(item) {
                let listId=item.listId
                let arr=this.recommends[listId].inputMsg.split(",");
                this.recommends[listId].resources=this.recommends[listId].resources.concat(arr);
                this.recommends[listId].isShow=false;
                this.recommends[listId].inputMsg=""
            },
            cancelResource(item){
                item.isShow=false;
            }
        }
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
                ul {
                    margin: 0;
                    padding: 0;
                    width: 100%;
                    li {
                        margin: 20px 0;
                        display: flex;
                        flex-direction: row;
                        align-items: baseline;
                        justify-content: space-between;
                        width: 100%;
                        border: 1px solid #000000;
                        list-style: none;
                        border-radius: 5px;
                        .wrap {
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            justify-content: space-around;
                            .circle {
                                float: left;
                                width: 50px;
                                height: 50px;
                                margin: 0 15px;
                                border-radius: 25px;
                                background: #ababab;
                            }
                            .main {
                                display: flex;
                                flex-direction: column;
                                align-items: left;
                                .title {
                                    font-weight: bold;
                                    h4 {
                                        display: inline-block;
                                        margin:10px 0 5px 0;
                                    }
                                    span.type {
                                        border-left: 1px solid #282828;
                                        font-size: 14px;
                                        margin-left: 10px;
                                        padding-left: 10px;
                                    }
                                }
                                .content {
                                    margin:5px 0 10px 0;
                                    font-size: 14px;
                                    position: relative;
                                    .specify {
                                        i {
                                            font-size: 12px;
                                            margin-right: 5px;
                                        }
                                        a{
                                            color:#503e00;
                                        }
                                        border-right: 1px solid #282828;
                                        margin-right: 5px;
                                        padding-right: 5px;
                                    }
                                    .resources {
                                        margin-right: 10px;
                                        i{
                                            align-self:flex-end;
                                        }
                                    }
                                    .modal {
                                        z-index: 999;
                                        background: #dffbc8;
                                        width: 100%;
                                        border: 2px solid #503e00;
                                        position: absolute;
                                        left: 20px;
                                        top: 40px;
                                        display:flex;
                                        flex-direction:column;
                                        align-items: flex-start;
                                        border-radius:10px;
                                        h6{
                                            text-align: left;
                                            margin:10px;
                                        }
                                        input[type="text"]{
                                            margin:0 10px ;
                                            width:90%;
                                        }
                                        .modal_btn{
                                            margin:10px;
                                            input{
                                                border:2px solid #503e00;
                                                margin-right:10px;
                                                padding:5px 10px;
                                                border-radius:20px;
                                            }
                                        }
                                    }
                                    .modal::before{
                                        content:'';
                                        position:absolute;
                                        z-index:-1;
                                        top:-18px;
                                        left:30px;
                                        width:30px;
                                        height:30px;
                                        border-left:2px solid #503e00;
                                        border-top:2px solid #503e00;
                                        background:#dffbc8;
                                        transform: rotate(45deg);
                                    }
                                }
                                
                            }
                        }
                        .deny {
                            float: right;
                            margin-right: 20px;
                            align-items: flex-end;
                        }
                    }
                    li.idle {
                        background: #cce8b5;
                    }
                    li.building {
                        background: #fef9c1;
                    }
                }
                
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
                div.summary {
                    p {
                        position: relative;
                        span {
                            position: absolute;
                            left: 50%;
                        }
                    }
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
