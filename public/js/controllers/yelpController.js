angular
.module('YelpsApp')
.controller('barsController', BarsController);

BarsController.$inject = ['$http', '$state']

function BarsController($http, $state){
  var self = this;

  self.all = [];
  self.newBar = {};

  self.getBars = function(term, location){
    console.log(location)

    $http
    .get("http://localhost:3000/api/&?term="+term+"&location="+location) 
    .then(function(response){
      
      self.all.push(response.data.businesses[0])
      console.log(self.all);
      

      // var html = "";
      // $.each(self.all[0], function(index, meeting){
      //   html += "<li class='pane"+index+"'><div></div><div class='like'></div><div class='dislike'></div></li>"
      // });
      

      //   // Append the HTML string
      //   $('#tinderslide ul').append(html);
      //   $("#tinderslide").jTinder();
      //   $state.go('results');

      //   // // Make the Tinderslide work for the ul
      //   // $("#tinderslide").jTinder({
      //   //   onDislike: function(item) {
      //   //     var invitationsUl = ($('#tinderslide').children('ul')[0]);
      //   //     var currentInvitation = $(invitationsUl).children().last('li')[0];
      //   //     console.log(data.currentUserId);
      //   //     deleteInvites($(currentInvitation).children('input').val(), data.currentUserId);
      //   //     currentInvitation.remove();
      //   //     $('#status').html('Invitation Declined');
      //   //   },

      //   //   onLike: function (item) {
      //   //     var invitationsUl = ($('#tinderslide').children('ul')[0]);
      //   //     var currentInvitation = $(invitationsUl).children().last('li')[0];
      //   //     acceptInvites($(currentInvitation).children('input').val());
      //   //     currentInvitation.remove();
      //   //     $('#status').html('Invitation Accepted');
      //   //   },  

      //   //   animationRevertSpeed: 200,
      //   //   animationSpeed: 400,
      //   //   threshold: 1,
      //   //   likeSelector: '.like',
      //   //   dislikeSelector: '.dislike'
      //   // });

      // //   $('.like').on('click', function (){
      // //     e.preventDefault();
      // //   })

      // //   // Setup LIKE/DISLIKE buttons
      // //   $('.actions .like, .actions .dislike').click(function(e){
      // //     e.preventDefault();
      // //     $("#tinderslide").jTinder($(this).attr('class'));

      // //   });
      // //   console.log(response.message)

      // // });


})
}






}
