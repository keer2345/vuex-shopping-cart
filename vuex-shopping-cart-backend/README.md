# Vuex shopping cart backend
## Create project
```
mkdir vuex-shopping-cart-backend
cd vuex-shopping-cart-backend 
```

```
touch server.js
touch server-cart-data.json
touch server-product-data.json
```

Run command `yarn init` and change *entry point* to `server.js`:
```
yarn init
yarn init v1.22.10
question name (vuex-shopping-cart-backend): 
question version (1.0.0): 
question description: 
question entry point (index.js): server.js
question repository url: 
question author: 
question license (MIT): 
question private: 
success Saved package.json
Done in 18.08s.
```

## Add dependencies
```
yarn add concurrently express body-parser
```
- [Express](https://expressjs.com/) is a Node framework for web applications, which will provide useful abstractions for handling API requests. 
- [Concurrently](https://www.npmjs.com/package/concurrently) will be used to run the Express back-end server and the Vue.js development server simulteneously. 
- [body-parser](https://www.npmjs.com/package/body-parser) is an Express middleware that will parse requests to your API.

## Run server
```
node server
```
