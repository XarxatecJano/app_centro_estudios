export interface School{
    id:number,
    name: string,
    createdAt: Date,
    updatedAts: Date
};

export type SchoolName = Pick<School, 'name'>;

export type SchoolPartial = Pick<School, 'id', 'name'>