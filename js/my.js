//获取标签
	var list = document.getElementById('list').children
	var btn = document.getElementsByClassName("main-d-a");

	var i = 0;

	for (i = 0; i < list.length; i++) {
		list[i].index = i; //记录索引值
		list[i].onclick = function() {
			for (var j = 0; j < list.length; j++) {
				list[j].className = "";
				btn[j].style.display = 'none';
			}
			this.className = "main-nav";
			btn[this.index].style.display = "block";
		};
	}



	$(function() {
		var num = 0;
		var timee;

		function zou() {
			timee = setInterval(function() {
				num = num + 1;

				if (num > 5) {
					num = 0;
				}

				$('.divv ol li').eq(num).addClass('current').siblings('').removeClass('current');
				$('.divv ul').css('left', -520 * num + 'px')

			}, 3000);
		}
		zou();
		$('div').hover(function() {
			clearInterval(timee);
		}, function() {
			zou();
		});
		$('span').hover(function() {
			console.log($(this).index());
			$(this).css('background', 'rgba(0, 0, 0, 0.8)');
		}, function() {
			$(this).css('background', 'rgba(0, 0, 0, 0.5)');
		});

		$('.left').click(function(event) {
			num = num - 1;
			if (num < 0) {
				num = 5;
			}
			$('.divv ul').css('left', -520 * num + 'px')
			$('.divv ol li').eq(num).addClass('current').siblings('').removeClass('current');

		});
		$('.right').click(function(event) {
			num = num + 1;
			if (num > 5) {
				num = 0;
			}
			$('.divv ol li').eq(num).addClass('current').siblings('').removeClass('current');
			$('.divv ul').css('left', -520 * num + 'px')
		});


		$('.divv span').click(function(event) {
			console.log(event.target)
			console.log($(this).index());

		});


	})
