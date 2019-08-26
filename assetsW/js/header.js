Vue.component('menu-items', {
    props: ['item'],
    template: `
    <li class="nav-item">
        <a class="nav-link" href="#">{{item.text}}</a>
    </li>
  `
})

myData.menuItems.forEach((item, i)=> {
    app.menuItems.push({
        id: ++i,
        text: item
    })
})
