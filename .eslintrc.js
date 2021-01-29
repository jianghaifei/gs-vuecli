module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
    parserOptions: {
        parser: "babel-eslint"
    },
    rules: {
        "no-unused-vars": "warn",
        "no-irregular-whitespace": "off",
        "no-multiple-empty-lines": "off",
        quotes: [0, "doubel"],
        semi: 0,
        "space-before-function-paren": 0,
        indent: ["off"],
        eqeqeq: ["off"],
        trailing: 0
    }
};
