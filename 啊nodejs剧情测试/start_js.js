

var fs = require("fs");

// 打开json txt里面的文件
function juqinduqu(sensename){
    // var sensename = "开始对话剧情"
    var pathname = "啊nodejs剧情测试/json_txt/" + sensename + ".json";
    
    var data = fs.readFileSync(pathname);
    
    json_list = JSON.parse(data).A;		//将数据转换为 JavaScript对象。 
    
    
    // 准备一个选项的列表
    var xuanxiang_list = [];
    
    // 然后按照json的顺序开始循环
    
    for (var i = 0; i < json_list.length; ++i) {
        
        switch (json_list[i].type) {
            case "普通对话": 
                console.log(json_list[i].duihua);
                break;
            case "有头像的对话": 
                console.log("毛君露出了" + json_list[i].touxiang.replace("头像","表情") + "后说：" + json_list[i].duihua);;
                break;
            case "普通选项":
                var _data = json_list[i];
    
                xuanxiang_list.push(_data); 
                break;
            default: alert("Other");
        }


    
    
    }
    
    // 先随机取出基于选项条目的随机数 然后取值显示
    
    var xuanzhong_index = Math.floor(Math.random() * xuanxiang_list.length);
    
    console.log(xuanxiang_list[xuanzhong_index].text);

    // 返回接下来要去读取哪个场景json
    
    return xuanxiang_list[xuanzhong_index].juqin
}


var star_sense = "开始对话剧情";

while(true){
    star_sense = juqinduqu(star_sense)
}