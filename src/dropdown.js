function createDropDown() {
  getDropDownContainer = document.querySelector('.dropdown')
  const createBtn = document.createElement('button')
  createBtn.classList.add('dropBtn')
  createBtn.innerText = 'Dropdown'

  const dropDownContent = document.createElement('div').classList.add('dropdown-content')

  const linkItem = document.createElement('a')

  
}

const appendDropDown = () => {
  const dropDownButton = document.querySelector('.dropbtn');
  dropDownButton.addEventListener('click', activateDropDown)
}

function activateDropDown() {
  console.log('testing dd button')
}

export { appendDropDown, activateDropDown }
