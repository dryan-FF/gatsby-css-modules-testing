Repository to help demonstrate that Gatsby is producing some unexpected output when using CSS modules.

In this repository, there are three pages:
- `/index`
- `/another-page`
- `/page-after-index`

Each of these pages uses `styling/button.module.css`, in different ways. `/index` imports this style directly, as its wishing to use the base button (green backround, white text). The two other pages are creating a secondary-type button: `/another-page` (white background with green text), and `/page-after-index` (white background with blue text).

The issue is that the styles from `styling/button.module.css` are being outputted twice: first, as part of the composed button from `pages/another-page.module.css`, and second from when its imported directly in `pages/index.js`. The second outputting of these styles overwrites the composed `.linkButton` class from `pages/another-page.module.css`, preventing the styles from working. The styles in `pages/page-after-index.module.css` work, as they're loaded after the directly imported file (in  fact, it even works if `/another-page` is removed, so the issue seems to be dependent on ordering).

See [`CSS_OUTPUT.css`](CSS_OUTPUT.css) to view the compiled CSS yourself.

This seems to be due to the mixed use of `button.module.css` for composition in other CSS Modules, and in directly importing into a JS file. The alphabetical order of the pages also matters, likely due to how webpack is loading in each of these files.

In [this branch](https://github.com/dryan-ff/gatsby-css-modules-testing/tree/no-issues), you can see that I've moved the direct import of `button.module.css`, instead composing it in `styling/index.module.css` (with no other styles) and importing it from that file.

I've also built a simple page that compiles similar components/styles using Webpack, which does not have the same duplication issues: https://github.com/dryan-FF/webpack-modules-css-testing
