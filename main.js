var comment=false;
var folder_list=true;

var count = 0; //annotation의 개수를 카운트
var folder_name;
var comment_list_div;


var count = 0;

var add_folder_isClicked = false;

window.onload = function () {

	// 팝업 창 열기
	function onClick() {
		console.log("clicked");
        document.querySelector('.modal_wrap').style.display ='block';
        document.querySelector('.black_bg').style.display ='block';

    }   
	// 팝업 창 닫기
    function offClick() {
        document.querySelector('.modal_wrap').style.display ='none';
        document.querySelector('.black_bg').style.display ='none';

    }
 
//    document.getElementById('new_file_btn').addEventListener('click', onClick);
//	document.getElementById('new_file_btn').onclick = function() { 
//		onClick();
//
//	}
	
	 document.getElementById("new_file_btn").addEventListener("click", function(){   
		 console.log("1");
		 onClick();
//		 document.getElementById("new_file_btn").disabled = false; 
//	document.getElementById("new_file_btn").removeAttribute("disabled");
		 console.log("2");
	 });
	

    document.querySelector('.modal_close').addEventListener('click', offClick);



    document.getElementById("OK_btn").addEventListener("mousedown", function(){   
		count++; // 새 폴더 갯수 카운트

		add_folder(count); 

		offClick(); 
		document.getElementById("OK_btn")
    });
	

}

//새 폴더 생성
function add_folder(count) {
	console.log("count is " + count);
	folder_name = document.getElementById('folder_name').value;
	console.log("folder_name is " + folder_name);
	
	var file = document.getElementById('new_project_filechoose_btn');
	//파일 경로.
	var filePath = file.value;
	//전체경로를 \ 나눔.
	var filePathSplit = filePath.split('\\'); 
	//전체경로를 \로 나눈 길이.
	var filePathLength = filePathSplit.length;
	//마지막 경로를 .으로 나눔.
	var fileNameSplit = filePathSplit[filePathLength-1].split('.');
	//파일명 : .으로 나눈 앞부분
	var fileName = fileNameSplit[0];
	//파일 확장자 : .으로 나눈 뒷부분
	var fileExt = fileNameSplit[1];
	//파일 크기
	var fileSize = file.files[0].size;

	console.log('파일 경로 : ' + filePath);
	console.log('파일명 : ' + fileName);
	console.log('파일 확장자 : ' + fileExt);
	console.log('파일 크기 : ' + fileSize);
	
//	document.getElementById('folder').innerHTML=folder_name;
//	
//	var target = document.querySelector(".newfolder_list").cloneNode(true); 
//	document.querySelector(".file_list").innerHTML += target.innerHTML;	
	
	document.getElementById("folder_column").innerHTML +=
		'<td><div> <table class="newfolder_list" id="newfolder_list" style="float:left;"> <tr><td class="newproject_text" id="folder">' + folder_name + '</td></tr><tr><td class="newproject_text" id="folder_maker">만든 이 </td></tr><tr><td class="newproject_text" id="folder_imagename">' + fileName+'.'+fileExt+ '</td></tr></table></div></td>';
		console.log("new_file_list");
	
//		 document.getElementById("new_file_btn").disabled = false; 
//	document.getElementById("new_file_btn").removeAttribute("disabled");


}



