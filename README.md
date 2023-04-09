# Code Exercise

This project contains some DOM manipulation, Promises and Arrays exercises.

This project was build with [Vite](https://vitejs.dev/)

### Using NPM

- Run `npm install` to install the project dependencies
- Run `npm run dev` to execute the project and see the webpage

### Project structure

The project code contains two folders, the folder `public` where we have only a few html files about the DOM Manipulation and Promise exercise, and the folder `src`
where we have the files about the main page and the folder `components`, this last folder has the files that compose the webpage.

```
├── src
│   ├── components                      # Folder with some javascript files that compose the webpage.
│   │   ├── ArraysAndObject.module.css  # File with css definitions.
|   |   ├── ArraysAndObjects.jsx        # File with the design and some logic structure for the exercise.
|   |   ├── Header.module.css           # File with css definitions.
|   |   ├── Header.jsx                  # File with the design and some logic structure for the exercise.
│   ├── App.jsx                         # The main file where we import the components and do some code logic.
|   ├── App.module.css                  # File with css definitions.
|   ├── global.css                      # File with global css definitions.
|   ├── main.jsx                        # File with the structer to call the file App.jsx and execute our webpage.
│
├── package.json
├── vite.config.js                      # Vite file
├── index.html                          # Html file where we have the id root for calling the main.jsx
└── .gitignore
```

### Layout structure

The webpage structure is quite simple, we have a header with three links to the html files with the three exercises DOM Manipulation, Promises and Async/Await
and below of the header we have the fourth exercise about the Array and Objects manipulation.

![image](https://user-images.githubusercontent.com/8752639/230773174-3683c2ae-a5cd-42d2-af8f-93b3f1963693.png)
