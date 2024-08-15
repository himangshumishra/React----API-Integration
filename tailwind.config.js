/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
	
	plugin(function ({ addVariant, e, postcss }) {
	  addVariant('firefox', ({ container, separator }) => {
		const isFirefoxRule = postcss.atRule({
		  name: '-moz-document',
		  params: 'url-prefix()',
		});
		isFirefoxRule.append(container.nodes);
		container.append(isFirefoxRule);
		isFirefoxRule.walkRules((rule) => {
		  rule.selector = `.${e(
			`firefox${separator}${rule.selector.slice(1)}`
		  )}`;
		});
	  });
	}),
  ],
}

