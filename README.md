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

With the different layouts I could depeen into the use of display grid, find different solutions to each problem I encountered.

Also I started to use js libraries, in this case was splidejs, it gave me a huge range of costumization for the slides and the pagination.

And last, this project gave me the opportunity to use coditionals in SASS and improve my use of mixins for save lines of code.
```scss
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

This is what I feel I need to keep improving or learn:

1. Learn more about accessibility.
2. Improve the consistency of class naming.
3. Planning more before star the HTML structure.

### Useful resources

- [General Info](https://developer.mozilla.org/en-US/) - This is one of my regular go to for CSS info. Their way for define CSS elements is simple and concise with easy to understand examples.
- [SplideJS](https://splidejs.com/) - They have an incredible detailed documentation which help me manipulate the carrousel in the crew section.
- [SASS](https://sass-lang.com/documentation/at-rules/control/if/) - I needed it to read about the conditionals on SASS and their examples help me to understand better.
- [CSS Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/) - They have great visual examples for layout properties.
- [Kevin Powell Youtube](https://www.youtube.com/@KevinPowell) - He has an extensive variety of videos explaining or showing different CSS subjects.

## Author

- Linkedin - [Gabriela Plasencia](https://www.linkedin.com/in/gabyplasencia/)
- GitHub - [@gabyplasencia](https://github.com/gabyplasencia)



