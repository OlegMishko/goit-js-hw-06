const categoriesEl = document.querySelector('#categories').children;
console.log(`Number of categories: ${categoriesEl.length}`);


const categoryItemEl = document.querySelectorAll('.item')
    .forEach((category) => {
        console.log('Category: ',  category.querySelector('h2').textContent),
            console.log('Elements: ',  category.querySelectorAll('li').length)
    });