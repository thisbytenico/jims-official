module.exports = {
    root: true,
    parserOptions: {
        parser: "babel-eslint",
        sourceType: "module"
    },
    env: {
        browser: true,
        node: true,
        es6: true,
        'vue/setup-compiler-macros': true
    },
    extends: [
        "plugin:vue/essential",
        "eslint:recommended",
        "plugin:prettier/recommended"
    ],
    plugins: [
		'prettier'
	],
    rules: {
        "vue/no-v-model-argument": 0,
        'vue/no-v-for-template-key': 'off',
        'vue/require-prop-type-constructor': 'off',
        'vue/multi-word-component-names': 0,
        "no-alert": 2,
        "no-console": process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "no-const-assign": 2,
        "no-dupe-args": 2,
        "no-else-return": 2,
        "no-eq-null": 2,
        "no-extra-parens": 2,
        "no-extra-semi": 2,
        "no-func-assign": 2,
        "no-var": 2,
        "arrow-parens": 0,
        "indent": ["error", 4, { "SwitchCase": 1 }]
    }
}