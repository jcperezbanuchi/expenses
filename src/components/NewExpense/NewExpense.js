import React, { useState }  from "react"
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"

const NewExpense = (props)=>{
    const [showExpenseForm, setShowExpenseForm] = useState(false)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setShowExpenseForm(false)
    }

    const startEditingHandler = ()=>{
        setShowExpenseForm(true)
        }
    
    const stopEditingHandler =()=>{
        setShowExpenseForm(false)
    }

    return (
        <div className="new-expense">
            {!showExpenseForm && <button onClick = {startEditingHandler}> Add New Expense </button>} 

            {showExpenseForm && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}  onCancel = {stopEditingHandler}/> }
        </div>
    )
}

export default NewExpense