# Odan-Urr | The App-Quality CSS library

Welcome to the official App-Quality CSS library.

Odan-Urr is an ancient sass library, erected and developed by old Master Jedi and based on The Force (of [atomic design](http://bradfrost.com/blog/post/atomic-web-design/)).

Visual reference [here](https://drive.google.com/open?id=1xDZlRL0IJAYpOS6oKvfoDN36HlDVRXgF).

## Getting started

If you are a developer and you need to build complex pages with App Quality components, this is the right place for you.

#### **First step**
Import the library in your project with your preferred method (e.g. `<link>`), find the css master file in the **[/dist](https://github.com/raziel8/odan-urr/tree/master/dist/css)** folder.

#### **Second step**
That's it! You're ready to use the library and made your design consistent through different devices and tools.

## Components

> This library is javascript-agnostic. Use your fantasy/belief (aka. vanilla js, jquery, any javascript framework) to *animate* them.

#### Colors

Find all the color references in `_colors.scss`.
Background and contrast color guidelines are coming soon.

#### Buttons

Buttons are divided in:

- **default buttons:** use `aq-btn` class
- **small buttons:** add `aq-btn--small` class modifier to the default one
- **large buttons:** add `aq-btn--large` class modifier to the default one
- **hollow buttons:** add `aq-btn--hollow` class modifier to the default one
- **ghost buttons:** add `aq-btn--ghost` class modifier to the default one

Check the code reference below:

[AQ-Buttons - Codepen](https://codepen.io/seraf8/pen/byWyNo)

#### Cards

There are two different card styles. The basic:

[AQ-Cards basic - Codepen](https://codepen.io/seraf8/pen/vwWJMV)

and the complex:

[AQ-Cards complex-1 - Codepen](https://codepen.io/seraf8/pen/YbYZbL)

The default card HTML structure is

```html
<div class="aq-card">
    <header class="aq-card__header">
        -- HEADER CONTENT --
    </header>

    <div class="aq-card__body">
        <div class="aq-card__title">Title</div>
        <p class="aq-card__text">
        -- BODY CONTENT (like title, body text, charts, imgs) --
        </p>
    </div>

    <footer class="aq-card__footer">
        -- FOOTER CONTENT --
    </footer>

</div>
```

There are some pre-made elements like
- `aq-card__label`
- `aq-card__value`
- `aq-card__img`
- `aq-card__title`
- `aq-card__text`

that you can use to style internal element of a card.

#### Accordions

[AQ-Accordions - Codepen](https://codepen.io/seraf8/pen/GayqYW)

#### Forms

[AQ-Forms - Codepen](https://codepen.io/seraf8/pen/wbYEyL)

The structure for custom input fields, radio, and checkbox buttons is a substitution of default's one only if the enabler class `aq-checkbox-toggle` is present. Otherwise, the default one has normally show.

Be sure to enclose the custom input element into a `<label></label>` html tag.

```html
<h3>Input - basic</h3>
<div>
  <input class="aq-input">
</div>

<h3>Radio button</h3>
<div>
  <label>
    <input type="radio" class="aq-checkbox" name="like" id="yes" value="yes" checked>
    <span class="aq-checkbox-toggle"></span>
    <label for="yes">Yes</label>
  </label>
  <label>
    <input type="radio" class="aq-checkbox" name="like" id="no" value="no">
    <span class="aq-checkbox-toggle"></span>
    <label for="no">No</label>
  </label>
</div>

<h3>Checkbox</h3>
<div>
  <label>
    <input type="checkbox" class="aq-checkbox">
    <span class="aq-checkbox-toggle"></span>
    <label>Checkbox</label>
  </label>
</div>

<h3>Input - Submit</h3>
<div>
  <input type="submit" class="aq-btn">
</div>
```