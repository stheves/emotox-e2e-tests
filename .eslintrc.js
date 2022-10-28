module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    plugins: ['cypress'],
    extends: ['standard-with-typescript', 'prettier'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/no-namespace': [
                    'error',
                    { allowDeclarations: true },
                ],
            },
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: __dirname,
            },
        },
    ],
};
