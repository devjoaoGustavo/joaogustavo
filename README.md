# Welcome to João's place

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

###  Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Notes to my future self => How to deploy this app on github-pages

### Comment dist/ line on .gitignore file in order to deploy that directory content
```
# .gitignore

# dist/
```

### For short you can just execute this command changing the commit message
```
git branch gh-pages && \
      npm run build && \
      git add dist/ && \
      git commit -m 'My default commit message' && \
      git subtree push --prefix dist origin gh-pages
```

### Change to gh-pages branch
```
git checkout gh-pages
```

### Build the application after implement the fancy feature
```
npm run build
```

### Add only the dist directory to stage in order to commit only this
```
git add dist/
```

### Commit it
```
git commit -m 'My commit message'
```

### Push the changes to gh-pages just like this
```
git subtree push --prefix dist origin gh-pages
```
