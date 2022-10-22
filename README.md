# example-customer-cards-api

This is a fake 'back-end' which we can use to test and demo customer cards.

To use this in a workspace, create a customer card with the url:
https://demo-customer-cards.vercel.app/ and any of the keys defined in the [./src/cards](./src/cards) folder. TTL and other options don't matter so you can provide anything you want.

To add a card, add it to [./src/cards](./src/cards) folder and then make sure to import it and use it in [the api handler](./api/index.ts). 

On merging to main, this will be deployed and it should then work.

