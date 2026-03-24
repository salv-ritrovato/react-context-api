/* Importing createContext in order to create a global "container" of data */
import { createContext, useState } from "react"

/* Creating the container */
export const BudgetContext = createContext();

/* Creating component that will wrap my app   */
/* I had to look online because I was very confused about the usage of { children ]} */
export const BudgetProvider = ({ children }) => {
    /* Declaring state to track whether budget mode is on or off */
    const [budgetMode, setBudgetMode] = useState(false);

    return (
        <BudgetContext.Provider value={{ budgetMode, setBudgetMode }}>
            {/* Wrapping children with provider */}
            {children}
        </BudgetContext.Provider>
    );
};