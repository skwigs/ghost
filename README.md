# Ghost - Responsive Display Helper
Manage the display of elements across multiple screens easily with this drop-in css solution.


## Demo
View the [Ghost demo](https://codepen.io/skwigs/project/full/DvBqYk/) on codepen.


## Description
Ghost helps you hide elements responsively across multiple screen sizes by adding a single class to an element. This helps speed development time and reduce errors when working with responsive design.

Ghost also allows you to think about hiding and showing elements from whatever point of view is best for the task at hand. For example...


## Example
Suppose you're working on a div with a background image that looks fine on desktop but poor on mobile devices. You want to HIDE the element on small and extra small screens so you can insert a different image custom made for the smaller size.

To hide the first image's section on small and extra small screens (but still SHOW it on medium and larger screens) simply add the class:

`ghost_hide-sm-and-down`

Then, you can add the second image to a div that SHOWS on small and extra small screens (but also automatically HIDES it on medium, large, extra large screens) with the class:

`ghost_show-sm-and-down`

This can be a huge time saver as other frameworks often require you to hide the element on each screen size individually... not to mention the clutter that is created by adding too many classes to an element.


## Installation
Simply copy and paste the code into your stylesheet. Or, link to it in the head tag of the webpage:

`<link rel="stylesheet" type="text/css" href="ghost.css">`


## Screens & breakpoints
The default screensizes and conceptual device usage in `ghost.css` are:

* `xs` - Smartphones (Portrait)     Up to 599px
* `sm` - Smartphones (Landscape)    600px to 959px
* `md` - Laptops                    960px to 1263px
* `lg` - Desktops                   1264px to 1903px
* `xl` - 4k and Ultra-wides         1904px and Up

For projects using bootstrap (or with similar narrower screen sizes) I have also included `ghost-bootstrap.css` with media breakpoints at:

* `xs` - Xtra small devices (portrait phones)     Up to 575.98px
* `sm` - Small devices (landscape phones)         576px to 767.98px
* `md` - Medium devices (tablets)                 768px to 991.98px
* `lg` - Large devices (desktops)                 992px to 1199.98px
* `xl` - Extra large devices (large desktops)     1200px and Up

Reference [Bootstrap 4](https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints) Media Query Docs


## Usage
Ghost uses a semantic class naming system. Simply add the appropriate class to 

The following will HIDE the element on the given screen size (as well as any others designated):

* `ghost_hide-xs-only`
* `ghost_hide-sm-only`
* `ghost_hide-sm-and-down`
* `ghost_hide-sm-and-up`
* `ghost_hide-md-only`
* `ghost_hide-md-and-up`
* `ghost_hide-md-and-down`
* `ghost_hide-lg-only`
* `ghost_hide-lg-and-up`
* `ghost_hide-lg-and-down`
* `ghost_hide-xl-only`

The following will SHOW the element on the given screen size (and others designated) and HIDE the element on any unreferenced sizes:

* `ghost_show-xs-only`
* `ghost_show-sm-only`
* `ghost_show-sm-and-down`
* `ghost_show-sm-and-up`
* `ghost_show-md-only`
* `ghost_show-md-and-down`
* `ghost_show-md-and-up`
* `ghost_show-lg-only`
* `ghost_show-lg-and-down`
* `ghost_show-lg-and-up`
* `ghost_show-xl-only`

Two additional untility classes are provided that are particularly useful during development:

* `ghost_hide-all`
* `ghost_show-all`


## Notes
Hiding elements is achieved by applying the css property `display:none !important;` via the respective classes. If for some reason you need to override this property, such as toggling visibility as the radio button behavior illustrated in the included demo, you have several options and may want to start with this [Stack Overflow](https://stackoverflow.com/questions/11178673/how-to-override-important) article.

Showing elements does not specify or apply a display type. Instead it simply assumes the elements are already visible via other style rules. The only exeption is `ghost_show-all` which explicitly applies the css style `display:inherit !important;` directly to the element.


## Roadmap
The following are areas of potential improvement:
* Create LESS/SCSS Versions with easily adjustable breakpoints.
* Refactor media queries to include more than one class.


## Open Source
This project is open source under the [MIT License](https://github.com/skwigs/ghost/blob/master/LICENSE). Feedback and pull requests welcome.


## Have Fun!
