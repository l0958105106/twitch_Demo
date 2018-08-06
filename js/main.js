$(document).ready(function (){
  $("#btnZh").click(function (){
    $.ajax({
      url: 'https://api.twitch.tv/kraken/streams/?language=zh-tw',
      headers: {'Client-ID': 'j57loptgkgakodmowbvqbqu92a61jy'},
      dataType: 'json', 
      type: 'GET',
      success: function(data) {
        console.log(data);
        $(".container").empty();
        for(var i = 0; i < 21; i++) {
          let content =
          `<a href="${data.streams[i].channel.url}" class='stream-item'>
            <img class='preview' src="${data.streams[i].preview.medium}">
            <div class='content'>
              <img class='avatar' src="${data.streams[i].channel.logo}">
              <div class='stream-text'>
                <p class='title'>${data.streams[i].channel.status}</p>
                <p class='streamer'>${data.streams[i].channel.display_name}</p>
              </div>
            </div>
          </a>`;
          $(".container").append(content);
        }
      },
      error: function(data) {
        console.log('error', data);
      }
    });
  });
  $("#btnKo").click(function (){
    $.ajax({
      url: 'https://api.twitch.tv/kraken/streams/?language=ko',
      headers: {'Client-ID': 'j57loptgkgakodmowbvqbqu92a61jy'},
      dataType: 'json', 
      type: 'GET',
      success: function(data) {
        console.log(data);
        $(".container").empty();
        for(var i = 0; i < 21; i++) {
          let content =
          `<a href="${data.streams[i].channel.url}" class='stream-item'>
            <img class='preview' src="${data.streams[i].preview.medium}">
            <div class='content'>
              <img class='avatar' src="${data.streams[i].channel.logo}">
              <div class='stream-text'>
                <p class='title'>${data.streams[i].channel.status}</p>
                <p class='streamer'>${data.streams[i].channel.display_name}</p>
              </div>
            </div>
          </a>`;
          $(".container").append(content);
        }
      },
      error: function(data) {
        console.log('error', data);
      }
    });
  });
});
