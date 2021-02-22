var comment=false;
var folder_list=true;

var folder =[]; //firebase에서 annotation의 값을 받아와서 저장할 array
var count = 0; //annotation의 개수를 카운트
var user_name = "user"; // firebase에서 값 받아와서 저장
var folder_name;
var comment_list_div;


var count = 0;

var add_folder_isClicked = false;

window.onload = function () {

	
	function onClick() {
        document.querySelector('.modal_wrap').style.display ='block';
        document.querySelector('.black_bg').style.display ='block';
    }   
    function offClick() {
        document.querySelector('.modal_wrap').style.display ='none';
        document.querySelector('.black_bg').style.display ='none';
    }
 
    document.getElementById('new_file_btn').addEventListener('click', onClick);
    document.querySelector('.modal_close').addEventListener('click', offClick);
	

    document.getElementById("OK_btn").onclick = function() {   
		offClick(); //팝업 창 닫는 함수
		folder_name = document.getElementById('folder_name').value;
//		console.log("folder_name is " + folder_name);

		add_folder(count); //새 폴더생성하는 함수
		count++; //생성되는 새폴더 갯수 새는 변수
		
		document.getElementById("OK_btn").disabled = true; 
//		add_folder(folder_name);
//		console.log("OK_btn is finised");
    }
}

function add_folder(count) {
  	console.log("count is " + count);
		folder_name = document.getElementById('folder_name').value;
		console.log("folder_name is " + folder_name);
		var target = document.querySelector(".newfolder_list").cloneNode(true); //all.mytable.cloneNode(true)
      	document.querySelector(".file_list").innerHTML += target.innerHTML;
}



