$(function(){
    // Show the collapsed and open images next to root menus
    $(".navRoot").change(function(){
        if(this.checked) {
            $(this).next().attr("class","rootSelectHolderClose");
        }
        else {
            $(this).next().attr("class","rootSelectHolderOpen");
        }
    })

    // As root menus are selected, select and un-select children nodes
    $(".selectRoot").change(function(){
        if(this.checked) {
            $(this).parent().parent().find(".selectRoot").prop('checked', true);
            $(this).parent().parent().find(".documentSelect").prop('checked', true);
        }
        else {
            $(this).parent().parent().find(".selectRoot").prop('checked', false);
            $(this).parent().parent().find(".documentSelect").prop('checked', false);
        }
    })

    // As children nodes are un-selected, un-select the parents roots
    $(".documentSelect").change(function(){
        //$(this).parent().parent().parent().parent().find(".selectRoot").prop('checked', false);
        $(this).parent().parent().parent().parent().parent().parent().find(".selectRoot").prop('checked', false);
    })
});