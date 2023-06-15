module.exports = {
	extends: [
		// By extending from a plugin config, we can get recommended rules without having to add them manually.
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:import/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:@typescript-eslint/recommended',
		// This disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
		// Make sure it's always the last config, so it gets the chance to override other configs.
		'eslint-config-prettier',
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	settings: {
		react: {
			// Tells eslint-plugin-react to automatically detect the version of React to use.
			version: 'detect',
		},
		// Tells eslint how to resolve imports
		'import/resolver': {
			node: {
				paths: ['src'],
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
			alias: {
				map: [
					['@assets', './src/assets'],
					['@components', './src/components'],
					['@constants', './src/constants'],
					['@lib', './src/lib'],
				],
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
	root: true,
	rules: {
		'react/react-in-jsx-scope': 'off',
		'no-irregular-whitespace': 'off',
	},
	env: {
		browser: true,
		node: true,
	},
}
