const categories = document.getElementById('categories');
const categoriesChildrenLength = categories.children.length;
const categoriesChildrenArray = Array.from(categories.children);

console.log('Number of categories: ', categoriesChildrenLength);

categoriesChildrenArray.forEach(category => {
  const categoryName = category.children[0].textContent;
  const elementsCount = category.children[1].children.length;
  console.log('Category: ', categoryName);
  console.log('Elements: ', elementsCount);
});
