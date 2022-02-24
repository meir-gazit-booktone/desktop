$(document).ready(function () {
    $(".itemText").bind("click", function () {
        currentClickedItem = $(".itemText").index(this) + 1;
        currentArrow = $("#hiddenContentArrow" + currentClickedItem).attr(
            "src"
        );

        if (currentArrow == "../assets/images/arrow-down.svg") {
            $("#hiddenContent" + currentClickedItem).slideDown(400);
            $("#hiddenContentArrow" + currentClickedItem).attr(
                "src",
                "../assets/images/arrow-up.svg"
            );
        } else {
            $("#hiddenContent" + currentClickedItem).slideUp(400);
            $("#hiddenContentArrow" + currentClickedItem).attr(
                "src",
                "../assets/images/arrow-down.svg"
            );
        }
    });

    var right_margin = 50;
    var center_margin = 150;

    $("#left").click(function () {
        $("#left-header").animate({ marginRight: "0%" }, "slow");
    });
});

$('.box-wrapper').each(function (index, element) {

    setTimeout(function () {
        element.classList.remove('loading');
    }, index * 500);

});

// var text = document.getElementById('text');
// var newDom = '';
// var animationDelay = 6;

// for(let i = 0; i < text.innerText.length; i++)
// {
//     newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
// }

// text.innerHTML = newDom;
// var length = text.children.length;

// for(let i = 0; i < length; i++)
// {
//     text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
// }