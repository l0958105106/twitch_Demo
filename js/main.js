$(document).ready(function (){
  var lang_ko = 'https://api.twitch.tv/kraken/streams/?language=ko&game=League%20of%20Legends';
  var lang_tw = 'https://api.twitch.tv/kraken/streams/?language=zh-tw&game=League%20of%20Legends';
  var lang_en = 'https://api.twitch.tv/kraken/streams/?language=en&game=League%20of%20Legends';
  var getAjax = function(language){
    $.ajax({
      url: language,
      headers: {'Client-ID': 'j57loptgkgakodmowbvqbqu92a61jy'},
      dataType: 'json', 
      type: 'GET',
      success: function(data) {
        $(".container").empty();
        for(var i = 0; i < 21; i++) {
          var content =
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
    }
  $("#btnZh").click(function () {
    getAjax(lang_tw);
  });
  $("#btnKo").click(function () {
    getAjax(lang_ko);
  });
  $("#btnEn").click(function () {
    getAjax(lang_en);
  });
  window.onload = getAjax(lang_tw);
});