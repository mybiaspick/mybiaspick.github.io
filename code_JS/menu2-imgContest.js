

  	function ImgPick(clicked_id) {
		// <아이디에서 번호 부분만 추출>
		// 기본작업 - 영문삭제 : R32 -> 32
		var imgNum=clicked_id.substring(1,);

		// 추가작업 - 앞 0삭제 : 01 -> 1 (해당하는 경우만)
			if(imgNum.substring(0,1)==0){
				imgNum = imgNum.substring(1);
			}
		// bundle number과 비교하기 위해 imgNum/2
		var k = parseInt(imgNum/2);
		// 이제 bundle 에서 turn on/off 를 해야 한다...
			if(k===B1){ 				// 1번 번들 - idx:0
	    	var x = document.getElementById("bundle1"); x.style.display = "none";
	    	var y = document.getElementById("bundle2"); y.style.display = "block";
			} else if(k===B2){  // 2번 번들 - idx:1
	    	var x = document.getElementById("bundle2"); x.style.display = "none";
	    	var y = document.getElementById("bundle3"); y.style.display = "block";
			}	else if(k===B3){ // 3번 번들 - idx:2
	    	var x = document.getElementById("bundle3"); x.style.display = "none";
	    	var y = document.getElementById("bundle4"); y.style.display = "block";	
			} else if(k===B4){ // 4번 번들 - idx:3
	    	var x = document.getElementById("bundle4"); x.style.display = "none";	
	    	var y = document.getElementById("bundle5"); y.style.display = "block";	
			} else if(k===B5){ // 5번 번들 - idx:4
	    	var x = document.getElementById("bundle5"); x.style.display = "none";	
	    	var y = document.getElementById("bundle6"); y.style.display = "block";	
			}
		}		

	window.onload = function () {
		// html 문서 시작하자마자 bundle 객체를 모두 받아놔야겠음
		// bundle 객체를 모두 받아 놓고 비교가 가능하게끔 해야함.
		var b1 = document.getElementById( 'bundle1' ).getAttribute( 'id' );		B1=b1.substring(6,)-1;	//2
		var b2 = document.getElementById( 'bundle2' ).getAttribute( 'id' ); 	B2=b2.substring(6,)-1;	//4
		var b3 = document.getElementById( 'bundle3' ).getAttribute( 'id' ); 	B3=b3.substring(6,)-1;	//6
		var b4 = document.getElementById( 'bundle4' ).getAttribute( 'id' ); 	B4=b4.substring(6,)-1;	//8
		var b5 = document.getElementById( 'bundle5' ).getAttribute( 'id' ); 	B5=b5.substring(6,)-1;	//8
	}


  	function backBtnClicked(clicked_id) {
		// <아이디에서 번호 부분만 추출>
		// 기본작업 - 영문삭제 : R32 -> 32
		var imgNum=clicked_id.substring(1,);

		// 추가작업 - 앞 0삭제 : 01 -> 1 (해당하는 경우만)
			if(imgNum.substring(0,1)==0){
				imgNum = imgNum.substring(1);
			}
		// bundle number과 비교하기 위해 imgNum/2
		var k = parseInt(imgNum/2);
		// 이제 bundle 에서 turn on/off 를 해야 한다...
			if(k===B1){ 				// 1번 번들 - idx:0
	    	
			} else if(k===B2){  // 2번 번들 - idx:1
	    	var x = document.getElementById("bundle1"); x.style.display = "block";
	    	var y = document.getElementById("bundle2"); y.style.display = "none";
			}	else if(k===B3){ // 3번 번들 - idx:2
	    	var x = document.getElementById("bundle2"); x.style.display = "block";
	    	var y = document.getElementById("bundle3"); y.style.display = "none";	
			} else if(k===B4){ // 4번 번들 - idx:3
	    	var x = document.getElementById("bundle3"); x.style.display = "block";	
	    	var y = document.getElementById("bundle4"); y.style.display = "none";	
			} else if(k===B5){ // 5번 번들 - idx:4
	    	var x = document.getElementById("bundle4"); x.style.display = "block";	
	    	var y = document.getElementById("bundle5"); y.style.display = "none";	
			}
		}		
