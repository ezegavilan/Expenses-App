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