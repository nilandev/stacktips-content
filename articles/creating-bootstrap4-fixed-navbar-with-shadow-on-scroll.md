---
id: 12
title: Creating Bootstrap4 Fixed NavBar with Shadow on Scroll
slug: creating-bootstrap4-fixed-navbar-with-shadow-on-scroll
excerpt: In this example, let us create Bootstrap 4 sticky top navigation bar that shows shadow effect when page…
difficulty: beginners
publishedDate: "2017-06-01T05:49:31.000Z"
updatedDate: "2025-09-16T23:05:21.344Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - spring-boot
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

In this example, let us create Bootstrap 4 sticky top navigation bar that shows shadow effect when page is scrolled. For this, we will be use Bootstrap4 framework CSS and jQuery.

### Load Bootstrap CSS

```html
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
```

### Include Java Scripts

```html
<script
    src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js"
        integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn"
    crossorigin="anonymous"></script>
<script
  src="https://code.jquery.com/jquery-3.2.1.js"
  integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
  crossorigin="anonymous"></script>
```

### Fixed NabBar in Bootstrap4

```html
<header id="header" class="fixed-top">
  <div class="container">
    <nav class="navbar navbar-toggleable-md navbar-light" role="navigation">
      <button class="navbar-toggler navbar-toggler-right hidden-lg-up" type="button" data-toggle="collapse" data-target="#mainNavbarCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>

      <a class="navbar-brand" href="/" title="Hubble" rel="home">
        <img src="https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-solid.svg" height="35" alt="Hubble" class="d-inline-block align-top">
      </a>

      <div class="collapse navbar-collapse justify-content-end" id="mainNavbarCollapse">
        <ul class="navbar-nav my-2 my-lg-0">
          <li class="nav-item"><a class="nav-link" href="/about">About</a></li>
          <li class="nav-item"><a class="nav-link" href="/news">News</a></li>
          <li class="nav-item"><a class="nav-link" href="/jobs">Jobs</a></li>
          <li class="nav-item"><a class="nav-link" href="/news">Blog</a></li>
        </ul>
      </div>
    </nav>
  </div>
</header>

<div class="content bg-white">
  <div class="container">

    <h3>Hello, Bootstrap</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis venenatis felis in magna lacinia bibendum. Vivamus elit mauris, tristique at hendrerit viverra, rhoncus eleifend justo. Duis ultrices aliquet magna adipiscing consequat. Phasellus ac tellus
      quis nulla sollicitudin rhoncus. In pretium scelerisque mauris et molestie. Nullam in ligula nulla. Etiam convallis orci ac sapien scelerisque id vulputate lorem consectetur.</p>

    <p>Maecenas quam mi, viverra placerat iaculis viverra, accumsan in turpis. Vivamus feugiat, dolor quis accumsan lacinia, nibh velit pulvinar dolor, eget semper urna leo eget tellus. Sed at nulla erat, eget convallis nisl. Maecenas eget orci a lacus auctor
      aliquet in sit amet magna. Aliquam erat volutpat. Donec erat massa, sollicitudin sed pharetra nec, malesuada quis risus.</p>

    <p>Duis ut libero orci. Nulla ultricies ultrices velit a suscipit. Morbi ac ipsum nunc, quis feugiat enim. Nullam pharetra magna elementum orci hendrerit interdum. Sed dignissim mattis tincidunt. Nullam rhoncus sagittis leo, sit amet viverra metus cursus
      at. Fusce viverra nisi eget nunc semper tempus. Phasellus nisi sapien, vulputate et bibendum vel, eleifend nec nunc. Donec laoreet ante mollis dolor posuere ullamcorper ut id sapien. In sapien eros, sodales eget venenatis pellentesque, volutpat
      id arcu. Proin laoreet ornare tincidunt. Morbi quis rutrum odio. Pellentesque non leo ut orci mollis posuere tristique sit amet turpis. Vestibulum vestibulum dui vel nisl imperdiet eu pretium nulla fermentum. Nunc tortor tortor, malesuada et tempus
      ac, rhoncus eu lacus. Quisque et ullamcorper odio.</p>

    <p>Vestibulum a lorem in libero sagittis auctor non nec felis. Phasellus purus ligula, ultrices nec tincidunt at, eleifend at metus. Curabitur aliquam, leo quis eleifend dignissim, eros nisl vulputate tortor, id dictum libero enim dapibus magna.</p>

    <p>Ut ut risus eu augue volutpat ultricies quis at nibh. Donec posuere venenatis lacus, ac consequat est malesuada in. Praesent mattis, orci sed tincidunt semper, est metus suscipit risus, a faucibus sem purus non urna. Donec tincidunt magna vel nulla
      posuere eget accumsan arcu blandit. Suspendisse vestibulum augue sed nisi fermentum nec hendrerit nunc mollis. Nullam sed elit est.</p>
  </div>
</div>
```

### Custom SCSS

```css
body {
  padding-top: 70px;
  background: #fff;
}

.content {
  padding: 20px;
}

#header {
  background: #fff;
  border-bottom: 1px rgba(0, 0, 0, 0.07) solid;
  z-index: 99;
  &.--not-top {
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  }
}
```

### From JavaScript

```js
//Main navigation scroll spy for shadow
$(window).scroll(function() {
  var y = $(window).scrollTop();
  if (y > 0) {
    $("#header").addClass('--not-top');
  } else {
    $("#header").removeClass('--not-top');
  }
});
```
