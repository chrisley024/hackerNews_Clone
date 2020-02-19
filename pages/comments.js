// comment page
import Story from '../components/Story.js';
import view from '../utils/view.js';
import baseUrl from '../utils/baseUrl.js';
import Comments from '../components/Comments.js';


export default async function Item() {
  let story = null;
  let hasComment = false;
  let hasError = false;

  try {
    story = await getStory();
    hasComment = story.comments.length > 0;
  } catch(error) {
    hasError = true;
    console.error(error);
  }

  if (hasError) {
    view.innerHTML = `<div> ERROR FETCHING STORY!</div>`;
  }

  view.innerHTML = 
  `<div> 
    ${Story(story)}
  </div>
  <form action="https://news.ycombinator.com/comment">
  <textarea name="comment" cols="60" rows="6"></textarea>
  <br><br>
  <input type="submit" value="add comment">
  </form>
  <br><br><br>
  ${hasComment ? story.comments.map(comment => Comments(comment)).join('') : "No comments available now."}
  `
}

async function getStory() {
  // get info about the route on
  // split url and get story id
  const storyId = window.location.hash.split('?id=')[1];
  const response = await fetch(`${baseUrl}/item/${storyId}`);
  const story = await response.json();
  return story;
}
