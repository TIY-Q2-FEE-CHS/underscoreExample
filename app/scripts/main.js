var home;
$(document).ready(function() {
	home = new Page("homePage");
	homePage.init();

});

function Page(name) {
	this.name = name;
} 

Page.prototype = {
	constructor: Page,
	addTmpl: function($target, template, data) {
		var tmpl = _.template(template, data);
				$target.append(tmpl);
	}
};

var homePage = {
			init: function() {
				this.initStyling();
				this.initEvents();
				this.initValidation();
				console.log("init begins");

			},
			initStyling: function() {
				// for hackCharleston github activity feed
				home.addTmpl($(".jumbotron"), $("#githubActivity").html(), hackCharleston)
				console.log("initStyling begins");
				$("a").addClass("btn btn-primary");
				$(".testClass").text(home.name);


			},
			initEvents: function() {
				$(".awesome").on("click", function(e) {
					e.preventDefault();
					var whatIsHyperlinkValue = $(this).attr("href");
					alert(" NO LINK FOR YOU! " + whatIsHyperlinkValue);

					
				});

				$(".container").on("click", "div", function() {
						console.log($(this));
					});
				console.log("initEvents begins");
			},
			initValidation: function() {
				console.log("initVAlidation begins")
			}
};