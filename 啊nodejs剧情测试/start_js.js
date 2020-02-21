

var fs = require("fs");

var ZJ_SJ_f = require("./zhujiao");

var ZJ_SJ_DATA = new ZJ_SJ_f(); 

// 获取随机整数

function huoqusuijishu(length_int){

    var random_int = Math.floor(Math.random() * length_int)

    return random_int
}

// runjs的读取运行

function runjsduqu(json_list){
    for (var i = 0; i < json_list.length; ++i) {
        
        switch (json_list[i].type) {
            case "普通对话": 
                var pathname = "./shijian_js/" + json_list[i].type 
                var more_js = require(pathname);
                more_js.run_js(json_list[i]);
                break;
            case "主角世界变化": 
                var pathname = "./shijian_js/" + json_list[i].type 
                var more_js = require(pathname);
                more_js.run_js(json_list[i],ZJ_SJ_DATA);
                break;
            default: alert("Other");
        }

    
    }
}


// 根据type去输出

function juqinduqu(sensename){

    // 打开json txt里面的文件
    // var sensename = "开始对话剧情"
    var pathname = "啊nodejs剧情测试/json_txt/" + sensename + ".json";
    
    var data = fs.readFileSync(pathname);
    
    json_list = JSON.parse(data).A;		//将数据转换为 JavaScript对象。 
    
    
    // 然后按照json的顺序开始循环
    
    for (var i = 0; i < json_list.length; ++i) {
        
        switch (json_list[i].type) {
            case "普通对话": 
                console.log(json_list[i].duihua);
                break;
            case "有头像的对话": 
                console.log("毛君露出了" + json_list[i].touxiang.replace("头像","表情") + "后说：" + json_list[i].duihua);;
                break;
            case "普通单一选项组":
                var xuanxiang_list = json_list[i].data_list;
                // 先随机取出基于选项条目的随机数 然后取值显示
                
                var xuanzhong_index = huoqusuijishu(xuanxiang_list.length);
                
                console.log(xuanxiang_list[xuanzhong_index].text);

                // 选项是否有runjs 这个还要运行一下js
                if(xuanxiang_list[xuanzhong_index].runjs){
                    runjsduqu(xuanxiang_list[xuanzhong_index].runjs)
                }
                

                break;
            case "普通单一勾选组":
                var xuanxiang_list = json_list[i].data_list;
                // 先随机取出基于选项条目的随机数 然后取值显示
                
                var xuanzhong_index = huoqusuijishu(xuanxiang_list.length);
                
                console.log( json_list[i].text + xuanxiang_list[xuanzhong_index].text);

                // 选项是否有runjs 这个还要运行一下js
                if(xuanxiang_list[xuanzhong_index].runjs){
                    runjsduqu(xuanxiang_list[xuanzhong_index].runjs)
                }

                break;
            default: alert("Other");
        }


    
    
    }
    


    // 返回接下来要去读取哪个场景json
    
    return xuanxiang_list[xuanzhong_index].juqin
}


let star_sense = "开始对话剧情";

while(true){
    star_sense = juqinduqu(star_sense)
}