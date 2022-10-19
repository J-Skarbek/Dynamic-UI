function createDropDown() {
  const getDropDownContainer = document.querySelector('.dropdown')
  const createBtn = document.createElement('button')
  createBtn.classList.add('dropBtn')
  createBtn.innerText = 'Dropdown'

  const dropDownContent = document.createElement('div')
  dropDownContent.classList.add('dropdown-content')

  const linkItem = document.createElement('a')
  linkItem.innerText = 'Link 1'
  const linkItem2 = document.createElement('a')
  linkItem2.innerText = 'Link 2'
  const linkItem3 = document.createElement('a')
  linkItem3.innerText = 'Link 3'

  getDropDownContainer.appendChild(createBtn)
  getDropDownContainer.appendChild(dropDownContent)
  dropDownContent.appendChild(linkItem)
  dropDownContent.appendChild(linkItem2)
  dropDownContent.appendChild(linkItem3)
  return getDropDownContainer
}

const appendDropDown = () => {
  const dropDownButton = Array.from(document.getElementsByClassName('dropBtn'));
  dropDownButton.forEach(button => {
    button.addEventListener('click', activateDropDown)
  });
}

function activateDropDown(e) {
  const dropDownList = document.querySelector('.dropdown-content')
  dropDownList.classList.toggle('visable')
  console.log(e)
}

export { createDropDown, appendDropDown, activateDropDown }
