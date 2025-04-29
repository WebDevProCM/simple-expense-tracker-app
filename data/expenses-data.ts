export interface ExpenseData{
    id:number;
    title:string;
    amount:number;
    date: Date;
}

export const dummyData: ExpenseData[] = [
    {
        id: 1,
        title: "buy goods",
        amount: 500,
        date: new Date("2025-04-01")
    },
    {
        id: 7,
        title: "buy goods",
        amount: 507,
        date: new Date("2025-04-25")
    },
    {
        id: 2,
        title: "buy goods2",
        amount: 502,
        date: new Date("2025-04-02")
    },
    {
        id: 3,
        title: "buy goods3",
        amount: 503,
        date: new Date("2025-04-26")
    },
    {
        id: 4,
        title: "buy goods4",
        amount: 504,
        date: new Date("2025-04-04")
    },
    {
        id: 5,
        title: "buy goods5",
        amount: 505,
        date: new Date("2025-04-25")
    },
    {
        id: 6,
        title: "buy goods6",
        amount: 506,
        date: new Date("2025-04-27")
    },
]