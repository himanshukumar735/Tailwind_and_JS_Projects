const totalAmount = document.getElementById("totalAmount")
const descriptionInput = document.getElementById("descriptionInput")
const amountInput = document.getElementById("amountInput")
const dateInput = document.getElementById("dateInput")
const categoryInput = document.getElementById("categoryInput")
const addBtn = document.getElementById("addBtn")
const expenseList = document.getElementById("expenseList")

// let expenses = []
let expenses = JSON.parse(localStorage.getItem('myExpenses')) || [];

addBtn.addEventListener('click', addExpense)

function addExpense() {
    let storeDescription = descriptionInput.value
    let storeAmount = Number(amountInput.value)
    let storeDate = dateInput.value
    let storeCategory = categoryInput.value

    if (storeDescription == "" || storeAmount <= 0 || storeDate == "" || storeCategory == "") {
        alert("please enter the detail")
    } else {
        const newExpenseObject = {
            id: Date.now(),
            name: storeDescription,
            amount: storeAmount,
            date: storeDate,
            category: storeCategory
        }
        expenses.push(newExpenseObject)

        descriptionInput.value = ""
        amountInput.value = ""
        dateInput.value = ""
        categoryInput.value = ""
    }

    console.table(expenses)
    renderExpenses()
    sumExpenses()
    saveData()
}

function renderExpenses() {
    expenseList.innerHTML = ""
    expenses.forEach((item) => {
        const row = document.createElement('tr')
        row.innerHTML = `
        <td> ${item.name} </td>
        <td> ${item.category} </td>
        <td> ${item.amount} </td>
        <td> ${item.date} </td>
        <td> <button class="delete-btn" data-id="${item.id}">Delete</button> </td>
        `
        expenseList.appendChild(row)
    })
    sumExpenses();
}

function sumExpenses() {
    let total = 0;
    expenses.forEach(element => {
        total += element.amount
    });
    totalAmount.innerText = `₹${total}`;
}

expenseList.addEventListener('click', deleteExpense)

function deleteExpense(event) {
    if (event.target.classList.contains('delete-btn')) {
        const idToDelete = Number(event.target.getAttribute('data-id'))
        expenses = expenses.filter(item => item.id != idToDelete)
        renderExpenses()
        sumExpenses()
        saveData()
    }
}

function saveData() {
    localStorage.setItem('myExpenses', JSON.stringify(expenses))
    console.log("Stored String:", localStorage.getItem('myExpenses'));
    console.log("Current Array:", expenses);
}

renderExpenses();