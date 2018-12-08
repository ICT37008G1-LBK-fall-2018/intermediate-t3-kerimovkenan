document.getElementById("highlight-product").onclick = function(){
	var x = prompt('ბრენდი')
	var y = prompt('შრიფტის ზომა')
	var status = 0
	for (var i = 0; i < document.getElementsByClassName('phone-list-item').length; i++) {
		if (document.getElementsByClassName('phone-list-item')[i].getAttribute('data-brand') == x) {
			status = 1
            document.getElementsByClassName('phone-list-item')[i].children[0].style.fontSize = y + 'px'
			document.getElementsByClassName('phone-list-item')[i].children[0].innerHTML = document.getElementsByClassName('phone-list-item')[i].children[0].innerHTML.bold()

            document.getElementsByClassName('phone-list-item')[i].children[1].style.fontSize = y + 'px'
            document.getElementsByClassName('phone-list-item')[i].children[1].innerHTML = document.getElementsByClassName('phone-list-item')[i].children[1].innerHTML.bold()

		}
	}


	if (status == 0) {
		alert('ჩანაწერი ვერ მოიძებნა')
	}
}