module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended', //
		'plugin:react/recommended',
		'plugin:prettier/recommended',
	],
	overrides: [
		{
			files: ['*.md', '*.mdx'],
			extends: 'plugin:mdx/recommended',
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {},
};
