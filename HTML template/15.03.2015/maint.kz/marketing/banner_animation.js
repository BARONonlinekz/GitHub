function random(min,max){
    return Math.floor(Math.random() * (max - min) + min);
}
function GetCos(n){
    return Math.cos(Math.PI/180*n);
}
var parent_container,image,limit_image,array_div,width_window,height_window,angle,gipoten,part,x_vector,y_vector,div,count_image,pos_x,pos_y,elem;
limit_image=60;
width_window=$(window).width();
height_window=$(window).height();
gipoten=2200;
parent_container=$('#blicks');

setTimeout(function () {
    $('#blicks').css({opacity:'1'})
},500)
CreateImages(0)
function CreateImages(index){
    if(index==limit_image){
        count_image=limit_image;
        array_div=$('#blicks div');
        AnimateImages(0)
        return
    }
    image=document.createElement('img');
    div=document.createElement('div');
    $(image).attr('src','assets/img/h-luch1.png');
    width=random(20,100);
    $(div).css({
        'left':+random(0,width_window-width)+'px',
        'top':+random(0,height_window-width)+'px'
    })
    $(image).css({
        'width':width,
    })
    $(parent_container).append(div);
    $(div).append(image);
    CreateImages(++index)
}
function AnimateImages(index){
    if(index==array_div.length){
        CheckLeaveImage(0)
        return
    }
    $(array_div[index]).css({
        'transition-duration':random(200,250)+'s',
    })
    angle=random(0,360);
    if( (angle>=0) && (angle<=90) ){
        part=1;
        // x-vec= +++
        // y-vec= ---
        x_vector=gipoten*GetCos(angle)
        y_vector=Math.sqrt(Math.pow(gipoten,2)-Math.pow(x_vector,2))
        y_vector=y_vector*-1;
        setAnimate(index,x_vector,y_vector)
    }
    if( (angle>=91) && (angle<=180) ){
        part=2;
        angle=angle-90;
        // x-vec= ---
        // y-vec= ---
        x_vector=gipoten*GetCos(angle)
        y_vector=Math.sqrt(Math.pow(gipoten,2)-Math.pow(x_vector,2))
        y_vector=y_vector*-1;
        x_vector=x_vector*-1;
        setAnimate(index,x_vector,y_vector)

    }
    if( (angle>=181) && (angle<=270) ){
        part=3;
        angle=angle-180;
        // x-vec= ---
        // y-vec= +++
        x_vector=gipoten*GetCos(angle)
        y_vector=Math.sqrt(Math.pow(gipoten,2)-Math.pow(x_vector,2))
        x_vector=x_vector*-1;
        setAnimate(index,x_vector,y_vector)
    }
    if( (angle>=271) && (angle<=360) ){
        part=4;
        angle=angle-270;
        // x-vec= +++
        // y-vec= +++
        x_vector=gipoten*GetCos(angle)
        y_vector=Math.sqrt(Math.pow(gipoten,2)-Math.pow(x_vector,2))
        setAnimate(index,x_vector,y_vector)
    }
    // console.log(x_vector+'-----'+y_vector)
    setTimeout(function () {
        AnimateImages(++index)
    },10)
}
function setAnimate(index,x_vector,y_vector){
    $(array_div[index]).css({
        transform: 'translate('+x_vector+'px,'+y_vector+'px)'
    });
}
function CheckLeaveImage(index){
    check_arr=$('#blicks div')
    if(index==check_arr.length){
        // setTimeout(function () {
        CheckLeaveImage(0)
        return
        // },100)
    }
    pos_x=$(check_arr).eq(index).position().left;
    pos_y=$(check_arr).eq(index).position().top;
    if( (pos_x>width_window) || (pos_x<0) || (pos_y>height_window) || (pos_y<0) ){
        // alert()
        elem=check_arr[index];
        $(elem.children).css({
            opacity:'0'
        })
        setTimeout(function () {
			if (elem.parentNode){
				elem.parentNode.removeChild(elem);
				NewCreateImages()
			 }
            //elem.parentNode.removeChild(elem)
        },1500)
    }
    // if(index!=count_image){
    setTimeout(function () {
        CheckLeaveImage(++index)
    },100)
    // }
}
function NewCreateImages(){
    var image=document.createElement('img');
    var div=document.createElement('div');
    $(image).attr('src','assets/img/h-luch1.png');
    var width=random(20,150);
    $(div).css({
        'left':+random(0,width_window-width)+'px',
        'top':+random(0,height_window-width)+'px',
        'transition-duration':random(200,250)+'s'
    })
    $(image).css({
        'width':width,
        opacity:'0'
    })
    setTimeout(function () {
        $(image).css({
            opacity:'1'
        })
    },600)
    $(parent_container).append(div);
    $(div).append(image);
    setTimeout(function () {
        var new_angle=random(0,360);
        if( (new_angle>=0) && (new_angle<=90) ){
            part=1;
            // x-vec= +++
            // y-vec= ---
            var new_x_vector=gipoten*GetCos(new_angle)
            new_y_vector=Math.sqrt(Math.pow(gipoten,2)-Math.pow(new_x_vector,2))
            new_y_vector=new_y_vector*-1;
            $(div).css({
                transform: 'translate('+new_x_vector+'px,'+new_y_vector+'px)'
            });
        }
        if( (new_angle>=91) && (new_angle<=180) ){
            part=2;
            new_angle=new_angle-90;
            // x-vec= ---
            // y-vec= ---
            var new_x_vector=gipoten*GetCos(new_angle)
            new_y_vector=Math.sqrt(Math.pow(gipoten,2)-Math.pow(new_x_vector,2))
            new_y_vector=new_y_vector*-1;
            new_x_vector=new_x_vector*-1;
            $(div).css({
                transform: 'translate('+new_x_vector+'px,'+new_y_vector+'px)'
            });
        }
        if( (new_angle>=181) && (new_angle<=270) ){
            part=3;
            new_angle=new_angle-180;
            // x-vec= ---
            // y-vec= +++
            var new_x_vector=gipoten*GetCos(new_angle)
            new_y_vector=Math.sqrt(Math.pow(gipoten,2)-Math.pow(new_x_vector,2))
            new_x_vector=new_x_vector*-1;
            $(div).css({
                transform: 'translate('+new_x_vector+'px,'+new_y_vector+'px)'
            });
        }
        if( (new_angle>=271) && (new_angle<=360) ){
            part=4;
            new_angle=new_angle-270;
            // x-vec= +++
            // y-vec= +++
            var new_x_vector=gipoten*GetCos(new_angle)
            new_y_vector=Math.sqrt(Math.pow(gipoten,2)-Math.pow(new_x_vector,2))
            $(div).css({
                transform: 'translate('+new_x_vector+'px,'+new_y_vector+'px)'
            });
        }
    },100)
}
$("body").on("click",".modal_link",function(e){
    e.preventDefault();
    $('.modal, .modal2').fadeOut()
    var id=$(this).data('id');
    $('.modal[data-id='+id+']').fadeIn().promise().done(function(){
        $('.modal[data-id='+id+'] .modal_content').css('opacity','1').addClass('animated zoomIn')
    })
});
var myMap;
ymaps.ready(init);
//
function init() {
    myMap = new ymaps.Map('map', {
        center: [43.245931448034604,76.92571410252846],
        zoom: 18,
        controls: ['zoomControl']
    }), myPlacemark = new ymaps.Placemark([43.245931448034604,76.92571410252846], {
        hintContent: 'Маркетинговая компания Maint',
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../assets/img/placemark.png',
        iconImageSize: [40,54],
        iconImageOffset: [-20, -54]
    });
    myMap.geoObjects.add(myPlacemark)
}
