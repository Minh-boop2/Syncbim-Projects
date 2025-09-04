module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
		// "plugin:@typescript-eslint/recommended",
	],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parserOptions: { ecmaVersion: "latest", sourceType: "module" },
	settings: { react: { version: "18.2" } },
	plugins: ["react-refresh"],
	rules: {
		"react/jsx-no-target-blank": "off",
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
		"react/prop-types": "off",

		/**
		 * Cú pháp này xác định:
		 * Trả về một "warn" cho tất cả các dòng Console.
		 * Theo sau đó là các loại bỏ: Ví dụ => Bỏ qua các phương thức được đặt trong "allow".
		 */
		"no-console": [
			"warn",
			{
				allow: [""],
			},
		],
		/**
		 * Cấu hình này cho phép bạn hạn chế các cuộc gọi cụ thể đến đối tượng bảng điều khiển.
		 */
		"no-restricted-syntax": [
			"error",
			{
				selector:
					"CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
				message: "Unexpected property on console object was called",
			},
		],
	},
};
