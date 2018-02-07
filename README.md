To start the project the first time and create the node_mudules folder run:
yarn install

Install Babel:
yarn global add babel-cli@6.24.1

Add Babel presets for react:
yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2 

Run and watch babel:
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

Live server install:
yarn global add live-server

Live Server run:
live-server public
