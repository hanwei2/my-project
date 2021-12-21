interface user {
    userId: number,
    userName: string,
    menu: Array<any>
    apis: Array<any>
    menuTree: Array<any>
}
interface userInfo {
    userId: number,
    userName: string
}

declare interface menuItem {
    path: string,
    id: number,
    name: string,
    parentId?: number
}