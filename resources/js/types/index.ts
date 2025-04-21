export interface Tool {
    id: number;
    name: string;
    description: string;
    url?: string;
    isDevTool: boolean;
    isFavorite: boolean;
}

export interface Note {
    id: number;
    title: string;
    content: string;
    created_at: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
}
