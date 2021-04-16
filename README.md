# Truss Work Sample

Hi, friends!

This is a work sample, solving the [API data display](https://github.com/trussworks/truss-interview/blob/main/BROWSER_README.md) challenge.

A deployed version of this is located at [https://kylehill-truss-sample.vercel.app/](https://kylehill-truss-sample.vercel.app/).

## Commands

Things you might want to run:

- `yarn dev`: Run the application locally (localhost:3000)
- `yarn build`: Create a production build
- `yarn storybook`: Runs storybook locally for isolated component development (localhost:6006)
- `yarn test`: Sets up a watcher to run tests on file save
- `yarn coverage`: One-off run and report on test coverage

Things you probably don't need to run, but documentation is important:

- `yarn start`: Basically just for Vercel
- `yarn tsc`: Type checking
- `yarn lint`: Just runs the `jsx-a11y` static checker, since I use Prettier integrated in my editor to lint on file save; since there's no user input controls it's a bit ancillary to this project.

## So, hey, what would you change?

There's one mildly dirty hack which is necessarily involved in this project right now -- the value for the `next` property returned by the third-party SWAPI is a HTTP url, but every request to that insecure URL is 307 redirected to its HTTPS equivalent. Making these insecure requests also fails within an HTTPS setting in modern browsers. In a normal development project, I would advocate that the right place to fix the link protocol would be in the API layer.

As this API is in a relatively static place -- the `films` resource has only six entries, which means it hasn't been updated for the new trilogy and spin-off(s? I've honestly not watched a Star War in probably a couple of decades) -- I would say that this app is a great candidate for migration to full server-side generation. This would remove the need for the multiple client-side XHR calls, but since the specs for this challenge require a loading screen, I've chosen to leave it as-is for now.
