/* 
    1��var�ؼ��� �Ǻ����������򣬱���Ҫ�������ܸ���;���ڱ�����������;�������������ظ�����
    2��let�ؼ��� �ǿ鼶�����򣬴����ſ��Ը���;�����ڱ�����������;�������ڲ������ظ�����
*/
var a = [];
for(let i = 0; i <10 ; i++){
    a[i] = function(){
        console.log(i);//�鼶������Ϊ�����е�i����ֵ
    }
}
console.log("let:")
for(let i = 0; i<10; i++){
    a[i]();//0~9
}
var b = [];
for(var i = 0; i < 10; i++){
    b[i] = function(){
        console.log(i);//������������û��Ϊi��ֵ����ӡ�������յ�i
    }
}
console.log("var:");
for(let i = 0; i<10 ;i++){
    b[i]();//10
}
/*es6 ���� const ��������,�鼶������,�����ڱ�������*/
const PI = 3.1415;

/*����Ľ⹹��ֵ*/
var person = {
    pname : "Qxy",
    age : 20,
}
//���ǽ���Աר����ĳ������
const {pname,age} = person;
console.log(pname,age);

const {log} = console;
log(pname,age);

const {abs,random,ceil,floor,max} = Math;
log(random());

/*Unicode �ַ�����չ*/
log("\u0061");
log("\u0062");
log("\u0063")
//for i of str �����ַ���
var str0 = "MyGO!!!!!";
for(let i of str0){
    console.log(i);
}
//��̬��ǩ ���ַ�����Ƕ�� "+str+"����Ӷ�̬����
var urlBilibili = "www.bilibili.com";
var bName = "Bilibili";
var tagBilibili = "<a url=\""+urlBilibili+"\">"+bName+"</a>";
console.log(tagBilibili);

//�ַ���ģ�� ͨ�������� "``" ,���ַ������� "${str}" ��ʽ��Ӷ�̬����
var tagBilibili2 = `<a href="${urlBilibili}">${bName}</a>`;
log(tagBilibili2);

/*�ַ�����������*/

//includes() ���ز���ֵ���Ƿ��ҵ������ַ���
//startsWith() ���ز���ֵ����ʾ�����ַ����Ƿ���ԭ�ַ�����ͷ��
//endsWith() ���ز���ֵ����ʾ�����ַ����Ƿ���ԭ�ַ�����β��

//indexOf() �����Ӵ���ʼλ�ã���-1
var str1 = "Crychic"
var str2 = "Ave Mujica";
console.log(str2.includes("e M"));
console.log(str2.startsWith("Av"));
log(str1.startsWith("Av"));
console.log(str2.endsWith("Mujica"));

//repeat(n) �����µ��ַ�������ʾԭ�ַ����ظ�����
console.log(str2.repeat(10));

//padStart(n,str) ���ַ��������㳤��n������str��ͷ����ȫ
//padEnd(n,str) ���ַ��������㳤��n������str��β����ȫ
//�����ı�ԭ�ַ���
log(str2.padEnd(20,str1));
log(str1.padStart(20,str2));
log(str1);
log(str2);

//trimStart() ȥ��ͷ���ո�
//trimEnd() ȥ��β���ո�

var str3 = " Poppin Party ";
log(str3.trimEnd());
log(str3.trimStart());

//at(n) ��nΪ��������*0*��ʼ�����ص�n���ַ�����nΪ����������ұߴ�*1*��ʼ�����ص�n���ַ�
log(str3.at(5)); //i
log(str3.at(-5));//a

/*����-��չ�����*/
//"..." ��չ�����������չ������
var arr0 = [1,2,3,4,5,6,7,8,9];
log(...arr0);

//apply() ����
log(max.apply(null,arr0));
//ͬ��Ч��
log(max(...arr0));

//����ϲ�
log(arr0.concat([10,11,12,13,14,15]));
//ͬ��Ч��
log(...arr0,...[10,11,12,13,14,15]);

/*������������*/
//������ ֻ��ʹ������Ķ�ȡ������������ʹ������Ĳ�������
//Array.from() �ܹ���������ת��������������
//1.arguments
function Ag(){
    console.log(arguments);
    console.log(arguments[2]);

    log(Array.from(arguments));
}
Ag(10,"Anon","MyGO","Ave Mujica");

//2.Ԫ�ؼ���
var Divs = document.getElementsByClassName("a");
console.log(Divs);

log(Array.from(Divs));

//3.��������Ķ���
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

//Array.of() ���Խ�һ��Ԫ��ת��������

log(Array.of(10,"Grils","Band","Cry"));

/*�������չ*/

//����ʾ�� �ⲿ����
//[x]: ��̬��Ա��
//"..." ��չ�����Ҳ��������չ����Ա
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

/*������չ����*/

//ͬһ�ֺ��������ֶ���
//��ͳ��
function fn1(x,y){
    return x+y;
}
function fn11(x,y){
    return{x,y};
}
//��ֵ��
var fn2 = function(x,y){
    return x+y;
}
var fn22 = function(x,y){
    return{x,y};
}
//��ͷ�� �������ڲ�������thisָ�룬����thisΪ�ϲ������������õ�this
var fn3 = (x,y) => x+y;
var fn33 = (x,y) => ({x,y});

var text = fn33(10,20);
log(text);
//��ͷ�����ڼ򻯻ص�����
var arr1 = [11,22,33];
arr1.map(function(elements,index){
    log(elements);
})
arr1.map((elements,index) => {
    log(elements);
})

/*Set ���ݽṹ*/
//Set �ṹ�ڲ������ظ�����
var set0 = new Set();

//��Set �ṹ���������

//������ӷ�
var arr2 = [1,2,3,4,5,1,2,3,7,8,9,6];
arr2.forEach(x => set0.add(x));
// ����
// for(let i = 0; i<arr2.length ;i++){
//     set0.add(arr2[i]);
// }
//������ӷ�
var set1 = new Set(arr2);

log(set0);
log(set1);
//Set Ҳ����ʹ����չ�����
//����ȥ��
arr2 = [...set1];
log(arr2);

//�ַ���ȥ��
var str0 = [...new Set("Ave Mujica Ave Mujica")].join("");
log(str0);
/*Set �Ĳ�������*/
//add(x) ��Set�������x
//delete(x) ��Set����ɾ��x�����ز���ֵ����ʾɾ�����
//has(x) ��Set�������Ƿ���x
//clear() ���Set
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

/*Promise ����*/
//������첽�����Ļص����ӵ�����

//ͼƬ���غ���
function loadImage(url){
    //resolve �ɹ�
    //reject ʧ��
    const promise0 = new Promise(function(resolve,reject){
        //�첽���� ����ʱ��Ĵ���
        //����ͼƬ����
        const image0 = new Image();
        //��ֵͼƬ��������
        image0.src = url;
        image0.style.maxHeight = "300px";
        image0.style.display = "inline";
        image0.style.padding = "2px";
        //���سɹ�������ͼƬ����
        image0.onload = function(){
            resolve(image0);
        }
        //����ʧ�ܣ����ش�����Ϣ
        image0.onerror = function(){
            reject(new Error("Could not load image at",url));
        }
    })

    return promise0;
}
//promise ����

const promise1 = loadImage("https://github.com/JackSmith111977/My-Repository/blob/main/image/118645167_p0.png?raw=true");
var p1 = document.getElementById("promise1");
//�ɹ�
promise1.then(function(data){
    p1.appendChild(data);
},function(error){
//ʧ��
    p1.innerHTML = "ͼƬ����ʧ��";
    //��ӡ������Ϣ
    console.log(error);
})

const promise2 = loadImage("https://github.com/JackSmith111977/My-Repository/blob/main/image/118645167_p1.png?raw=true");
//��ͷ����д��
promise2.then((data) => p1.appendChild(data),(error) => {p1.innerHTML = "ͼƬ����ʧ��";console.log(error);});
