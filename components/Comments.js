// component to format comments

export default function Comment(comment) {
  const hasNestedComments = comment.comments.length > 0;

  return `
  <div class="nested-comments-${comment.level}">
      <p class="points">
        <span class="upvote">▲</span>
        <a href="#">${comment.user} ${comment.time_ago}</a>          
      </p>
      ${comment.content}
      <p class="points2">
        <a href="https://news.ycombinator.com/login?goto=news" id="reply">reply</a>
      </p>
      ${hasNestedComments ? comment.comments.map(comment => Comment(comment)).join("") : ""}
      
  </div>`
}