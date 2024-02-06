$(document).ready(function(){
    $(".generate-btn").click(function(){
        var randomColor = "";
        var characters = "0123456789abcdef";


        for(i = 0; i < 6; i++){
            randomColor = randomColor + characters[Math.floor(Math.random() * 16)];
        }

        $("#inputfield").val("#" + randomColor);

        $("#inputfield").css("color", "#" + randomColor);

        $("#inputfield").css("border-color", "#" + randomColor);

        $(".color-preview, .copy-btn").css("background-color", "#" + randomColor);
    })

    function add(){
        $(".alert-msg").addClass("slide-effect")
    }

    function remove(){
        $(".alert-msg").removeClass("slide-effect")
    }

    $(".copy-btn").click(function(){
        $("#inputfield").select();
        // document.execCommand('copy');
        // alert('copied');
        add()
        setTimeout(remove,2000);

        $(".code").text($("#inputfield").val());
    });
});