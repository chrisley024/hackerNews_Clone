//stories page
import view from '../utils/view.js';
import Story from '../components/Story.js';
import Job from '../components/job.js';
import New from '../components/New.js';
import HeaderComments from '../components/HeaderComments.js';
import baseUrl from '../utils/baseUrl.js';


export default async function Stories(path) {
  const stories = await getStories(path);
  const hasStories = stories.length > 0;

    if (path === '/jobs') {   // job page
        view.innerHTML = `
        <div>
          <p class="story">These are jobs at YC startups. See more at
            <a href="#" id="job-intro">Work at a Startup, Triplebyte, Key Values.</a>
            <br>
          </p>
          ${hasStories ? stories.map(job => Job(job)).join('') : "No stories"}
        </div>`;
    } else if (path === '/show') {  // show page
      view.innerHTML = `
      <div>
        <p class="story">Please read the
          <a href="#" id="job-intro">rules.</a> You can also browse the 
          <a href="#" id="job-intro"> newest </a>  Show HNs.
          <br>
        </p>
        ${hasStories ? stories.map((story, i) => Story({...story, index: i + 1})).join('') : "No stories"}
      </div>`;
    } else if (path === '/newest') { // new page
      view.innerHTML = `
      <div>
        ${hasStories ? stories.map((newPage, i) => New({...newPage, index: i + 1})).join('') : "No stories"}
      </div>`;
    } else if (path === '/newcomments') { // header comments page
      view.innerHTML = `
      <div>
        ${hasStories ? stories.map(headerComment => HeaderComments(headerComment)).join('') : "No stories"}
      </div>`;
    } else {
      view.innerHTML = `
      <div>
        ${hasStories ? stories.map((story, i) => Story({...story, index: i + 1})).join('') : "No stories"}
      </div>`;
    }
}

// get stories from https://node-hnapi.herokuapp.com and path
async function getStories(path) {
  const isHomeRoute = path === '/';

  if(isHomeRoute)
    path = '/news';

  const response = await fetch(`${baseUrl}${path}`);
  const stories = await response.json();
  return stories;
}