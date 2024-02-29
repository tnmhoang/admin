export interface IContract {
    personA: IPerson;
    personB: IPerson;
}

interface IPerson {
    fullName?: string;
    position?: string;
    dateOfBirth?: string;
    identification?: string;
    city?: number;
    district?: number;
    ward?: number;
    address?: string;
}