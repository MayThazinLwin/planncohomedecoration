console.log("hay");

$(document).ready(function(){

	// Start Back to Top
		$(".btn-backtotops").hide();
		$(window).scroll(function(){
			let getscrolltop=$(this).scrollTop();
			// 

			if(getscrolltop>=370){
				$(".btn-backtotops").fadeIn(1000);
			}else{
				$(".btn-backtotops").fadeOut(200);
			}
		});
	// End Back to Top



	// Start Header
		// start nav

		//for burger
		$(".navbuttons").click(function(){
			$(".navbuttons").toggleClass("crossxs");
		});

		//for nav scroll
		$(window).scroll(function(){
			// console.log("hey");

			let getscrolltop=$(this).scrollTop();
			// console.log(getscrolltop);

			if(getscrolltop >= 200){
				$(".navbar").addClass("navmenus");
			}else{
				$(".navbar").removeClass("navmenus");
			}
		});

		// end nav
	// End Header


	// Start Property

			//for hover effect
			$(".propertylists").click(function(){
				//ONE LINE
				$(this).addClass("activeitems").siblings().removeClass("activeitems");

				//TWO LINE
				// $(this).addClass("activeitems");
				// $(this).siblings().removeClass("activeitems");

			//for filter

			let getattvalue=$(this).attr("data-filter");
			// console.log(getattvalue);

			if(getattvalue == "all"){
				$(".filters").show("slide",500);
			}else{
				$(".filters").hide();

				$(".filters").not("."+getattvalue).hide("slide",500);

				$(".filters").filter("."+getattvalue).show("slide",500);
			}
			});

			//for image overlay (or) lightbox2
			lightbox.option({
				'showImageNumberLabel':false
			})
	// End Property

	//Atart Adv Section

	$(window).scroll(function(){
		let getscrolltop=$(this).scrollTop();
		// console.log(getscrolltop);

		if(getscrolltop>=901){
			$(".advimages").addClass("fromlefts");
			$(".advtexts").addClass("fromrights");
		}else{
			$(".advimages").removeClass("fromlefts");
			$(".advtexts").removeClass("fromrights");
		}
	});

	//End Adv Section

	// Start Footer Section
	const getyear=$("#getyear");
	const getfullyear=new Date().getUTCFullYear();

	getyear.text(getfullyear);
	// End Footer Section

});