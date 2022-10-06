let maintitle = document.getElementById("maintitle");
let mainauthor = document.getElementById("mainauthor");
let sab1title = document.getElementById("sub1title");
let sub1author = document.getElementById("sub1author");
let sub2title = document.getElementById("sub2title");
let sub2author = document.getElementById("sub2author");
 

const list1 =["カラマーゾフの兄弟","ねじまき鳥クロニクル","こころ","パークライフ","砂の女","世界の終りとハードボイルド・ワンダーランド","1Q84","星々の舟","私の男","人間失格","海賊とよばれた男","向日葵の咲かない夏","理由","旅のラゴス","深夜特急","ジェノサイド","羊と鋼の森","夜のピクニック","黄色い目の魚","生きるぼくら","島はぼくらと","砂漠","明るい夜に出かけて","何者","すべてがFになる","楽園のカンヴァス","暗幕のゲルニカ","君の膵臓をたべたい","ゴールデンスランバー","十角館の殺人","新世界より","蜜蜂と遠雷"]
const list2 =["ドストエフスキー","村上春樹","夏目漱石","吉田修一","安部公房","村上春樹","村上春樹","村山由佳","桜庭一樹","太宰治","百田尚樹","道尾秀介","宮部みゆき","筒井康隆","沢木耕太郎","高野和明","宮下奈都","恩田陸","佐藤多佳子","原田マハ","辻村深月","伊坂幸太郎","佐藤多佳子","朝井リョウ","森博嗣","原田マハ","原田マハ","住野よる","伊坂幸太郎","綾辻行人","貴志祐介","恩田陸"]

const main =(i) =>{
    maintitle.innerHTML = list1[i]
    mainauthor.innerHTML = list2[i]
};
const sub1 =(i) =>{
    sub1title.innerHTML = list1[i]
    sub1author.innerHTML = list2[i]
};
const sub2 =(i) =>{
    sub2title.innerHTML = list1[i]
    sub2author.innerHTML = list2[i]
};

const result = (a,b,c) =>{
    main(a);
    sub1(b);
    sub2(c);
}



let level = sessionStorage.getItem('level');
let move = sessionStorage.getItem('move');
let after = sessionStorage.getItem('after');

if(level>=35){
    result(0,1,4);
} else if(level>=31 && move<7){
    result(1,3,2);
} else if(level>=31 && move>=7 && move<14){
    result(5,8,4);
} else if(level>=25 && move>=7 && move<14) {
    result(6,7,10);
} else if(move<7){
    result(3,1,2);
} else if(level>=31 && move<20){
    result(9,31,10);
} else if(level>=31 && move >=22){
    result(14,15,13);
} else if(level>=31){
    result(13,12,31);
} else if(level>=25 &&move<22){
    result(31,13,25);
} else if(move>=22){
    result(15,30,14);
} else if(move<10){
    result(17,16,18);
} else if(move<14){
    result(20,19,17);
} else if(move<17){
    result(21,22,20);
} else if(move<20 && after>=15){
    result(25,27,20);
} else if(move<20){
    result(23,24,27);
} else if(move<23){
    result(28,29,25);
} else{
    result(25,15,21)
}



