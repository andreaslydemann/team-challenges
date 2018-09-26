export interface TeamModel {
    id: string;
    name: string;
}

export namespace TeamModel {
    export interface TeamsTableData {
        key: string;
        name: string;
        numberOfMembers: number;
    }
}