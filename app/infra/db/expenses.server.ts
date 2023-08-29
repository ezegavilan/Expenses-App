import type { Expense } from "~/types/expense.model";
import { prisma } from "./prismaClient.server"

export const save = async (expense: Expense): Promise<boolean> => {
    try {
        await prisma.expense.create({ data: expense });
    } catch (error) {
        console.log(error);
        return false;
    }
    
    return true;
}

export const getExpenses = async (): Promise<Expense[]> => {
    try {
        return (await prisma.expense.findMany({ orderBy: { date: 'desc' } })).map(expense => {
            return { id: expense.id, title: expense.title, amount: expense.amount, date: expense.date.toLocaleString() }
        });
    } catch (error) {
        console.error(error);
        throw error;
    }
}
