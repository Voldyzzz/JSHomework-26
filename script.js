addClassToLastItems();
setFirstItemClassName();

function addClassToLastItems() {
  const outerListItems = document.querySelectorAll(".root>li");

  outerListItems.forEach((item) => {
    const innerListUl = item.querySelectorAll("ul");

    innerListUl.forEach((item) => {
      const innerList = item.querySelectorAll("li");
      innerList[innerList.length - 1].classList.add("last");
    });
  });

  outerListItems[outerListItems.length - 1].classList.add("last");
}

function setFirstItemClassName(level) {
  if (level === 1) {
    const outerListItems = document.querySelectorAll(".root>li");
    outerListItems[0].classList.add("first");
  } else if (level === 2) {
    const outerListItems = document.querySelectorAll(".root>li");

    outerListItems.forEach((item) => {
      const innerListUl = item.querySelectorAll("ul");

      innerListUl.forEach((item) => {
        const innerList = item.querySelectorAll("li");
        innerList[0].classList.add("first");
      });
    });
  } else {
    console.log("Такого рівня вкладеності немає!");
  }
}
