# Frontend Mentor - Space tourism website solution

![Design preview for the Space tourism website coding challenge](./assets/preview.jpg)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Links

- Live Site URL: [Space Travel Website](https://spacetravel-gabyplasencia.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup

- CSS:
 - Grid
 - Flexbox
 - Custom variables
 - Media Queries

- SASS:
 - Partials
 - Mixins
 - Sass variables
 - Conditionals

- Javascript:
 - No framework
 - SplideJS library

- Mobile-first workflow

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```sass
@mixin media ($width) {
    @if $width != v.$mobile {
        @media (min-width: $width) {
            @content;
        }
    } @else {
        @media (max-width: $width) {
            @content;
        }
    }
}
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

1. Learn accesibility.

### Useful resources
- [General CSS Info](https://developer.mozilla.org/en-US/) - This is one of my regular go to for CSS info. Their way for define CSS elements is simple and concise with easy to understand examples.
- [SplideJS](https://splidejs.com/) - They have an incredible detailed documentation which help me manipulate the carrousel in the crew section.
- [SASS](https://sass-lang.com/documentation/at-rules/control/if/) - I needed it to read about the conditionals on SASS and their examples help me to understand better.

## Author

- Linkedin - [Gabriela Plasencia](https://www.linkedin.com/in/gabriela-plasencia-gomez/)
- GitHub - [@gabyplasencia](https://github.com/gabyplasencia)


## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

1. Kevin Powell
2. DevWebSimplefy


