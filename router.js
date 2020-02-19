import Stories from './pages/stories.js';
import Item from './pages/comments.js';

const router = new Navigo(null, true, '#');

export default class RouterHandler {
  constructor() {
    this.createRoutes()
  }

  createRoutes() {
    const routes = [
      { path:'/', page: Stories },
      { path:'/news', page: Stories },
      { path:'/newest', page: Stories },
      { path:'/front', page: Stories },
      { path:'/newcomments', page: Stories },
      { path:'/ask', page: Stories },
      { path:'/show', page: Stories },
      { path:'/jobs', page: Stories },
      { path:'/item', page: Item }
      
    ];

    routes.forEach(({ path, page }) => {
      router.on(path, () => {
        page(path);
      }).resolve();
    })
  }
}