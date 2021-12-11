function getUrlVar(){
    var urlVar = window.location.search; // получаем параметры из урла
    var arrayVar = []; // массив для хранения переменных
    var valueAndKey = []; // массив для временного хранения значения и имени переменной
    var resultArray = []; // массив для хранения переменных
    arrayVar = (urlVar.substr(1)).split('&'); // разбираем урл на параметры
    if(arrayVar[0]=="") return false; // если нет переменных в урле
    for (i = 0; i < arrayVar.length; i ++) { // перебираем все переменные из урла
        valueAndKey = arrayVar[i].split('='); // пишем в массив имя переменной и ее значение
        resultArray[valueAndKey[0]] = valueAndKey[1]; // пишем в итоговый массив имя переменной и ее значение
    }
    return resultArray; // возвращаем результат
}
async function postGet(){
var get_url = getUrlVar();
var channel_id = get_url['channel_id'];
var post_id = get_url['post_id'];
var response = await fetch(`https://jsonbase.tk/api/wall.find?channel_id=${channel_id}&post_id=${post_id}`);
var post = document.getElementById("postGet");
var post_get= await response.json();
let key;
let name;
for(key in post_get.wall){
	let channel = post_get.wall[key].title;
	let icon =  post_get.wall[key].icon;
	let photo = post_get.wall[key].photo;
	let text = post_get.wall[key].text;
	let like = post_get.wall[key].like;
	let watch = post_get.wall[key].watch;
	console.log(text);
}
}