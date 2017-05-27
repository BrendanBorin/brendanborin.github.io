$( document ).ready(function(){
  $('.input .inner_cell').hide();
  $('a.anchor-link').hide();
  $('div.prompt').hide();

  $('div.input').each(function() {
    $(this).append($('<button/>', {
        text: 'Show Code',
        value: 0,
        padding: '10px',
        click: function() {
          if ($(this).attr('value') == 0) {
              $(this).text('Hide Code');
              $(this).val(1);
              $(this).siblings('.inner_cell').show('250');
              } else {
              $(this).text('Show Code');
              $(this).val(0);
              $(this).siblings('.inner_cell').hide('250');
          }
        }}))
      })
    })
