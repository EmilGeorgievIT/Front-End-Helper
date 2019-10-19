$('div.s_toggle').click(function(){
  if ( $(this).next().is(":visible")){
    $(this).next().hide('slow');
  } else{
    $('div.nascosto:visible').hide('slow');
    $(this).next().show('slow');
  }
});