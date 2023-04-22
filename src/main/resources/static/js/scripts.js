String.prototype.format = function() {
  var args = arguments;
  return this.replace(/{(\d+)}/g, function(match, number) {
    return typeof args[number] != 'undefined'
        ? args[number]
        : match
        ;
  });
};

$('#btn-save').click((e) => {

  e.preventDefault();

  var queryString = $(".submit-write textarea[name='contents']").serialize();
  var url = window.location.pathname + '/reply';
  var articleIndex = window.location.pathname.split('articles/')[1];
  var replyCounter = $(".qna-comment-count strong");


  $.ajax({
    type: 'POST',
    url: url,
    data: queryString,
    dataType: 'json',
  }).done((data) => {
    var answerTemplate = $("#answerTemplate").html();
    var template = answerTemplate.format(data.userName, data.createdTime,
        data.contents, articleIndex, data.id);

    $(".qna-comment-slipp-articles").append(template);
    $("textarea[name=contents]").val("");

    $(".btn-delete").last().on("click", deleteReply);

    var replyCount = Number(replyCounter.text());
    replyCounter.text(replyCount + 1);

  }).fail((err) => {
    alert(JSON.stringify(err));
  });
});


$('.btn-delete').click(deleteReply)

function deleteReply(e) {

  e.preventDefault();

  var replyId = e.target.dataset['replyId'];
  var url = window.location.pathname + '/reply/' + replyId;

  var replyCounter = $(".qna-comment-count strong");

  $.ajax({
    type: 'DELETE',
    url: url,
    dataType: 'json',
  }).done((data) => {
    alert("댓글 삭제 완료!");
    e.target.closest("article").remove();

    var replyCount = Number(replyCounter.text());
    replyCounter.text(replyCount - 1);

  }).fail((err) => {
    alert("댓글 삭제 실패!");
    console.log(JSON.stringify(err));
  })
}