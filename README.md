# Frontend Mentor - NFT preview card component solution

This is a solution to the [Huddle landing page with curved sections challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/huddle-landing-page-with-curved-sections-5ca5ecd01e82137ec91a50f2).

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

This as the Huddle Landing Page design challenge from [Frontend Mentor](https://www.frontendmentor.io).

### Screenshot

| ![Image 1](./screenshots/desktop.jpeg) | ![Image 2](./screenshots/mobile.jpeg) |
|:-----------------------:|:-----------------------:|
|     Desktop Design  |    Mobile Design  |


## My process

### Built with

- **Tailwind CSS** was had the major work with styling.
- **Flexbox** concepts are still leading the desing.


### What I learned

The challenging part of this one is having error text next to input when it's invalid, which was solved easily using **tailwind**:
```html
<div class="grid grid-cols-2 gap-4 md:grid-cols-3">
  <input type="email" class="peer col-span-2 py-2 rounded-md text-black invalid:border-2 border-lighRed">
  <a href="" class="col-start-2 rounded-md bg-pink py-2 text-lg text-center text-white shadow-md hover:opacity-80 md:col-start-3">Subscibe</a>
  <p class="invisible text-lighRed peer-invalid:visible md:col-span-3">Check your email please</p>
</div>
```
