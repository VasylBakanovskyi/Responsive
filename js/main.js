const $menuLink = document.querySelectorAll('.menu__link');
const $menu = document.querySelector('.menu');
const $menuIcon = document.querySelector('.menu-icon');
const $menuMobile = document.querySelector('.menu-mobile');

$menuLink.forEach(item => {
    item.addEventListener('click', function(e) {
        $menuLink.forEach(item => {
            item.classList.remove('menu__link--active');
            item.classList.remove('active');
        });
        item.classList.add('menu__link--active')
    })
})
$menu.addEventListener('mouseover', function() {
        $menuLink.forEach(item => {
            if (item.classList.contains('menu__link--active')) {
                item.classList.add('active');
            };
        });
    })

$menu.addEventListener('mouseout', function() {
        $menuLink.forEach(item => {
            if (item.classList.contains('active')) {
                item.classList.add('menu__link--active');
            }            
        });
    })
$menuIcon.addEventListener('click', function() {
    $menuMobile.classList.toggle('hidden');
})
