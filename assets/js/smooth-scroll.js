$(document).ready(function(){$("a[href*=#]").click(function(a){a.preventDefault();$("html,body").animate({scrollTop:$(this.hash).offset().top},500)})});