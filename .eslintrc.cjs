module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
		"prettier",
		"plugin:tailwindcss/recommended",
		"plugin:prettier/recommended",
	],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser",
	overrides: [
		{
			files: ["*.ts", "*.tsx", "*.js"],
			parser: "@typescript-eslint/parser",
		},
	],
	plugins: ["react-refresh", "tailwindcss", "prettier"],
	rules: {
		"prettier/prettier": "error",
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
		"@typescript-eslint/no-explicit-any": "warn",
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
