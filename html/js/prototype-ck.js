(function(e){"use strict";e(function(){var t=new Array("jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec");e("#clockface div").click(function(n){var r=e(n.target),i=r.attr("class").split(" "),s=e("."+i[2]+".top-slot"),o=e("."+i[2]+".bottom-slot"),u=e("<div />");for(var a=0;a<i.length;a++)u.addClass(i[a]);u.removeClass("bottom-slot");u.addClass("top-slot");var f=e("<div />");for(var a=0;a<i.length;a++)f.addClass(i[a]);f.removeClass("top-slot");f.addClass("bottom-slot");var l=r.css("background-image");l=l.split("/");l=l[l.length-1];l=l.replace(/\..*/,"");l=l.split("_");l[0]==="num"?l[1]++:l[0]==="month"&&(l[1]=t[t.indexOf(l[1])+1]);var c="../resources/src/images/"+l.join("_")+".png";u.css("background-image","url("+c+")");f.css("background-image","url("+c+")");u.css("z-index",0);f.css("z-index",999);f.css("backgroundPositionY","-84px");e("#clockface").append(u);e("#clockface").append(f);s.animate({backgroundPositionY:"42px"},75,"linear",function(){f.animate({backgroundPositionY:"-42px"},75,"linear",function(){s.remove();o.remove()})})})})})(jQuery);