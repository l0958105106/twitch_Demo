$(document).ready(function (){
  let lang_ko = 'https://api.twitch.tv/kraken/streams/?language=ko&game=League%20of%20Legends';
  let lang_tw = 'https://api.twitch.tv/kraken/streams/?language=zh-tw&game=League%20of%20Legends';
  let getAjax = function(language){
    $.ajax({
      url: language,
      headers: {'Client-ID': 'j57loptgkgakodmowbvqbqu92a61jy'},
      dataType: 'json', 
      type: 'GET',
      success: function(data) {
        console.log(data);
        $(".container").empty();
        for(let i = 0; i < 21; i++) {
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
    }
  $("#btnZh").click(function (){
    getAjax(lang_tw);
  });
  $("#btnKo").click(function (){
    getAjax(lang_ko);
  });
  window.onload = getAjax(lang_tw);
});
