export interface IBlog {
        id: number;
        pictureUrl: string;
        header: string;
        body: string;
        createdDate: string;
    }

    export class Blog{
        data: IBlog[];
    }

    export class BlogDto{
        pictureUrl: string;
        header: string;
        body: string;
    }

