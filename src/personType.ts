export type Person = {
    name: string,
    spouse: string,
    gender: string,
    coupleId: number,
    parentId: number,
    id: number,
    children: string[],
}

export type FamilyTree = {
    [key: string]: Person
}

export type Children = {
    [key: number]: string[]
}