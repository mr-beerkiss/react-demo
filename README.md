## Damon's Amazing Task List React Demo

### Introduction

This is a demo that represents how I would build an application in React to help you assess my abilities and my suitability for your role. I could provide examples of work from a previous role, but ignoring the fact it isn't really my code to share, it would not really represent how I would build a React application today.

With Facebook's release of [create-react-app](https://github.com/facebookincubator/create-react-app) I would now look to embrace this standardised, moderately opinionated approach as much as possible, rather than stick with the fragmented bespoke build processes or 3rd party boilerplates we previously had no choice to do.

I've tried to move away from using a traditional CSS pre-processor such as SASS, a stylesheet file structure convention such as ITCSS and class naming convention such BEM and embrace `create-react-app`'s recommended usage of using CSS modules and essentially embedding CSS directly into React components via Webpack (a good article on this [here](https://www.triplet.fi/blog/practical-guide-to-react-and-css-modules/)).

Unfortunately, the default configuration of `create-react-app` doesn't turn on the option for dynamically generated classNames that are scoped to the module they're used in. Styles are global just like they would be normally. The only way around it without `create-react-app eject`ing the project is to use the special and explicit `:local(.myClassName) { ... }` syntax. This, however, breaks testing using Jest's extremely useful [snapshot](https://facebook.github.io/jest/docs/snapshot-testing.html#content) feature as classNames aren't generated properly and just show `undefined`. Therefore, I have to `create-react-app eject` and tweak the Webpack configuration to get the ideal setup.

Even though I've been forced to `create-react-app eject`, losing the huge advantage of simple React dependency updates and a simpler project structure, this is still for me, better than bespoke build processes and 3rd party boilerplates when setting up a project.

Plus, Jest has come a long way and using [snapshot](https://facebook.github.io/jest/docs/snapshot-testing.html#content) testing with Enzyme, testing is generally fantastic.

This demo covers the following:
* How I structure my `./src`
* How I build components
* My coding style (using [http://standardjs.com/](http://standardjs.com/))
* How I unit test
* My usage of Flux architecture using Redux

There are `README.md` files dotted around in folders with further details.

### Setup

Exactly as you'd expect:
* Clone the project
* `npm install`
* `npm start` and/or `npm test`
