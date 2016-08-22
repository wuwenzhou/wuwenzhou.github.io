  $(function(){
    jishi();
    })
    var timer;
    function clear(){
    window.clearInterval(timer);
    }
    function daojishi(){
    var hour=$("#hour");
    var minute=$("#mint");
    var second=$("#sce");
    var dingshi=new Date(2016,4,27,12,0,0);
    var dangqian=new Date();
    var dingshihh=dingshi.getHours();
    var dingshimm=dingshi.getMinutes();
    var dingshiss=dingshi.getSeconds();
    var dangqianhh=dangqian.getHours();
    var dangqianmm=dangqian.getMinutes();
    var dangqianss=dangqian.getSeconds();
    // 感觉时间设置上面好蠢，不应该这样
    // 要做时间判断是不是横跨一天才可以, 跨天还要
    var daojiss=dingshiss+60-dangqianss;
    var daojimm=dingshimm+59-dangqianmm;
    if(dingshihh>dangqianhh){
    var daojihh=dingshihh-1-dangqianhh;
    }
    else{daojihh=dingshihh+24-1-dangqianhh;
    }
    if(daojihh<10){
    $("#hour").html("0"+daojihh);
    }
    else{
    $("#hour").html(daojihh);
    }
    if(daojimm<10){
     $("#mint").html("0"+daojimm);
    }
    else{
    $("#mint").html(daojimm);
    }
    if(daojiss<10){
    $("#sce").html("0"+daojiss);
    }
    else{
    $("#sce").html(daojiss);
    }
    if(daojimm<0){
    // console.debug("cs")
    hour.html("00");
    minute.html("00");
    second.html("00");
    clear();
    }
    }
    function jishi(){
    timer=setInterval(daojishi,1000);
    }