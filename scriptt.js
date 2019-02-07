SC.initialize({
  client_id: 'a3e059563d7fd3372b49b37f00a00bcf'

});


$(document).ready(function() {

  SC.stream('/tracks/540186672', function(sound) {
    $('#start').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });

  SC.stream('/tracks/557856666', function(sound) {
    $('#start1').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop1').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });


  SC.stream('/tracks/555765423', function(sound) {
    $('#start2').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop2').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });



  SC.stream('/tracks/524553387', function(sound) {
    $('#start3').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop3').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });



  SC.stream('/tracks/536634576', function(sound) {
    $('#start4').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop4').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });



  SC.stream('/tracks/639479148', function(sound) {
    $('#start5').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop5').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });



  SC.stream('/tracks/397422978', function(sound) {
    $('#start6').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop6').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });



  SC.stream('/tracks/340704877', function(sound) {
    $('#start7').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop7').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });



  SC.stream('/tracks/137868234', function(sound) {
    $('#start8').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop8').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });


  SC.stream('/tracks/495538437', function(sound) {
    $('#start9').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop9').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });

    SC.stream('/tracks/321949442', function(sound) {
      $('#start10').click(function(e) {
        e.preventDefault();
        sound.start();
      });
      $('#stop10').click(function(e) {
        e.preventDefault();
        sound.stop();
      });
    });

      SC.stream('/tracks/270905820', function(sound) {
        $('#start11').click(function(e) {
          e.preventDefault();
          sound.start();
        });
        $('#stop11').click(function(e) {
          e.preventDefault();
          sound.stop();
        });
      });


});
