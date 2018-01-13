module.exports = {
	collectCoverageFrom: [
		"app/src/**/*.{js,jsx}"
	],
	setupFiles: [
		"<rootDir>/config/polyfills.js"
	],
	testMatch: [
		"<rootDir>/app/src/**/?(*.)(spec|test).js?(x)",
	],
	testURL: "http://localhost",
	transform: {
		"^.+\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest",
		"^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
		"^(?!.*\\.(js|jsx|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
	},
	transformIgnorePatterns: [
		"[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"
	],
	moduleNameMapper: {
		"^react-native$": "react-native-web"
	},
	moduleFileExtensions: [
		"web.js",
		"js",
		"json",
		"web.jsx",
		"jsx",
		"node"
	],
	modulePathIgnorePatterns: [
		"<rootDir>/src/routes/index.js",
		"<rootDir>/src/index.js",
		"<rootDir>/src/registerServiceWorker.js"
	]
};
