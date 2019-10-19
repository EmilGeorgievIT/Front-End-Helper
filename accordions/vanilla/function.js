let accordionComponent = document.querySelectorAll('[data-component="accordion-vanilla"]');

const handleClick = (elem,idex, event) => {
  let parentNode = elem.parentNode;
  let matchingTarget = parentNode.querySelectorAll('[data-role="target"]').item(idex); 
  parentNode.querySelectorAll('.is-active').forEach((e) => e.classList.remove('is-active'));
  elem.classList.add('is-active');
  matchingTarget.classList.add('is-active');
}

accordionComponent.forEach(nodelist => {
  let triggers = nodelist.querySelectorAll('[data-role="trigger"]');
  triggers.forEach((elem,index) => elem.addEventListener('click', (event) => handleClick(elem,index, event) ));
});