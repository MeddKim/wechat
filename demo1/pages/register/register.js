var app = getApp()
Page({
    data: {
        text: "init data",
        array: [{ text: "init data" }],
        object: {
            text: 'init data'
        }
    },
    onLoad: function () {

    },
    onPullDownRefresh: function () {
        console.log("下拉刷新");
    },
    viewTap: function () {
        console.log("view tap");
    },
    changeText: function () {
        this.setData({
            text: "changed data"
        });
    },
    changeText: function () {
        this.setData({
            text: "changed data"
        });
    },
    changeItemInArray: function () {
        this.setData({
            'array[0].text': 'changed data'
        })
    },
    changeItemInObject:function(){
        this.setData({
            object:{
                text:"changed data"
            }
        })
    },
    addNewField:function(){
        this.setData({
            "newField.text":"changed data"
        });
    },
    redirect:function(){
        wx.navigateTo({
          url: '../index/index'
        })
    }
})