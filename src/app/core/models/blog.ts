export interface IBlog {
        id: number;
        header: string;
        body: string;
        picturePath:string;
        createdDate: string;
    }

    export class Blog{
        data: IBlog[];
    }

    export class BlogDto{
        header: string;
        body: string;
        picturePath:string;
    }

