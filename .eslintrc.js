module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["airbnb"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-filename-extension": 0,
        "react/no-unescaped-entities": 0,
        "max-len": ["error", { "code": 200 }],
        "global-require": 0,
        "import/no-dynamic-require": 0,
        "react/forbid-prop-types": 0,
        "linebreak-style": 0,
        "react/jsx-no-target-blank": 0
    }
};
