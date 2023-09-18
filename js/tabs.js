const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');


tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('tab-active');
    })
    tabs.forEach(tab => {
      tab.classList.remove('tab-active');
    })
    tab.classList.add('tab-active'); //display the text content
    target.classList.add('tab-active'); //select the current tab

    const id = target.id;
    
    switch (id) {
      case 'moon':
        const moon = document.querySelector('.moon');
        moon.classList.add('tab-active');
        break;

      case 'mars':
        const mars = document.querySelector('.mars');
        mars.classList.add('tab-active');
        break;

      case 'europa':
        const europa = document.querySelector('.europa');
        europa.classList.add('tab-active');
        break;

      case 'titan':
        const titan = document.querySelector('.titan');
        titan.classList.add('tab-active');
        break;

      default:
        moon.classList.add('tab-active');
    }
  })
})