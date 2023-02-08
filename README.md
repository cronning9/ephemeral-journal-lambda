## README

### To run locally:

`yarn start:local`

Related `docker` commands may well be needed in the future. For now, I'm not using them, as I'm able to run everything locally using the SAM CLI. S

### `yarn build`

Bundles up all the relevant files into a .zip, for upload to AWS Lambda console


### TODOS:

- [ ] Figure out how to run server locally, so I can test from Postman etc
- [ ] New event to create new journal entries -- based on `eventType` within the event object.
