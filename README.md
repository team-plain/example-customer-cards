# example-customer-cards

This is a fake back end which allows us to build, test and demo [Plain Customer Cards](https://docs.plain.com/adding-context/customer-cards).


### Trying example cards
Go to Plain, log in and go to your workspace **Settings** > **Customer Cards**. Then create a new customer card with the following values:

- Title: you can enter whatever you'd like
- Card key: One of the card keys you can find in [src/example-cards/](./src/example-cards/). Not sure what to pick? Try `subscription-status` or `last-order`.
- Default TTL: you can enter whatever you like (for example 15 seconds)
- URL: `https://example-customer-cards.plain.com/?cardKey={{CARD_KEY}}` replacing `{{CARD_KEY}}` with the key you chose above.


## Adding a new card

To add a new card:

1. Add it to [./src/example-cards](./src/example-cards) folder
1. Import it it in [the index file](./src/example-cards//index.ts)
1. Open a PR and use the preview URL to test

## Running locally

Run the following command to run the server:

```shell
npm run start
```

This will start up the API on http://localhost:3000

Then you'll need to use something like [ngrok](https://ngrok.com/) or [localtunnel](https://theboroer.github.io/localtunnel-www/) to get a public URL which Plain can call.

**Ngrok:**

```shell
ngrok http 3000
```


**localtunnel:**

```shell
lt --port 3000
```