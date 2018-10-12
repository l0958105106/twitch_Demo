var lang_tw = 'https://api.twitch.tv/kraken/streams/?language=zh-tw&game=League%20of%20Legends';

$(document).ready(function () {
  var getAjax = function (language) {
    $.ajax({
      url: language,
      headers: { 'Client-ID': 'j57loptgkgakodmowbvqbqu92a61jy' },
      dataType: 'json',
      type: 'GET',
      success: function (data) {
        $.each(data.streams, function (index, stream) {

          var url = $('<a class="stream-item">');
          url.prop( 'href' , stream.channel.url );

          var avatar = $('<img class=" avatar rounded-circle">');
          avatar.prop( 'src' , stream.channel.logo );

          var preview = $('<img class="preview">');
          preview.prop( 'src' , stream.preview.medium )

          var name = $('<p class="streamer">');
          name.html(stream.channel.display_name);

          var title = $('<p class="title">');
          title.html(stream.channel.status);

          var streamText = $('<div class="streamText">');
          streamText.append(title ,name);

          var content = $('<div class="content">');
          content.append(avatar,streamText);

          var layout = $('<div class="stream-item">');
          layout.append(preview , content);

            $(".container").append(layout);

        })

        // $(".container").empty();
        // for (var i = 0; i < 21; i++) {
        //   var content =
        //     "<a href=\"" + data.streams[i].channel.url + "\" class='stream-item'>\n<img class='preview' src=\"" + data.streams[i].preview.medium + "\">\n<div class='content'>\n<img class='avatar' src=\"" + data.streams[i].channel.logo + "\">\n<div class='stream-text'>\n<p class='title'>" + data.streams[i].channel.status + "</p>\n<p class='streamer'>" + data.streams[i].channel.display_name + "</p>\n</div>\n</div>\n</a>";
        //   /* ie is not support
        //   `<a href="${data.streams[i].channel.url}" class='stream-item'>
        //     <img class='preview' src="${data.streams[i].preview.medium}">
        //       <div class='content'>
        //         <img class='avatar' src="${data.streams[i].channel.logo}">
        //           <div class='stream-text'>
        //           <p class='title'>${data.streams[i].channel.status}</p>
        //           <p class='streamer'>${data.streams[i].channel.display_name}</p>
        //         </div>
        //       </div>
        //     </a>`;
        //     */


        //   $(".container").append(content);
        // }
      },
      error: function (data) {
        console.log('error', data);
      }
    });
  }



  $('.btn-group .btn').click(function(e) {

    e.preventDefault();
    $(".container").empty();
    var url = $(this).prop('href');
    getAjax(url)

  });

  $('.stream-item').each(function(){
    $(this).click(function(){

    })
  })

  window.onload = getAjax(lang_tw);
});