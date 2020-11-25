module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['@vue/airbnb', 'plugin:vue/recommended'],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 'off',
        'object-property-newline': [2, { allowAllPropertiesOnSameLine: true }],
        'import/extensions': ['error', 'always', {
            js: 'never',
            mjs: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
            vue: 'never',
        }],
        'import/prefer-default-export': 0,
        'no-param-reassign': [
            'error',
            {
                props: true,
                ignorePropertyModificationsFor: [
                    'state', // for vuex state
                    'acc', // for reduce accumulators
                    'e', // for e.returnvalue
                    'ctx', // for nuxt context extending
                    'config',
                    'Vue',
                ],
            },
        ],
        'vue/component-name-in-template-casing': [
            'error',
            'PascalCase',
            {
                registeredComponentsOnly: false,
                ignores: [],
            },
        ],
        'vue/valid-v-slot': ['error', {
            allowModifiers: true,
        }],
        'vue/v-slot-style': ['error', {
            atComponent: 'shorthand',
            default: 'shorthand',
            named: 'shorthand',
        }],
        'max-len': 'off',
        'vue/max-len': [
            'error',
            {
                code: 110,
                template: 110,
                ignoreHTMLTextContents: true,
                ignoreHTMLAttributeValues: true,
                ignoreComments: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
            },
        ],
        'vue/no-v-html': 0,
        'vue/require-default-prop': 0,
        'linebreak-style': 0,
        'no-await-in-loop': 'off',
        'no-return-assign': 'off',
        'default-case': 0,
        'no-plusplus': 0,
        'func-names': 0,
        radix: 0,
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)',
            ],
            env: {
                jest: true,
            },
        },
    ],
};
