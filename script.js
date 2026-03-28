const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');

// Load existing expenses on page load
let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
renderExpenses();

// Handle form submit
expenseForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const newExpense = {
    id: Date.now(),
    date: document.getElementById('date').value,
    amount: document.getElementById('amount').value,
    category: document.getElementById('category').value,
    description: document.getElementById('description').value
  };

  expenses.push(newExpense);
  localStorage.setItem('expenses', JSON.stringify(expenses));
  renderExpenses();

  expenseForm.reset();
});

// Render expenses in table
function renderExpenses() {
  expenseList.innerHTML = '';

  expenses.forEach(exp => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${exp.date}</td>
      <td>${exp.amount}</td>
      <td>${exp.category}</td>
      <td>${exp.description}</td>
      <td>
        <button onclick="editExpense(${exp.id})">Edit</button>
        <button onclick="deleteExpense(${exp.id})">Delete</button>
      </td>
    `;

    expenseList.appendChild(row);
  });
}

// Delete expense
function deleteExpense(id) {
  expenses = expenses.filter(exp => exp.id !== id);
  localStorage.setItem('expenses', JSON.stringify(expenses));
  renderExpenses();
}

// Placeholder for edit
function editExpense(id) {
  // Your turn! Fetch the expense by id, fill the form, update it on submit
  alert('Edit feature goes here');
}