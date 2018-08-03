$(document).ready(function () {
  $.ajax({
    url: 'https://api.twitch.tv/kraken/streams/?game=League%20of%20Legends',
    headers: {'Client-ID': 'j57loptgkgakodmowbvqbqu92a61jy'},
    type: 'GET',
    success: function(data) {
      for(var i = 0; i < 21; i++) {
        let content =
        `<a href="${data.streams[i].channel.url}" class='stream-item'>
          <img class='preview' src="${data.streams[i].preview.large}">
          <div class='content'>
            <img class='avatar' src="${data.streams[i].channel.logo}">
            <div class='stream-text'>
              <p class='title'>${data.streams[i].channel.status}</p>
              <p class='streamer'>${data.streams[i].channel.display_name}</p>
            </div>
          </div>
        </a>`;
        $( ".container" ).append(content);
      }
      console.log(data);
    },
    error: function(data) {
      console.log('error', data);
    }
  });
});
