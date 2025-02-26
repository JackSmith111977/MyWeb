/* 
    1、var关键字 是函数级作用域，必须要函数才能隔断;存在变量提升现象;作用域内允许重复声明
    2、let关键字 是块级作用域，大括号可以隔断;不存在变量提升现象;作用域内不允许重复声明
*/
var a = [];
for(let i = 0; i <10 ; i++){
    a[i] = function(){
        console.log(i);//块级作用域，为函数中的i赋了值
    }
}
console.log("let:")
for(let i = 0; i<10; i++){
    a[i]();//0~9
}
var b = [];
for(var i = 0; i < 10; i++){
    b[i] = function(){
        console.log(i);//函数级作用域，没有为i赋值，打印的是最终的i
    }
}
console.log("var:");
for(let i = 0; i<10 ;i++){
    b[i]();//10
}
/*es6 允许 const 声明常量,块级作用域,不存在变量提升*/
const PI = 3.1415;

/*对象的解构赋值*/
var person = {
    pname : "Qxy",
    age : 20,
}
//就是将成员专属于某个对象
const {pname,age} = person;
console.log(pname,age);

const {log} = console;
log(pname,age);

const {abs,random,ceil,floor,max} = Math;
log(random());

/*Unicode 字符串拓展*/
log("\u0061");
log("\u0062");
log("\u0063")
//for i of str 遍历字符串
var str0 = "MyGO!!!!!";
for(let i of str0){
    console.log(i);
}
//动态标签 在字符串中嵌入 "+str+"来添加动态内容
var urlBilibili = "www.bilibili.com";
var bName = "Bilibili";
var tagBilibili = "<a url=\""+urlBilibili+"\">"+bName+"</a>";
console.log(tagBilibili);

//字符串模板 通过反引号 "``" ,在字符串中以 "${str}" 形式添加动态内容
var tagBilibili2 = `<a href="${urlBilibili}">${bName}</a>`;
log(tagBilibili2);

/*字符串新增方法*/

//includes() 返回布尔值，是否找到参数字符串
//startsWith() 返回布尔值，表示参数字符串是否在原字符串的头部
//endsWith() 返回布尔值，表示参数字符串是否在原字符串的尾部

//indexOf() 返回子串开始位置，或-1
var str1 = "Crychic"
var str2 = "Ave Mujica";
console.log(str2.includes("e M"));
console.log(str2.startsWith("Av"));
log(str1.startsWith("Av"));
console.log(str2.endsWith("Mujica"));

//repeat(n) 返回新的字符串，表示原字符串重复三次
console.log(str2.repeat(10));

//padStart(n,str) 若字符串不满足长度n，则用str在头部补全
//padEnd(n,str) 若字符串不满足长度n，则用str在尾部补全
//都不改变原字符串
log(str2.padEnd(20,str1));
log(str1.padStart(20,str2));
log(str1);
log(str2);

//trimStart() 去掉头部空格
//trimEnd() 去掉尾部空格

var str3 = " Poppin Party ";
log(str3.trimEnd());
log(str3.trimStart());

//at(n) 若n为正数，从*0*开始数返回第n个字符，若n为负数，则从右边从*1*开始数返回第n个字符
log(str3.at(5)); //i
log(str3.at(-5));//a

/*数组-拓展运算符*/
//"..." 拓展运算符，可以展开数组
var arr0 = [1,2,3,4,5,6,7,8,9];
log(...arr0);

//apply() 借用
log(max.apply(null,arr0));
//同样效果
log(max(...arr0));

//数组合并
log(arr0.concat([10,11,12,13,14,15]));
//同样效果
log(...arr0,...[10,11,12,13,14,15]);

/*数组新增方法*/
//类数组 只能使用数组的读取方法，而不能使用数组的操作方法
//Array.from() 能够将类数组转换成真正的数组
//1.arguments
function Ag(){
    console.log(arguments);
    console.log(arguments[2]);

    log(Array.from(arguments));
}
Ag(10,"Anon","MyGO","Ave Mujica");

//2.元素集合
var Divs = document.getElementsByClassName("a");
console.log(Divs);

log(Array.from(Divs));

//3.类似数组的对象
var fakeArr = {
    0 : "f",
    1 : "a",
    2 : "k",
    3 : "e",
    length : 4,
}
console.log(fakeArr[2]);
console.log(fakeArr.length);

log(Array.from(fakeArr));

//Array.of() 可以将一组元素转换成数组

log(Array.of(10,"Grils","Band","Cry"));

/*对象的拓展*/

//简洁表示法 外部声明
//[x]: 动态成员名
//"..." 拓展运算符也可以用于展开成员
var name0 = "Anon";
var age0 = 17;
var randid = random();
function PrintThis(){
    log(this);
}
var Chihaya = {
    name0,
    age0,
    PrintThis,
    [randid]:114514,
}
var Anon_Tokyo = {
    job : "Guitar",
    ...Chihaya,
}
log(Chihaya.name0,Chihaya.age0);
Chihaya.PrintThis();
log(Anon_Tokyo);

/*函数拓展方法*/

//同一种函数的三种定义
//传统法
function fn1(x,y){
    return x+y;
}
function fn11(x,y){
    return{x,y};
}
//赋值法
var fn2 = function(x,y){
    return x+y;
}
var fn22 = function(x,y){
    return{x,y};
}
//箭头法 不存在内部函数的this指针，所用this为上层作用域中引用的this
var fn3 = (x,y) => x+y;
var fn33 = (x,y) => ({x,y});

var text = fn33(10,20);
log(text);
//箭头法用于简化回调函数
var arr1 = [11,22,33];
arr1.map(function(elements,index){
    log(elements);
})
arr1.map((elements,index) => {
    log(elements);
})

/*Set 数据结构*/
//Set 结构内不允许重复数据
var set0 = new Set();

//往Set 结构里添加数据

//数组添加法
var arr2 = [1,2,3,4,5,1,2,3,7,8,9,6];
arr2.forEach(x => set0.add(x));
// 本质
// for(let i = 0; i<arr2.length ;i++){
//     set0.add(arr2[i]);
// }
//构造添加法
var set1 = new Set(arr2);

log(set0);
log(set1);
//Set 也可以使用拓展运算符
//数组去重
arr2 = [...set1];
log(arr2);

//字符串去重
var str0 = [...new Set("Ave Mujica Ave Mujica")].join("");
log(str0);
/*Set 的操作方法*/
//add(x) 往Set里面添加x
//delete(x) 往Set里面删除x，返回布尔值，表示删除与否
//has(x) 往Set里面检查是否有x
//clear() 清空Set
var set2 = new Set("MyGO!!!!!MyGO!!!!!");
set2.add("Crychic");
log(set2);
set2.delete("!");
log(set2);
log(set2.has("!"));
log(set2.has("MyGO"));
log(set2.has("Crychic"));
//set2.clear();
log(set2);

/*Promise 对象*/
//解决了异步操作的回调复杂的问题

//图片加载函数
function loadImage(url){
    //resolve 成功
    //reject 失败
    const promise0 = new Promise(function(resolve,reject){
        //异步处理 消耗时间的代码
        //创建图片对象
        const image0 = new Image();
        //赋值图片加载链接
        image0.src = url;
        image0.style.maxHeight = "300px";
        image0.style.display = "inline";
        image0.style.padding = "2px";
        //加载成功，返回图片对象
        image0.onload = function(){
            resolve(image0);
        }
        //加载失败，返回错误信息
        image0.onerror = function(){
            reject(new Error("Could not load image at",url));
        }
    })

    return promise0;
}
//promise 调用

const promise1 = loadImage("https://github.com/JackSmith111977/My-Repository/blob/main/image/118645167_p0.png?raw=true");
var p1 = document.getElementById("promise1");
//成功
promise1.then(function(data){
    p1.appendChild(data);
},function(error){
//失败
    p1.innerHTML = "图片加载失败";
    //打印错误信息
    console.log(error);
})

const promise2 = loadImage("https://github.com/JackSmith111977/My-Repository/blob/main/image/118645167_p1.png?raw=true");
//箭头函数写法
promise2.then((data) => p1.appendChild(data),(error) => {p1.innerHTML = "图片加载失败";console.log(error);});
