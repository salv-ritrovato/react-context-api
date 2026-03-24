/* Importing createContext in order to create a global "container" of data */
import { createContext, useState } from "react"

/* Creating the container */
const BudgetContext = createContext();

export default function BudgetContext() {
    const [budgetMode, setBudgetMode] = useState(false);
}