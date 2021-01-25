# Apollo Schema Publish Webhook Listener
This is a simple server that understands the webhook format for Schema Publish subscriptions and downloads the published schema and prints it out.

## Installing and running locally
To install the required node modules run `npm install`. 

You can use a tool such as  `ngrok` to get a temporary public url so Apollo can send webhooks. This will show an example when using ngrok.
Install `ngrok` and setup the authtoken [docs](https://ngrok.com/docs#getting-started-authtoken).

Run the node server with `node index.js` then run `ngrok http 8080` to start ngrok. Use the forwarding url as the url for the webhook in Apollo Studio.


## Integrating with Apollo
Create a deployed graph in Apollo Studio [docs](https://www.apollographql.com/docs/studio/org/graphs/)

Register a schema to your graph [docs](https://www.apollographql.com/docs/studio/schema/cli-registration/)

Set up a webhook notification using the forwarding url from above [docs](https://www.apollographql.com/docs/studio/notification-setup/)
