# Nav JS

#### It's still under development

> A ui library to building menu that your website needs.

## Sample of usage

``` html
<head>
    <link rel="stylesheet" href="../dist/themes/default.css">
</head>

...

<nav id="main-menu">
    <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
    </ul>
</nav>

<script src="../dist/nav.js"></script>
<script>
    const mainMenu = new Navjs({
        id: 'main-menu'
    });
</script>
```
Look at 'examples' directory to see a lot of samples

## Options
```javascript
    const mainMenu = new Navjs({
       id,
       theme: 'default',
       responsive: true,
       condition: 'horizontal',
       animation: 'fade',
       dir: 'ltr',
    });
```

## Features
* Completely Responsive Menu
* Horizontal and Vertical Menu
* Support : Animations - Icons - Mega Menu - Etc
* Extensible to add Themes

##### it also support RTL languages with rtlcss lib 