module.exports = {
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
    "extends": ["airbnb-base"],
    "plugins": [
      "react"
  ],
  "rules": {
      "quotes": [
          2,
          "single"
      ],
      "no-trailing-spaces": 0,
      "camelcase": 0,
      "no-unused-vars": 0,
      "class-methods-use-this": 0,
      "prettier/prettier": "error",
      "comma-dangle": 0,
      "react/jsx-uses-vars": 1,
      "react/display-name": 1,
      "no-unused-vars": "warn",
      "no-console": 1,
      "no-unexpected-multiline": "warn",
      'no-plusplus': [2, { 
          allowForLoopAfterthoughts: true }],
      "react/jsx-curly-spacing": [2, {
          "when": "always", 
          "attributes": {
              "allowMultiline": false
            }, 
        "children": true}
    ],
  },
  "settings": {
      "react": {
          "pragma": "React",
          "version": "15.6.1"
      }
  }
  };