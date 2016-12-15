# Inferno Boilerplate CLI

One of the boilerplate features I'm most excited about, is the CLI utilities. I really hate having to create multiple
boilerplate files just to add a simple component to my app. It should be that difficult, and so I made it no longer
that difficult :wink:

## Interactive Maker

The first step is typing in `yarn mk` to load the interactive **m**a**k**er.

```
> $ yarn mk
yarn mkcomp v0.16.1
$ node internals/scripts/mk.js
```

### Template

```
? Which template would you like to use? (Use arrow keys)
❯ component.js
  container.js
```

You must first choose a template for that maker to use. Currently there's only two available, one for a **Stateless Presentational Component** and another for a **Stateful Container Component**. You can view and modify the templates via 
the `internals/templates/` directory.

### Name

```
? Which template would you like to use? component.js
? Name ❯
```

After you select your template, you must name your component. The validation rules are `/^[a-zA-Z0-9_]*$/`. This will be the
name used for the files created, it's recommended to use [`PascalCase`](https://pl.wikipedia.org/wiki/PascalCase).

### Description

```
? Which template would you like to use? component.js
? Name ❯ MovieRow
? Describe your component ❯
```

This next step is for generating an [esdoc](https://esdoc.org/) compatible docblock before the component declaration. It's
recommended to just enter a brief one sentence description of your component. I like to imagine somebody points at the function
and asks me, _"what does this component do?"_, and then I write my answer down. Some may consider this step unnecessary, I think it's good
practice to enforce documentation. Plus it's a lot easier to describe the component's purpose when you actually have a reason
for creating it.

### Styles

```
? Which template would you like to use? component.js
? Name ❯ MovieRow
? Describe your component ❯ Renders a single formatted movie search result
? Create a styles.scss file? (y/N)
```

Finally, it will ask whether you want to generate an accompanying `styles.scss` file. If chosen, it will not only create
the `styles.scss` file, but also import it into your brand new component :tada:

```
? Which template would you like to use? component.js
? Name ❯ MovieRow
? Describe your component ❯ Renders a single formatted movie search result
? Create a styles.scss file? Yes
💪 Created `src/components/MovieRow`
🔨 Created index.js from component template
🔮 Converting template into real component
👠 Created styles.scss
✨  Done in 21.19s.
```


Here's the resulting project structure:

```
+---src/
|   +---components
|       +---MovieRow
|           +---index.js
|           +---styles.scss
```

Similarly, had we created a container:

```
+---src/
|   +---containers
|       +---MovieList
|           +---index.js
|           +---styles.scss
```

## Notes

- If any necessary directories do not exist (`components`, `containers`, ...), they will be created.
- If a component name is given that is already in use, it will override it's `index.js` and `styles.scss` (needs-fix)
