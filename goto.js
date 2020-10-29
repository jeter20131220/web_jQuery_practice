
$("*").each(function (index, element) {
    $(this).click(function (e) { 
       var target = $(this).attr("data-gt-target");
       var duration = $(this).attr("data-gt-duration");
       var offset= $(this).attr("data-gt-offset");


    //    JS 語法:判斷式
    //    if(條件) {程式區塊}
    //    當條件成立，會執行程式區塊。
    
    //    如果 目標有資料 才會執行{} 內的程式
    if (target) {
        console.log("目標:" + target);
        console.log("時間:" + duration);
        console.log("位移:" + offset);

        // 上方位置=目標區塊.位移.上方位置
         var top = $(target).offset().top
         console.log("要前往網頁上方位置:" + top);
        // 網頁元素.動畫({上方捲動:指定元素-位移}，持續時間)
        // parseInt()將位移
        // 取得html元素的動畫

        $("html").animate({
            scrollTop: top - offset
        }, parseInt(duration));

    
    }
    });
});

// 避免動畫與使用者滾輪衝突
// html在滾動滾輪時停止 html 所有效果

$("html").on("mousewheel", function () {
    $("html").stop();
    
});