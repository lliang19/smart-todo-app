# smart-todo-app
This app was bootstrapped using [Expo](https://expo.io/).

## Overview
`TODO`

## Development
Our primary tech stack includes the following packages:
- `expo`
- `react-native`
- `react-native-paper`
- `redux`, `react-redux`, `@reduxjs/toolkit`

Some devops in this repo include:
- `eslint`
- `husky`
- `docker` (future)

### Scripts
#### `yarn start`
Starts the expo app in development mode. Use the [Expo Client](https://expo.io/tools#client) for iOS/Android to run the app locally. Expo uses a form of hot module reloading, so any change you make will be reflected automatically on save.

However, sometimes certain parts of the app will not be updated correctly, so if you `Ctrl+C` and exit the Expo runtime environment and run `yarn start` again it should fix that.

### `yarn run eject`
**WARNING:** Do **not** run this script and push into our main branch. This will (literally) eject all the middleware and behind-the-scenes devops that Expo offers and dump it all into our repo. This isn't necessarily bad but should only be done if we're sure that Expo is hiding something (i.e. webpack, babel, etc.) from us that is blocking our development.

### `yarn run eslint-fix`
`eslint` is already configured for this reop, so you shouldn't have to touch this, but if you want to just lint the entire repo from `src` down, you can run this script. This script is primarily used by `husky` to lint our repo whenever we commit something.

## Notes
In the future, we'll potentially want to dockerize a couple things, including `nginx`, some `postgresql` database, etc.