export interface ExpenseData{
    id:number;
    title:string;
    amount:number;
    date: Date;
}

export const dummyData: ExpenseData[] = [
    {
        id: 0,
        title: "buy goods",
        amount: 500,
        date: new Date("2025-04-30")
    },
    {
        id: 1,
        title: "buy goods",
        amount: 501,
        date: new Date("2025-05-01")
    },
    {
        id: 2,
        title: "buy goods2",
        amount: 502,
        date: new Date("2025-05-02")
    },
    {
        id: 3,
        title: "buy goods3",
        amount: 503,
        date: new Date("2025-05-03")
    },
    {
        id: 4,
        title: "buy goods4",
        amount: 504,
        date: new Date("2025-05-04")
    },
]