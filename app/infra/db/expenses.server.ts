import type { Expense } from "~/types/expense.model";
import { prisma } from "./prismaClient.server"

export const save = async (expense: Expense): Promise<boolean> => {
    try {
        await prisma.expense.create({ data: expense });
    } catch (error) {
        console.log(error);
        throw new Error('Failed to add expense.');
    }
    
    return true;
}

export const update = async (id: string, expense: Expense) => {
    try {
        await prisma.expense.update({
            where: { id },
            data: expense
        });
    } catch (error) {
        console.error(error);
        throw new Error('Failed to update expense.');
    }
}

export const getExpenses = async (): Promise<Expense[]> => {
    try {
        return (await prisma.expense.findMany({ orderBy: { date: 'desc' } })).map(expense => {
            return { id: expense.id, title: expense.title, amount: expense.amount, date: expense.date.toISOString() }
        });
    } catch (error) {
        console.error(error);
        throw new Error('Fail to retrieve expenses.');
    }
}

export const getExpense = async (expenseId: string): Promise<Expense> => {
    try {
        const expense = await prisma.expense.findFirst({ where: { id: expenseId } });
        return { id: expense!.id, title: expense!.title, amount: expense!.amount, date: expense!.date.toISOString().split('T')[0] };
    } catch (error) {
        console.error(error);
        throw new Error('Failed to retrieve expense.');
    }
}

export const deleteExpense = async (expenseId: string) => {
    try {
        await prisma.expense.delete({ where: { id: expenseId } });
    } catch (error) {
        console.error(error);
        throw new Error('Failed to delete expense.');
    }
}
