function filterCategory(category) {
    const recipeItems = document.querySelectorAll('.recipe-item');
    
    recipeItems.forEach(item => {
      if (item.getAttribute('data-category') === category || category === 'all') {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
  