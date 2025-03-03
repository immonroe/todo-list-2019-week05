const myForm = document.querySelector('#myForm')
const textInput = document.querySelector('#item')
const msg = document.querySelector('.msg')
const itemList = document.querySelector('#items')

myForm.addEventListener('submit', onAdd)

function onAdd(e) {
    e.preventDefault()

    if(textInput.value === '') {
        msg.classList.add('error')
        msg.innerHTML = 'Invalid input. Please try again.'

        setTimeout(() => msg.remove(), 3000)
    } else {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${textInput.value}`))
        itemList.appendChild(li)
        li.classList.add('item')

        // Clear fields
        textInput.value = ''

         // Create a delete button and configure it:
        const btnDelete = document.createElement('button');
        btnDelete.classList.add('delete');
        btnDelete.textContent = 'Delete';
        
        // Append the button to the list item
        li.appendChild(btnDelete);
        itemList.appendChild(li);
        textInput.value = "";
    }
}

function deleteAfterClick(event) {
    if(event.target.classList.contains("delete")) {
        event.target.closest("li").remove();
    }
}

items.addEventListener("click", deleteAfterClick);