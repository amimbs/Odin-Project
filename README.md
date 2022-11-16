# Odin-Project Notes
<hr/>
<hr/>

## Asking for Help
- A lot of learns ask exactly how to approach a given task or assignment. However figuring out an approach is actually the critical part of any learning journey.
    - "Hey, Im trying to return a string that displays the winner in Rock Paper Scissors, but I'm gettng a syntax error on Line 12. How can I fix this? Here's my code"
- In sharing your attempt, people know that you've tried and won't suggest things that might not work for you. It also allows them to debug you current iteration of code, rather than sending you down a path that has you start all over again when you might be very close to a solution.
- See the file for [how to be good at asking questions](./asking-for-help/How-To-Be-Good-At-Asking-Questions.md)

<hr/>

## How does the internet work

### The Internet
- The **internet** is the actually hardware that connects computers, homes, universities, data centers, cities, and nations
- The **World Wide Web** is the software that sits on top of the hardware that is the internet. 
- When a device makes a **request** via the web, that request and subsequent **response** is broken into **packets** that travel down different lanes of the internet, allowing each packet to travel using the most optimal **band width** and avoid **network traffic**.
- A **router** is a computer that signals and relays traffic to the correct destination (computer to computer).
- A **modem** turns the information from our network into information manageable by the telephone infrastructure and vice versa.
- **ISP** *Internet Service Providers* 
  - ![image](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work/internet-schema-7.png)
- **IP Address** - *Internet Protocol Address* always 4 numbers separated by dots that define the location of you computer.
  - **Domain Names** or **Domain Name Servers (DNS)** are the human readable aliases of IP Addresses. 
    - ![Image](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work/dns-ip.png)
  
  <hr/>

## Linking and Images
- Links to other pages on the internet are called absolute links.
- Links to other pages on your website are called relative links.
  - **Relative Links** do include the domain name.
  - They only include the file path of the other page, relative to the page you are creating the link on. 
  - Prepending **./** before a link your are specifying to your code that it should start looking for the file/directory relative to the **current** directory

<hr>

## Commit Messages
- Having a good commit message history will allow you (or other developers) to quickly see what changes were made and why.
- Having a good commit message history will also be helpful if you come back to a project you were working on after stepping away from it for a while. You likely won't remember your thought process and changes made when initially writing the code. 
  ### When to commit
  - It's is good practice to commit every time you have a meaningful change in the code. Creating a timeline of your progress.
  - This means, make a commit if you get a piece of code you are working on to function like you want it to, fix a typo, or fix a bug. As you gain experience, you will develop a better feel for what should be committed!
  - See the doc on [good commit messages](./commitMessages/commitMessages.md).
  
<hr>

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