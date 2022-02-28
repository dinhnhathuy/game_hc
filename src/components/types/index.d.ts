export interface navItem {
    name: string,
    to: string,
    icon: string,
    active: boolean
}

export interface navItemChild {
    name: string,
    to: string,
}

export interface post {
    id: number,
    title: string,
    realeseDate: string
}

export interface game {
    id: number,
    title: string,
    realeseDate?: string,
    platform?: string;
    score?: number | string;
}