## 7 Rules of Great Git Commit Messages
  1. [Separate subject from body with a blank line](https://cbea.ms/git-commit/#separate)
  2. [Limit the subject line to 50 characters](https://cbea.ms/git-commit/#limit-50)
  3. [Capitalize the subject line](https://cbea.ms/git-commit/#capitalize)
  4. [Do not end the subject line with a period](https://cbea.ms/git-commit/#end)
  5. [Use the imperative mood in the subject line](https://cbea.ms/git-commit/#imperative)
  6. [Wrap the body at 72 characters](https://cbea.ms/git-commit/#wrap-72)
  7. [Use the body to explain what and why vs. how](https://cbea.ms/git-commit/#why-not-how)
  
## Conventional Commit
- Conventional Commit is a great practice among engineering teams. Conventional Commit is a formatting convention that provides a set of rules to formulate a consistent commit message structure like so:
![Commit Formatting](../../assets/commitFormat.png)
- The Commit Type can include:
  - `feat` – a new feature is introduced with the changes
  - `fix` – a bug fix has occurred
  - `chore` – changes that do not relate to a fix or feature and don't modify src or test files (for example updating dependencies)
  - `refactor` – refactored code that neither fixes a bug nor adds a feature
  - `docs` – updates to documentation such as a the README or other markdown files
  - `style` – changes that do not affect the meaning of the code, likely related to code formatting such as white-space, missing semi-colons, and so on.
  - `test` – including new or correcting previous tests
  - `perf` – performance improvements
  - `ci` – continuous integration related
  - `build` – changes that affect the build system or external dependencies
  - `revert` – reverts a previous commit

## Using VSCode to write commit messages
- Most times I write my commit messages from the command line, but if I expect to write a long commit message, I'll usually do so in VSCode.
- You can set VSCode as your default git editor by first installing the VSCode command-line interface and then execute the following command in your shell:
  `git config --global core.editor "code --wait"`
- With VSCode set as your default git editor, whenever you execute git commit, VSCode will open up for you to type in your commit message. The commit message is saved once you've closed the VSCode tab. What is especially nice about this is that you can configure VSCode to set vertical rulers that can act as guides for the line length limits you wish to follow:
![Vscode Commit](../../assets/vscodeCommit.png)
- To set these rulers, just add the following to the VSCode global **settings.json** file found in *Settings > User* or by running `Preferences: Open Workspace Settings (JSON)` command in the command palette (*Ctrl + Shift + P*):
```
"[git-commit]": {
  "editor.rulers": [72, 80]
}
```
