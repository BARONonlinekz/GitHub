function sendPostForm(a,t,i,e){return!!a&&(!!t&&(!!e&&(!!i&&void $("form[name="+a+"]").on("submit",function(){$.ajax({url:ajaxFile+"?go="+t,data:$(this).serialize(),type:"POST",dataType:"html",beforeSend:function(){e.html(i)},success:function(t){$("form[name="+a+"] input, form[name="+a+"] textarea").val(""),e.html(t)},error:function(t){console.log(t)}})}))))}function calculateArea(e){var r=0;$(".calcRow").each(function(t){var a=$(this).find(".prodLength").val(),i=$(this).find(".prodCount").val();r+=a*e*i}),$(".totalArea").text(r)}function calculateTotal(t){var i=0;$(".cat--unit__total__price span").each(function(t){var a=parseInt($(this).text());i+=a});var a=Math.ceil(i*t/100),e=i-a;$(".total").text(i+" тг."),$(".totalWithDiscount").text(e+" тг.")}function auth(t){var a={ru:{change:"Изменение анкеты",exit:"Выход"},en:{change:"Change data",exit:"Exit"}},i=["<div>Здравствуйте, <strong>"+t.name+"</strong>!</div><br>",'<div><a href="/'+_LANG_+'/cab/">'+a[_LANG_].change+"</a></div>",'<div><a href="#выход" onclick="return exit()">'+a[_LANG_].exit+"</a></div>"].join("\n");$("#auth-block").html(i).slideDown("fast"),$("#auth-form").slideUp("fast"),location.reload()}function exit(){return $.get("/ajax.php",{go:"exit"},function(t){$("#auth-block").slideUp("fast"),$("#auth-form").slideDown("fast"),location.reload()}),!1}function checkSearchForm(t){var a=[];return t.what.value==_SEARCHWORD_||""==t.what.value?a.push(_NOWORD_):t.what.value.length<3&&a.push(_TOOLONG_),!(0<a.length)||(alert(a.join("\n")),!1)}function voteIt(a,t,i){a=$(a).attr({disabled:"disabled"});return $.get(ajaxFile,{vote:t,a_id:i},function(t){$("#voting-backup").html($("#voting-screen").html()),$("#voting-screen").html(t),a.removeAttr("disabled"),0==i&&$("#back-to-vote").show()}),!1}function showVoting(){return $("#voting-screen").html($("#voting-backup").html()),$("#back-to-vote").hide(),!1}function buy(i,t){var a={ru:{goods:"Товаров",add:"Добавление в корзину",count:"Количество",summ:"На сумму",tg:" тг."},en:{goods:"Goods",add:"Add to cart",count:"Count",summ:"Summ",tg:" tg."},kz:{goods:"Тауарлар",add:"Қоржынға салу",count:"Саны",summ:"Бағасы",tg:" тг."}};return $("<div>").attr({title:a[_LANG_].add}).html("<br><h2>"+t+"</h2><br><div>"+a[_LANG_].count+': <input class="digits-only" type="text" value="1" style="width:40px;"></div><br>').dialog({modal:!0,resizable:!1,zIndex:7999,width:300,buttons:{OK:function(){$(".ui-dialog-buttonpane").remove();var t=$(this).find("input").val(),a=$(this).html('<br><div align="center">Loading...</div><br>');$.get(ajaxFile,{go:"buy",id:i,count:t,lang:_LANG_},function(t){a.html('<br><div align="center">'+t+"</div><br>")})}}}),$("input.digits-only").keypress(function(t){if($(this).removeClass("error"),8!=t.which&&0!=t.which&&!String.fromCharCode(t.which).match(/^[0-9]$/))return $(this).addClass("error"),!1}),!1}function str_replace(t,a,i){return t.split(a).join(i)}function newCaptcha(t){return t.attr("src",t.attr("src")+"/"),!1}$(function(){$(".thumbs a").click(function(){var t=$(this).attr("href"),a=$(this).attr("orig");return $("#largeImg").attr({src:t}),$("a.largeImg").attr({href:a}),!1}),$(".formClose").click(function(){$(this).parents(".modal").css("display","none")}),$(".callbackForm").submit(function(){return $.ajax({url:"/send.php",data:$(this).serialize(),type:"POST",success:function(t){return $(".callbackForm .result").html(t),ym(52450402,"reachGoal","KNOPKA"),!0}}),!1}),$(".ajaxTabs li a").click(function(){var t=$(this).data("id"),a=$(this);return $.ajax({url:"/ajax.php?go=tabContent",data:"id="+t,type:"POST",success:function(t){$(".ajaxTabs li").removeClass("active"),a.parent("li").addClass("active"),$(".ajaxRes").html(t)}}),!1}),$(".prodLength").on("input",function(){var t=$(this).data("id"),e=$(this),r=e.val(),n=e.parents(".calcRow").find(".prodCount").val();$.ajax({url:"/ajax.php?go=prodInfo",data:"id="+t,type:"POST",success:function(t){var a=JSON.parse(t);width=a.width,price=a.price,discount=a.discount;var i=r*width*n*price;e.parents(".calcRow").find(".cat--unit__total__price span").text(i),calculateArea(width),calculateTotal(discount)}})}),$(".prodCount").on("input",function(){var t=$(this).data("id"),e=$(this),r=e.parents(".calcRow").find(".prodLength").val(),n=e.val();$.ajax({url:"/ajax.php?go=prodInfo",data:"id="+t,type:"POST",success:function(t){var a=JSON.parse(t);width=a.width,price=a.price,discount=a.discount;var i=r*width*n*price;e.parents(".calcRow").find(".cat--unit__total__price span").text(i),calculateArea(width),calculateTotal(discount)}})}),$(".add").click(function(){var t=$(this).data("id");return $.ajax({url:"/ajax.php?go=prodInfo",data:"id="+t,type:"POST",success:function(t){var a=JSON.parse(t);width=a.width,discount=a.discount,calculateArea(width),calculateTotal(discount)}}),!1}),$(".del").click(function(){var t=$(this).data("id");return $.ajax({url:"/ajax.php?go=prodInfo",data:"id="+t,type:"POST",success:function(t){var a=JSON.parse(t);width=a.width,discount=a.discount,calculateArea(width),calculateTotal(discount)}}),!1}),$(".prodForm").submit(function(){var t=$(".modalName").text(),a=$(".modalTotal").text();return $.ajax({url:"/ajax.php?go=prodOrder",data:$(this).serialize()+"&prod="+t+"&total="+a,type:"POST",success:function(t){$(".prodForm .result").html(t)}}),!1}),$(".open--modal").click(function(){var t=$(".totalWithDiscount").text();$(".modalTotal").text(t)}),$("#subscribe-add").click(function(){var t={ru:{errors:{emptyMail:"Введите E-mail",wrongMail:"E-mail некорректен"},loading:"Загрузка",enter:"Подписаться"},en:{errors:{emptyMail:"Enter E-mail",wrongMail:"E-mail is incorrect"},loading:"Loading",enter:"Subscribe"},kz:{errors:{emptyMail:"Дұрыс E-Mail енгiзiңiз",wrongMail:"Дұрыс E-Mail енгiзiңiз"},loading:"Loading",enter:"Subscribe"}},a=$("#subscribe-mail"),i=a.val(),e=[];if(""==i||i==a.attr("title")?e.push(t[_LANG_].errors.emptyMail):i.match(/^[\d\w\.-]+@([\d\w-]+)((\.[\w\d-]+)+)?\.\w{2,6}$/)||e.push(t[_LANG_].errors.wrongMail),0<e.length)return alert(e.join("\n")),!1;$.get(ajaxFile,{go:"subscribe_add",mail:i},function(t){$("#subscribe-mail").val("Введите E-mail"),alert(t)})}),$("#auth-button").click(function(){var t={ru:{errors:{emptyMail:"Введите e-mail",wrongMail:"E-mail некорректен",emptyPass:"Введите пароль"},loading:"загрузка..",enter:"войти"},en:{errors:{emptyMail:"Enter e-mail",wrongMail:"E-mail is incorrect",emptyPass:"Enter password"},loading:"loading..",enter:"enter"},kz:{errors:{emptyMail:"Дұрыс E-Mail енгiзiңiз",wrongMail:"Дұрыс E-Mail енгiзiңiз",emptyPass:"Парольді енгiзiңiз"},loading:"loading..",enter:"enter"}},a=[],i=$("#input-login").val();"E-mail"==i||""==i?a.push(t[_LANG_].errors.emptyMail):i.match(/^[\d\w\.-]+@([\d\w-]+)((\.[\w\d-]+)+)?\.\w{2,6}$/)||a.push(t[_LANG_].errors.wrongMail);var e=$("#input-pass").val();if("Пароль"!=e&&""!=e||a.push(t[_LANG_].errors.emptyPass),!(0<a.length))return $(this).val("загрузка..").attr("disabled","disabled"),$.getJSON("/ajax.php",{go:"auth",mail:i,pass:e},function(t){if($("#auth-button").val("Войти").removeAttr("disabled"),"ok"!=t.st)return alert(t.text),!1;auth(t)}),!1;alert(a.join("\n"))}),$("#user_login_link, #auth_link_page").click(function(){var i={ru:{errors:{emptyMail:"Введите правильный E-mail",emptyPass:"Введите пароль"},server_error:"Невозможно связаться с сервером!"},en:{errors:{emptyMail:"Enter e-mail",emptyPass:"Enter password"},server_error:"Unable to connect to the server!"},kz:{errors:{emptyMail:"Дұрыс E-Mail енгiзiңiз",emptyPass:"Парольді енгiзiңiз"},server_error:"Unable to connect to the server!"}};return $("#login_win").dialog({modal:!0,resizable:!1,zIndex:7999,width:350,buttons:{OK:function(){var t="",a=0;0==EmailCheck($("#login_email").val())&&(t=t+i[_LANG_].errors.emptyMail+"<br/>",$("#login_email").focus(),a=1),""==$("#login_pass").val()&&(t+=i[_LANG_].errors.emptyPass,0==a&&$("#login_pass").focus()),""==t?$.ajax({url:"/login.php",data:"email="+$("#login_email").val()+"&passwd="+$("#login_pass").val()+"&x=secure&lang="+_LANG_,type:"POST",dataType:"html",cache:!1,beforeSend:function(){$("#login_msg").html("").hide()},success:function(t){$("#login_msg").html(t).slideDown()},error:function(){$("#login_msg").html('<span class="error">'+i[_LANG_].server_error+"</span>").slideDown()}}):$("#login_msg").html('<span class="error">'+t+"</span>").slideDown()}}}),!1}),$("form[name='order-form']").submit(function(t){t.preventDefault();var a=$(this).attr("method"),i=$(this).serialize();return $.ajax({type:a,url:"/ajax.php",data:"go=order&"+i,success:function(t){alert(t)}}),$("input:text").val(""),$("input:password").val(""),$("input.email").val(""),$("textarea").val(""),$("input:checkbox").removeAttr("checked"),!1})}),$(function(){$(".needClear").focus(function(){this.value==this.title&&(this.value="")}).blur(function(){""==this.value&&(this.value=this.title)})});