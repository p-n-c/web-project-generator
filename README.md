# Web Project Generator

A tool for creating simple websites quickly from [People and Code](https://people-and-code.com/).

## Set up the project generator

To run the generator, clone it.

Open a terminal window in the `web-project-generator` directory and run `npm link`.

This will give you global access to the web project generator.

## Generate a new web project

Open a terminal and navigate to where you want to locate your project.

Type `create-web-project` and follow the instructions. There are 3 options:

- Web basic
  - eslint
  - prettier
  - stylelint
  - parcel
- Web article
  - as basic plus a three column page layout
- People & Code website
  - as basic plus robots.txt, a sitemap and css

You will most likely want to select "Web basic". The generator will then set up a new web site. This will take a minute or two.

```bash
Initialising git repository...
Project files have been set up successfully.
Installing dependencies..
```

Once the project has been built, you will be prompted to run commands to install dependencies and run linters.

To open your new project in VS Code type, `code .`

---

## Saving your new project in GitHub

[Adding locally hosted code to GitHub](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)

Follow the instructions (copy and paste code suggested in GitHub).
