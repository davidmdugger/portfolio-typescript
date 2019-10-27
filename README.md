<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.daviddugger.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  David's Portfolio
</h1>

I used [Gatsby Starter] for this portfolio to bootstrap the project.

Then, I added the following dependencies:

1.  **TypeScript**
    _Why_: For type checking my JavaScript and JSX files to prevent/catch bugs and intelliscence is awesome even with a solo project.

2.  **ESLINT**
    _Why_: For automated conventions enforcement. I may not come back to my portfolio for weeks or months at a time. So, having strict syntax enforcement is important.

Also, setting up linting and lint:fix to run through all of my files to cleanup files is a hell of a lot easier than going into each file one by one to format on save or remove, say, trailing commas.

3.  **Husky**
    _Why_: To run pre and post git commits. I'm type checking and linting all of my staged files to ensure they meet my `rc` files configurations.

4.  **Lint Staged**
    _Why_: This allows me to only run the linting and type-checking on currently staged files during a pre commit to enforce my linting and type checking configurations.

5.  **Styled Components**
    _Why_: Styled components is an elegant CSS in JS solution that allows me to encapsulate styles at the components level. In addition, I can create a theme with a style guide to enforce style decisions. The style guide will include fonts, colors, margins, layouts, etc.

    I'll also begin to build out a component library for this project and enforcing the styles via typescript and pre-commit linting with husky and lintstaged will ensure I'm following my own style guide.
