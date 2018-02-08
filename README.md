# ghost - a responsive display helper
Manage the display of elements across multiple screen sizes with this drop-in css solution.

# demo
View the [Ghost demo](https://codepen.io/skwigs/project/full/DvBqYk/) on codepen.

# description
Ghost helps you hide elements responsively across multiple screensizes by adding a single class to an element. This helps speed development and reduce errors when working with responsive design.

Unlike other solutions, Ghost allows you to think about displaying elements the way you do. For example, if you want to HIDE an element on medium devices and smaller, simply apply the class:

`ghost_hide-md-and-down`

This will hide the element on medium, small, and extra small screens.

However, if you're working on an element and want to SHOW it on medium screens and larger (and hide it on smaller screen sizes), simply apply the class:

`ghost_show-md-and-up`

This will hide the element on small and extra small screens.

# screens & breakpoints
The default screensizes and conceptual device usage in `ghost.css` are:

* xs - Smartphones (Portrait)     Up to 599px
* sm - Smartphones (Landscape)    600px to 959px
* md - Laptops                    960px to 1263px
* lg - Desktops                   1264px to 1903px
* xl - 4k and Ultra-wides         1904px and Up

These settings are wider than what some projects require. That is why `ghost-bootstrap.css` has been included as well with media breakpoints at:

* xs - Xtra small devices (portrait phones)     Up to 575.98px
* sm - Small devices (landscape phones)         576px to 767.98px
* md - Medium devices (tablets)                 768px to 991.98px
* lg - Large devices (desktops)                 992px to 1199.98px
* xl - Extra large devices (large desktops)     1200px and Up

Reference [Bootstrap 4](https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints) Media Query Docs

# classes
Ghost uses a semantic class naming system to make hiding elements across screen widths easy.
