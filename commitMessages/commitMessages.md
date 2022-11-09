### 7 Rules of Great Git Commit Messages
  1. [Separate subject from body with a blank line](https://cbea.ms/git-commit/#separate)
  2. [Limit the subject line to 50 characters](https://cbea.ms/git-commit/#limit-50)
  3. [Capitalize the subject line](https://cbea.ms/git-commit/#capitalize)
  4. [Do not end the subject line with a period](https://cbea.ms/git-commit/#end)
  5. [Use the imperative mood in the subject line](https://cbea.ms/git-commit/#imperative)
  6. [Wrap the body at 72 characters](https://cbea.ms/git-commit/#wrap-72)
  7. [Use the body to explain what and why vs. how](https://cbea.ms/git-commit/#why-not-how)
  
  ### Conventional Commit
  - Conventional Commit is a great practice among engineering teams. Conventional Commit is a formatting convention that provides a set of rules to formulate a consistent commit message structure like so:
  ![Commit Formatting](/assets/commitFormat.png)
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
