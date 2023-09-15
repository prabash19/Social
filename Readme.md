In package.json of api, the config for nodemon "legacyWatch": true is added to ensure nodemon is able to detect changes in file system while running in a docker container.

In next.config.js of client, nextConfig is added to ensure, the next server is always looking for changes that occur in the docker container.
