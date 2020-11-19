module.exports = {
  "extends": [
    "eslint:recommended",
    "airbnb-base/legacy"
  ],
  "plugins": [
    "babel"
  ],
  "env": {
    "node": true,
    "es6": true
  },
  "globals": {
    "$": true,
    "document": true,
    "window"  : true
  },
  "rules": {
    "max-len": ["error", 150],
    "comma-dangle": ["error", "never"],
    "spaced-comment": ["off"],
    "padded-blocks": ["off"],
    "func-names": ["off"],
    "quote-props": ["off"],
    "no-unused-vars": ["warn", "all"],
    "no-underscore-dangle": ["off"],
    "space-before-function-paren": ["error", "always"],
    "no-console": ["error", { allow: ["error"] }],
    "generator-star-spacing": 1,
    "babel/new-cap": 1,
    "array-bracket-spacing": 1,
    "babel/object-curly-spacing": 0,
    "object-shorthand": 1,
    "arrow-parens": 1,
    "no-await-in-loop": 1,
    "linebreak-style": 0,
  },
  "parser": "babel-eslint"
};
