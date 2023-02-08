let shoppingList = [];

const addItem = function() {
  const itemInput = document.getElementById("item-input");
  const itemValue = itemInput.value;
  shoppingList.push(itemValue);
  renderList();
};

const renderList = function() {
  const shoppingListElem = document.getElementById("shopping-list");
  shoppingListElem.innerHTML = "";
  for (let i = 0; i < shoppingList.length; i++) {
    const item = shoppingList[i];
    shoppingListElem.innerHTML += `<li>${item}</li>`;
  }
};

document.getElementById("add-item-btn").addEventListener("click", addItem);