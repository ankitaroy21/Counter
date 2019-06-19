let ID=0;
function createCounter(localId) {
	let counterDiv=$('<div id="div'+localId+'"></div>');
    let counterText=$('<p class="buttonSet countClass" id="p'+localId+'">0</p>');
    let remButton=$('<button class="buttonSet myRectangle">X</button>')
	$(remButton).click(function() {
		$("div").remove("#div"+localId);
	});
	$(counterDiv).append(remButton);
    let incrementButton=$('<button class="buttonSet buttonUp"></button>')
	var upArrowSvg=$('<svg height="40" width="40" viewBox="0 0 40 40"><path d="M2 26h32L18 10 2 26z"/></svg>');
	$(incrementButton).append(upArrowSvg);
	$(incrementButton).click(function() {
        $("#p"+localId).html(parseInt($("#p"+localId).html())+1);
    });
	$(counterDiv).append(incrementButton);

    $(counterText).dblclick(function(){
        let orgText =$(this).html();
        $(this).html("");
        $(this).append($('<input type="number" id="b'+localId+'"/>'));
        $("input").val(orgText);
        $("input").focus();
        $(incrementButton).prop('disabled', true);
        $(decrementButton).prop('disabled', true);
        $("input").keypress(function(event){
            var keycode = (event.keyCode ? event.keyCode : event.which);
            if(keycode == '13'){
                $(incrementButton).prop('disabled', false);
                $(decrementButton).prop('disabled', false);
                $(this).hide();
                var count=event.target.value;
                $("#p"+localId).html(count);
            }
        });
        $('input').keydown(function(e){
            if(e.which == 27){
                $(incrementButton).prop('disabled', false);
                $(decrementButton).prop('disabled', false);
                $(this).hide();
                $("#p"+localId).html(orgText);       
            }
        });
    });
    $(counterDiv).append(counterText);
    let decrementButton=$('<button class="buttonSet buttonDown"></button>')
	var downArrowSvg=$('<svg height="40" width="40" viewBox="0 0 40 40"><path d="M2 10h32L18 26 2 10z" height="50" width="50"/></svg>');
	$(decrementButton).append(downArrowSvg);
	$(decrementButton).click(function(){
        $("#p"+localId).html(parseInt($("#p"+localId).html())-1);
	});
	$(counterDiv).append(decrementButton);
    let resetButton=$('<button class="buttonSet resetB">Reset</button>')
	$(resetButton).click(function() {
        $("#p"+localId).html("0");
	});
	$(counterDiv).append(resetButton);
	return counterDiv;
}
function addCounter() {
    let localId=ID;
	let newCounter=createCounter(localId);
	$("#container").append(newCounter);
	ID++;
}
function removeCounter() {
    let localId=ID-1;
    $("div").remove("#div" + localId);
    ID--;
}
function allReset() {
	let resetAllVar = document.querySelectorAll('.countClass');
	for( let i=0; i < resetAllVar.length; i++ ) {
		$(resetAllVar[i]).html("0");
	} 
}
$(document).ready(function() {
    $("#addB").click(function() {
        addCounter();
    });
    $("#remB").click(function() {
        removeCounter();
    });
    $("#resB").click(function() {
        allReset();
    });
});