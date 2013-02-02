$(function() {
  $.ajax({
    url: "https://graph.facebook.com/fql?q=SELECT%20url,%20normalized_url,%20share_count,%20like_count,%20comment_count,%20total_count,commentsbox_count,%20comments_fbid,%20click_count%20FROM%20link_stat%20WHERE%20url='narze.github.com/blltz-wife-counter'"
  , dataType: 'json'
  , type: 'get'
  , success: function(res) {
      $('.count').html(res.data[0].like_count);
    }
  });
});
