# example-customer-cards

This is a fake back end which allows us to build, test and demo [Plain Customer Cards](https://docs.plain.com/adding-context/customer-cards).

## Realistic example cards

You can use these realistic example cards to try out customer cards.

- Title: you can enter whatever you'd like
- Card keys: open up [./src/cards](./src/cards) or the [API](https://example-customer-cards.plain.com/) to see available keys.
- Default TTL: you can enter whatever you like (for example 15 seconds)
- URL: `https://example-customer-cards.plain.com/` (no headers required)

## Component examples

You can use these realistic example cards to try out one of the components documented on our [Plain UI Components](https://docs.plain.com/adding-context/ui-components) page.

- Title: you can enter whatever you'd like
- Card keys: open up [./src/cards/components](./src/cards) or the [API](https://example-customer-cards.plain.com/components) to see available keys.
- Default TTL: you can enter whatever you like (for example 15 seconds)
- URL: `https://example-customer-cards.plain.com/components`

## Adding a new card

To add a new card:

1. add it to [./src/cards](./src/cards) folder
2. import it and use it in [the api handler](./api/index.ts)
3. open a PR and use the preview URL to test

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