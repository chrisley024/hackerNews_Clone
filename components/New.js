// component to format new page in the header

export default function New(newPage) {

  return `
  <div class="story">
    <div>
      <span class="gray">${newPage.index || ""}</span>
      <span class="upvote">▲</span>
      <a href="${newPage.url}">${newPage.title}</a>
      <a href="${newPage.url}">
      <span class="points">(${newPage.domain})</span></a>
    </div>      
    <div class="points2">${newPage.points} points by ${newPage.user} 
      <a href="#/item?id=${newPage.id}">${newPage.time_ago}</a>
      |
      <a href="https://news.ycombinator.com/hide?id=22346349&goto=news"> hide </a>
      |
      <a href="#"> past </a>
      |
      <a href="http://www.google.com"> web </a>
      |
      <a href="#/item?id=${newPage.id}"> discuss </a> 
    </div>      
  </div>`
}