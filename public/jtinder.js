$(function(){

  console.log("Init");
  
  $("#tinderslide").jTinder({

    onDislike: function (item) {
      $('#status').html('Dislike image ' + (item.index()+1));
    },
    // like callback
    onLike: function (item) {
        // set the status text
        $('#status').html('Like image ' + (item.index()+1));
      },
      animationRevertSpeed: 200,
      animationSpeed: 400,
      threshold: 1,
      likeSelector: '.like',
      dislikeSelector: '.dislike'
    });

  /**
   * Set button action to trigger jTinder like & dislike.
   */
   $('.actions .like, .actions .dislike').click(function(e){
    console.log("clicked")
    e.preventDefault();
    $("#tinderslide").jTinder($(this).attr('class'));
  });
 })

