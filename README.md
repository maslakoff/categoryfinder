# Category finder

Parse files to make structured categories

## How to use 
Clone the repo and install dependencies.

```
git clone https://github.com/maslakoff/categoryfinder.git
cd categoryfinder
npm i
```

Place txt collections to the `sourceDir` (take a look on config file) directory and run:
```
npm run category
```

This command will find files by a filename that passed `sourceFilePattern`, 
convert collection to a tree and combine it in separate file.
`categoryPattern` will be used to find a category. Each next line as category item.

Output will be stored under the `outputDir` directory.
