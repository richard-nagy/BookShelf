# BookShelf 
A BookShelf az egy általam készített egyszerű weboldal. Célja hogy a felhasználó az általa elolvasott könyveket tudja dokumentálni és rendszerezni.

README Nyelvek: [english][english], [magyar][magyar].

---

#### Hogyan dolgoztam ezen a projecten
- Készítettem egy vizuális tervet a Figma Design oldalán: [Dizájn Terv][Design Plans]
- A feladataimat a Notion oldalán rendszereztem: [Notion Tasks][Notion Tasks]
- A commiteket *develop* ágra töltöttem fel: [Develop Branch][Develop Branch]
- Az weboldalt Github Pages segítségével futtatom, az oldal itt megtekinthető: [Weboldal][Website]

---

#### Hogyan navigáljunk a projectban
- Firebase adatbázis: [Képek][Firebase photos]
- Firebase adatok lekérdezése: [Kód Példa][Firebase request]
- Media Query alkalmazás: [Kód Példa][Media Query]
- Értékelés rendszer csillagokkal: [Kód Példa][Stars]

---

#### Miért így készítettem el a projectet

- Törekedtem rá hogy minél kevesebb Nodejs modult használjak, mivel elsősorban a célom az volt hogy a Javascript és React tudásomat mutassam be.
- Szerettem volna az oldalt egy online szerverre feltölteni, hogy akárki megnézhesse. Ezt a gh-pagel értem.
- Az oldalnak szüksége volt egy adatbázisra. A Firebase-n ingyenesen lehet adatbázist megosztani, ezért ezt választottam. Hátránya viszont hogy az adatbázis, az adatokat JSON formában tárolja el. Így a projecten belül SQL tudásom megmutatására nincs lehetőségem.

---

#### Mit csináltam volna másként

- A fejlesztés legelejétől kezdve automatált teszteket használtam volna.
- Firebase JSON adatbázisa helyett, egy SQL adatbázist használtam volna.

---

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

[english]: https://github.com/BigRicsoo/BookShelf/blob/main/README.md "english"
[magyar]: https://github.com/BigRicsoo/BookShelf/blob/main/README.hu.md "magyar"
[Design Plans]: https://www.figma.com/proto/erGFEN1nLHkLh7cbiMdhNk/Book-Managin-app?node-id=205%3A1462&scaling=scale-down&page-id=0%3A1 "Dizájn Terv"
[Notion Tasks]: https://orchid-rat-c72.notion.site/769b9bd79b82414980ddd54c1019c385?v=39825b0cbe30429cb889741786d82690 "Notion Tasks"
[Develop Branch]: https://github.com/BigRicsoo/BookShelf/commits/develop "Develop Branch"
[Website]: https://bigricsoo.github.io/BookShelf/ "Website"
[Firebase request]: https://github.com/BigRicsoo/BookShelf/blob/b889ad70a4e3373c310274c2bde7d5e8849b698b/src/Components/App.js#L70 "Kód Példa"
[Media Query]: https://github.com/BigRicsoo/BookShelf/blob/b889ad70a4e3373c310274c2bde7d5e8849b698b/src/Components/App.module.scss#L266 "Kód Példa"
[Stars]: https://github.com/BigRicsoo/BookShelf/blob/b889ad70a4e3373c310274c2bde7d5e8849b698b/src/Components/Edit.js#L75  "Kód Példa"
[Firebase photos]: https://imgur.com/a/v4CHk3e "Képek"
