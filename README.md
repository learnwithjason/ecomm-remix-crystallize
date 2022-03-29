<p align="center">
  <a href="https://www.learnwithjason.dev">
    <img src="https://res.cloudinary.com/jlengstorf/image/upload/q_auto,f_auto,w_240/v1579281727/lwj/learnwithjason.png" alt="Learn With Jason" width="120" />
  </a>
</p>
<h1 align="center">
  Build a Page Speed 100 E-commerce Site (with Håkon Krogh)
</h1>
<h3 align="center">
  This app was built live on <em>Learn With Jason</em> and it was super fun and I’m sad you weren’t there.
</h3>
<p align="center">
  But don’t worry! You can still: 
  <a href="https://www.learnwithjason.dev/build-a-page-speed-100-e-commerce-site"><strong>watch the video</strong></a> · 
  <a href="https://ecomm-remix-crystallize.netlify.app"><strong>see the demo</strong></a> · 
  <a href="https://app.netlify.com/start/deploy?repository=https://github.com/learnwithjason/ecomm-remix-crystallize&utm_source=learnwithjason&utm_medium=github&utm_campaign=devex"><strong>deploy this project</strong></a> · 
  <a href="https://jason.af/lwj/schedule"><strong>see upcoming episodes</strong></a>
</p>

&nbsp;

On e-commerce sites, page performance is everything. In this episode, Håkon Krogh will teach us how to build a web store that aces the Page Speed checks using Remix and Crystallize.

&nbsp;

## More Information

- [Watch this app get built live + see links and additional resources][episode]
- [Follow _Learn With Jason_ on Twitch][twitch] to watch future episodes live
- [Add the _Learn With Jason_ schedule to your Google Calendar][cal]

&nbsp;
<p align="center">
  <a href="https://app.netlify.com/start/deploy?repository=https://github.com/learnwithjason/ecomm-remix-crystallize&utm_source=learnwithjason&utm_medium=github&utm_campaign=devex">
    <img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy this project to Netlify" />
  </a>
</p>

[episode]: https://www.learnwithjason.dev/build-a-page-speed-100-e-commerce-site
[twitch]: https://jason.af/twitch
[cal]: https://jason.af/lwj/cal

- [Remix Docs](https://remix.run/docs)

## Netlify Setup

1. Install the [Netlify CLI](https://www.netlify.com/products/dev/):

```sh
npm i -g netlify-cli
```

If you have previously installed the Netlify CLI, you should update it to the latest version:

```sh
npm i -g netlify-cli@latest
```

2. Sign up and log in to Netlify:

```sh
netlify login
```

3. Create a new site:

```sh
netlify init
```

## Development

The Netlify CLI starts your app in development mode, rebuilding assets on file changes.

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000), and you should be ready to go!

## Deployment

There are two ways to deploy your app to Netlify, you can either link your app to your git repo and have it auto deploy changes to Netlify, or you can deploy your app manually. If you've followed the setup instructions already, all you need to do is run this:

```sh
npm run build
# preview deployment
netlify deploy

# production deployment
netlify deploy --prod
```
