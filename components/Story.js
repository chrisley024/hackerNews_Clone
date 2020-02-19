// component to format stories page

export default function Story(story) {
  const hasDomain = story.domain;

    return `
    <div class="story">
      <div>
        <span class="gray">${story.index || ""}</span>
        <span class="upvote">▲</span>
        <a href="${story.url}">${story.title}</a>
        <a href="${story.url}">
        <span class="points">${hasDomain ? `(${story.domain})` : "" }</span></a>
      </div>
      <div>
        <div class="points2">${story.points} points by ${story.user} 
          <a href="#/item?id=${story.id}">${story.time_ago}</a>
          |
          <a href="https://news.ycombinator.com/hide?id=22346349&goto=news">
          hide</a>
          |
          <a href="#/item?id=${story.id}">
          ${story.comments_count} comments
          </a>
        </div>
      </div>
    </div>`
  }