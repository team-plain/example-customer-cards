# example-customer-cards

This is a fake 'back-end' which we can use to test and demo customer cards.

To use this in a workspace, create a customer card with the url:
https://example-customer-cards.plain.com/ and any of the keys defined in the [./src/cards](./src/cards) folder. TTL and other options don't matter so you can provide anything you want.

To add a card, add it to [./src/cards](./src/cards) folder and then make sure to import it and use it in [the api handler](./api/index.ts). 

On merging to main, this will be deployed and it should then work.

## Building customer cards locally

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