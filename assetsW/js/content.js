Vue.component('blog-post', {
    props: ['post'],
    template: `
    <div class="row mt-4 justify-content-center">
        <div class="col col-xl-12 col-lg-12">
            {{ post.text }}
        </div>
    </div>
  `
})

myData.posts.forEach((item, i)=> {
    app.posts.push({
        id: ++i,
        text: item
    })
})
