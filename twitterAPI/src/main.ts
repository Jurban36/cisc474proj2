import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { fetchHomeTimeline } from 'twitter-api-ts';
import * as option from 'fp-ts/lib/Option';

if (environment.production) {
  enableProdMode();
}
const CONSUMER_KEY= 'V19s4vhP0sAsSxgjWPHiPu1ob';
const CONSUMER_SECRET= 'C8uwJzT6UJ0tB0BCZBSJBQCzp6RQPiO7DfGB9prdyqWmNGMjAF';
const TOKEN= '339742304-qOxbjPHi2OLCEmMWpqF1v7YrA9kQtOhF7QLLxzZK';
const TOKEN_SECRET= 'yKWY3nrbhW8d5RHXRJqYYofCMxZmvPZS9vVGPlur4LoX1';

// fetchHomeTimeline({
//   oAuth: {
//       consumerKey: CONSUMER_KEY,
//       consumerSecret: CONSUMER_SECRET,
//       token: option.some(TOKEN),
//       tokenSecret: option.some(TOKEN_SECRET),
//   },
//   query: {
//       count: option.some(50),
//   },
// })
// var twit = require('twit');

// const client = new Twitter({
//   consumer_key: 'V19s4vhP0sAsSxgjWPHiPu1ob',
//   consumer_secret: 'C8uwJzT6UJ0tB0BCZBSJBQCzp6RQPiO7DfGB9prdyqWmNGMjAF',
//   access_token: '339742304-qOxbjPHi2OLCEmMWpqF1v7YrA9kQtOhF7QLLxzZK',
//   access_token_secret: 'yKWY3nrbhW8d5RHXRJqYYofCMxZmvPZS9vVGPlur4LoX1'
// });

// var params = {screen_name: 'nodejs'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);
//   }
// });

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

