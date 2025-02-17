              $(document).ready(function () {
                    var itemsMainDiv = ('.MultiCarousel');
                    var itemsDiv = ('.MultiCarousel-inner');
                    var itemWidth = "";
              
                    $('.leftLst, .rightLst').click(function () {
                        var condition = $(this).hasClass("leftLst");
                        if (condition)
                            click(0, this);
                        else
                            click(1, this)
                    });
              
                    ResCarouselSize();
              
              
              
              
                    $(window).resize(function () {
                        ResCarouselSize();
                    });
              
                    //this function define the size of the items
                    function ResCarouselSize() {
                        var incno = 0;
                        var dataItems = ("data-items");
                        var itemClass = ('.item');
                        var id = 0;
                        var btnParentSb = '';
                        var itemsSplit = '';
                        var sampwidth = $(itemsMainDiv).width();
                        var bodyWidth = $('body').width();
                        $(itemsDiv).each(function () {
                            id = id + 1;
                            var itemNumbers = $(this).find(itemClass).length;
                            btnParentSb = $(this).parent().attr(dataItems);
                            itemsSplit = btnParentSb.split(',');
                            $(this).parent().attr("id", "MultiCarousel" + id);
              
              
                            if (bodyWidth >= 1200) {
                                incno = itemsSplit[3];
                                itemWidth = sampwidth / incno;
                            }
                            else if (bodyWidth >= 992) {
                                incno = itemsSplit[2];
                                itemWidth = sampwidth / incno;
                            }
                            else if (bodyWidth >= 768) {
                                incno = itemsSplit[1];
                                itemWidth = sampwidth / incno;
                            }
                            else {
                                incno = itemsSplit[0];
                                itemWidth = sampwidth / incno;
                            }
                            $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
                            $(this).find(itemClass).each(function () {
                                $(this).outerWidth(itemWidth);
                            });
              
                            $(".leftLst").addClass("over");
                            $(".rightLst").removeClass("over");
              
                        });
                    }
              
              
                    //this function used to move the items
                    function ResCarousel(e, el, s) {
                        var leftBtn = ('.leftLst');
                        var rightBtn = ('.rightLst');
                        var translateXval = '';
                        var divStyle = $(el + ' ' + itemsDiv).css('transform');
                        var values = divStyle.match(/-?[\d\.]+/g);
                        var xds = Math.abs(values[4]);
                        if (e == 0) {
                            translateXval = parseInt(xds) - parseInt(itemWidth * s);
                            $(el + ' ' + rightBtn).removeClass("over");
              
                            if (translateXval <= itemWidth / 2) {
                                translateXval = 0;
                                $(el + ' ' + leftBtn).addClass("over");
                            }
                        }
                        else if (e == 1) {
                            var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
                            translateXval = parseInt(xds) + parseInt(itemWidth * s);
                            $(el + ' ' + leftBtn).removeClass("over");
              
                            if (translateXval >= itemsCondition - itemWidth / 2) {
                                translateXval = itemsCondition;
                                $(el + ' ' + rightBtn).addClass("over");
                            }
                        }
                        $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
                    }
              
                    //It is used to get some elements from btn
                    function click(ell, ee) {
                        var Parent = "#" + $(ee).parent().attr("id");
                        var slide = $(Parent).attr("data-slide");
                        ResCarousel(ell, Parent, slide);
                    }
              
                });
         function sonqush(){
           var inpson = document.getElementById('inpson')
           inpson.value = inpson.value *1 +1;
         }
         function sonayir(){
           var inpson = document.getElementById('inpson')
         
           if(inpson.value * 1 > 1){
             inpson.value = inpson.value *1 -1;
           }
         }
         function savatqush() {
            var  span1 = document.getElementById('span1');
            span1.innerText = span1.innerText*1 +  inpson.value*1 -0;
          
          }

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
function submitnew(){
    var inp_ism = document.getElementById('inp_ism')
    var inp_fm = document.getElementById('inp_fm')
    var inp_tl = document.getElementById('inp_tl')
    var inp_nik = document.getElementById('inp_nik')
    var inp_prl = document.getElementById('inp_prl')

    window.localStorage.setItem(key = "inp_ism", value = inp_ism.value)
    window.localStorage.setItem(key = "inp_fm", value = inp_fm.value)
    window.localStorage.setItem(key = "inp_nik", value = inp_nik.value)
    window.localStorage.setItem(key = "inp_prl", value = inp_prl.value)
    window.localStorage.setItem(key = "inp_tl", value = inp_tl.value)

    window.open('profile.html','_self')
}

function btnsubmit(){
    var inp_parol = document.getElementById('inp_parol')
    var inp_prl = document.getElementById('inp_prl')
    var div_check = document.getElementById('div_check')
    var inp_email = document.getElementById('inp_email')

    var storedName = localStorage.getItem('inp_nik');
    var storedPw = localStorage.getItem('inp_prl');

    if(inp_email.value == storedName && inp_parol.value == storedPw){
        window.open("account.html",'_self')
    }
    else{
      var h4 = document.createElement('h4')

      h4.style.color = "red";
      h4.style.fontSize = "13pt"

      h4.innerText = "Foydalanuvchi nomi yoki parol hato!"

      div_check.appendChild(h4)
    }
    
}