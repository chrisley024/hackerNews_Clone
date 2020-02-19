// component to format header comments page

export default function HeaderComments(comments) {

  return `
  <div>
    <span class="upvote">▲</span>
    <span id="headcom">${comments.user} 
        <a href="#/item?id=${comments.id}">${comments.time_ago || 0} minutes ago</a> 
        | 
        <a href="#">parent</a> 
        | 
        <a href="">on:</a>      
    </span>
    <div id="headcom2">
      <a href="${comments.url}">${comments.content}</a>
    </div>
  </div>`
}