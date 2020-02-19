// component to format job page

export default function Job(job) {

    return `
    <div class="story">
      <div>
        <a href="${job.url}">${job.title}</a>
        <a href="${job.url}">
        <span class="points">(${job.domain})</span></a>
      </div>      
        <div class="points">
          <a href="#/item?id=${job.id}">${job.time_ago}</a>
        </div>      
    </div>`
  }