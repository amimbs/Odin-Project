## CSS Foundations
- *Imagine I wrote lots of notes about basic CSS stuff here*
  ### Class Selectors
    - Note syntax for class selectors: a period immediately followed by the case-sensitive value of the class attribute. Classes aren't required to be unique, sso you can use the same class on as many elements as you want.
    - Another thing you can do with the class attibute is add multiple classes to a single element as a space-seperated list, such as `class="alert-text severe-alert"`. Since whitespace is used to seperate class names like this, you should never use spaces for milti-worded names and should use a hyphen instead.
  ### ID Selectors
    - *You already know about these, Andy*
    - The major difference between classes and IDs is that an element can only have **one** ID. An ID cannout be repeated on a single page, and the ID attribute should not contain any whitespace at all. 
  ### Group Selector
    - What if we have two groups of elements that share some of their style declarations?
      ```CSS
        .read {
          color: white;
          background-color: black;
          /* several unique declarations */
        }
        .unread {
          color: white;
          background-color: black;
          /* several unique declarations */
        }
      ```
    - Both our `.read` and `.unread` selectors share the `color: white;` and `background-color: black;` declarations, but otherwise have several of their own unique declaraions. To cut down on the repetition, we can group these two selectors together as a comma-seperated list: 
      ```CSS
        .read,
        .unread {
          color: white;
          background-color: black;
        }

        .read {
          /* several unique declarations */
        }

        .unread {
          /* several unique declarations */
        }
      ```
    - Both of the examples above (with and without grouping) will have the same result, but the second example reduces the repetition of declarations and makes it easier to edit either the `color` or `background-color` for both classes at once. 
  ### Chaining Selectors
    - Another way to use selectors is to chain them as a list without any separation. Let’s say we had the following HTML:
      ```html
        <div>
          <div class="subsection header">Latest Posts</div>
          <p class="subsection preview">This is where a preview for a post might go.</p>
        </div>
      ```
    - We have two elements with the `subsection` class that have some sort of unique styles, but what if we only want to apply a separate rule to the element that also has `header` as a second class? Well, we could chain both the class selectors together in our CSS like so:
      ```css
        .subsection.header {
          color: red;
        }
      ```
    - What `.subsection.header` does is it selects any element that has both the `subsection` *and* `header` classes. Notice how there isn’t any space between the .`subsection` and .`header` class selectors. This syntax basically works for chaining any combination of selectors, except for chaining more than one [type selector](https://www.theodinproject.com/lessons/foundations-css-foundations#type-selectors).
    - This can also be used to chain a class and an ID, as shown below:
        ```html
          <div>
            <div class="subsection header">Latest Posts</div>
            <p class="subsection" id="preview">This is where a preview for a post might go.</p>
          </div>
        ```
    - You can take the two elements above and combine them with the following:
      ```css
        .subsection.header {
          color: red;
        }

        .subsection#preview {
          color: blue;
        }
      ```
    - In general, you can’t chain more than one type selector since an element can’t be two different types at once. For example, chaining two type selectors like `div` and `p` would give us the selector `divp`, which wouldn’t work since the selector would try to find a literal `<divp>` element, which doesn’t exist.
  ### Descendant Combinator
    - Combinators allow us to combine multiple selectors differently than either grouping or chanining them, as the show a relationship between the selectors. **Descendant Combinator** is represented in CSS by a single space between selectors. A descendant combinator will only cause elements that match the last selector to be selected if they also have ancestor that matches the previous selector.
    - An examples is ` .ancestor .child` whith only select `.child` if it is nested within `.ancestor` regardless of how deep. Refer to below:
      ```html
        <!-- index.html -->
        <div class="ancestor"> <!-- A -->
          <div class="contents"> <!-- B -->
            <div class="contents"> <!-- C -->
            </div>
          </div>
        </div>

        <div class="contents"></div> <!-- D -->
      ```

      ```css
        /* styles.css */
        /*this descendant combinator will only select lines B & C*/
        .ancestor .contents {
          /* some declarations */
        }
      ```

    - There’s really no limit to how many combinators you can add to a rule, so `.one .two .three .four` would be totally valid. This would just select an element that has a class of `four` if it has an ancestor with a class of `three`, and if that ancestor has its own ancestor with a class of `two`, and so on. You generally want to avoid trying to select elements that need this level of nesting, though, as it can get pretty confusing and long, and it can cause issues when it comes to specificity.
  
  ### Typography Basics and Text-Align
    - If a browser cannot find or does not support the first font in a list, it will use the next one, then the next one and so on until it finds a supported and valid font. This is why it’s best practice to include a list of values for this property, starting with the font you want to be used most and ending with a generic font family as a fallback, e.g. `font-family: "Times New Roman", sans-serif;`
  ### Image Height and Width
    - Images aren’t the only elements that we can adjust the height and width on, but we want to focus on them specifically in this case.

    - By default, an `<img>` element’s `height` and `width` values will be the same as the actual image file’s height and width. If you wanted to adjust the size of the image without causing it to lose its proportions, you would use a value of “auto” for the `height` property and adjust the `width` value:
      ```css
        img {
          height: auto;
          width: 500px;
        }
      ```
    - It’s best to include both of these properties for `<img>` elements, even if you don’t plan on adjusting the values from the image file’s original ones. When these values aren’t included, if an image takes longer to load than the rest of the page contents, the image won’t take up any space on the page at first, but will suddenly cause a drastic shift of the other page contents once it does load in. Explicitly stating a `height` and `width` prevents this from happening, as space will be “reserved” on the page and will just appear as a blank space until the image loads.
## The Cascade of CSS
- The cascade is what determines which rules actually get applied to our HTML. There are different factors that the cascade uses to determine this, three of which we’ll go over to hopefully help you avoid (as many of) those frustrating “I hate CSS” moments.
- 
  ### Specificity
    - **Inline styles have the highest level of specificity.**
    - Other selectors contribute to specificity, but we’re focusing only on the ones mentioned in this lesson. In order, these selectors are listed by specificity :
      1. ID selectors (most specific selector)
      2. Class selectors
      3. Type selectors
    - Let's look at and example:
        ```html
          <!-- index.html -->

          <div class="main">
            <div class="list subsection"></div>
          </div>
        ```
        ```css
          /* rule 1 */
          .subsection {
            color: blue;
          }

          /* rule 2 */
          .main .list {
            color: red;
          }
        ```
    - In the example above, both rules are using only class selectors, but rule 2 is more specific because it is using more class selectors., so the `color: red;` declaration would take precedent. 
    - Let's look at another example:
      ```html
        <!-- index.html -->

        <div class="main">
          <div class="list" id="subsection"></div>
        </div>
      ```
      ```css
        /* rule 1 */
        #subsection {
          color: blue;
        }

        /* rule 2 */
        .main .list {
          color: red;
        }
      ```
    - In the example above, despite rule 2 having ore class selectors than an ID selector, rule 1 is more specific because ID beats class. In this case `color: blue;` declaration would take precedence
    - One last example:
      ```css
        /* rule 1 */
        #subsection .list {
          background-color: yellow;
          color: blue;
        }

        /* rule 2 */
        #subsection .main .list {
          color: red;
        }
      ```
    - In this final example, both rules are using ID and class selectors, so neither rule is using a more specific selector than the other. The cascade then checks the amounts of each selector type. Both rules only have one ID selector, but rule 2 has more class selectors, so rule 2 has a higher specificity!
    - While the color: red declaration would take precedence, the background-color: yellow declaration would still be applied since there’s no conflicting declaration for it.
    - Note: When comparing selectors, you may come across special symbols for the universal selector (*) as well as combinators (`+`, `~`, `>`, and an empty space). These symbols do not add any specificity in and of themselves.
      ```css
        /* rule 1 */
        .class.second-class {
          font-size: 12px;
        }

        /* rule 2 */
        .class .second-class {
          font-size: 24px;
        }
      ```
    - Here both rule 1 and rule 2 have the same specificity. Rule 1 uses a chaining selector (no space) and rule 2 uses a descendant combinator (the empty space). But both rules have two classes and the combinator symbol itself does not add to the specificity.
      ```css
        /* rule 1 */
        .class.second-class {
          font-size: 12px;
        }

        /* rule 2 */
        .class > .second-class {
          font-size: 24px;
        }
      ```
    - This example shows the same thing. Even though rule 2 is using a child combinator (`>`), this does not change the specificity value. Both rules still have two classes so they have the same specificity values.
      ```css
        /* rule 1 */
        * {
          color: black;
        }

        /* rule 2 */
        h1 {
          color: orange;
        }
      ```
    - In this example, rule 2 would have higher specificity and the `orange` value would take precedence for this element. Rule 2 uses a type selector, which has the lowest specificity value. But rule 1 uses the universal selector (`*`) which has no specificity value.

  ### Inheritance
    - Inheritance refers to certain CSS properties that, when applied to an element are inherited by that element's descendants, even if we don't explicitly write a rule for those descendants. Typography based properties (`color`, `font-size`, `font-family`, `etc`.) are usually inherited, while most other properties aren’t.
    - The exception to this s when directl targeting an element, as this always beats inheritance:
      ```html
        <!-- index.html -->

        <div id="parent">
          <div class="child"></div>
        </div>
      ```

      ```css
        /* styles.css */

        #parent {
          color: red;
        }

        .child {
          color: blue;
        }
      ```
    - Despite the `parent` element having a higher specificity with an ID, the child element would have the `color: blue` style applied since that declaration directly targets it, while `color: red` from the parent is only inherited.
  ### Rule Order
    - The final factor, the end of the line, the tie-breaker of the tie-breaker. Let’s say that after every other factor has been taken into account, there are still multiple conflicting rules targeting an element. How does the cascade determine which rule to apply?

    - Really simply, actually. Whichever rule was the last defined is the winner.
      ```css
        /* styles.css */

        .alert {
          color: red;
        }

        .warning {
          color: yellow;
        }
      ```
    - For an element that has both the `alert` and `warning` classes, the cascade would run through every other factor, including inheritance (none here) and specificity (neither rule is more specific than the other). Since the .`warning` rule was the last one defined, and no other factor was able to determine which rule to apply, it’s the one that gets applied to the element.

## Adding CSS to HTML
- prepare yourself
  ### External CSS
    - External CSS is the most common method you will come across, and it involves creating a seperate file for the CSS and linking it inside of an HTML's opening and close `<head>` tags with a self-closing `<link>` element:
      ```html
        <!-- index.html -->

        <head>
          <link rel="stylesheet" href="styles.css">
        </head>
      ```
      ```css
        /* styles.css */

        div {
          color: white;
          background-color: black;
        }

        p {
          color: red;
        }
      ```
    - A couple of the pros to this method are:

    1. It keeps our HTML and CSS separated, which results in the HTML file being smaller and making things look cleaner.
    2. We only need to edit the CSS in one place, which is especially handy for websites with many pages that all share similar styles.
    3. 
  ### Internal CSS
  - Internal CSS (or embedded CSS) involveds adding the CSS within the HTML file itself instead of creating a completely seperate file.
  ```html
  <head>
    <style>
      div {
        color: white;
        background-color: black;
      }

      p {
        color: red;
      }
    </style>
  </head>
  <body>...</body>
  ```
  - This method can be useful for adding unique styles to a single page of a website, but it doesn’t keep things separate like the external method, and depending on how many rules and declarations there are it can cause the HTML file to get pretty big.
  
  ### Inline CSS
  - Inline CSS makes it possible to add styles directly to HTML elements, though this method isn't as recommened:
  ```html
  <body>
    <div style="color: white; background-color: black;">...</div>
  </body>
  ```
  - God, Andy, please don't use this method. Exception being ONLY you need literally a single element to have a specific and unique style.
  - It can quickly become pretty messy once you start adding a lot of declarations to a single element, causing your HTML file to become unnecessarily bloated.
  - If you want many elements to have the same style, you would have to copy + paste the same style to each individual element, causing lots of unnecessary repetition and more bloat.
  - Any inline CSS will override the other two methods, which can cause unexpected results. (While we won’t dive into it here, this can actually be taken advantage of).

    