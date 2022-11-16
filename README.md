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

