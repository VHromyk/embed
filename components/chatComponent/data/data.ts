export interface IPerson {
    id: string,
    name: string,
    age: number,
    isOnline: boolean,
    city: string,
    avatar: string,
}

export const personsList: IPerson[] = [
    {
        id: '1',
        name: 'Mr.Smith',
        age: 35,
        isOnline: true,
        city: 'Toronto',
        avatar: '../img/person.jpg'
    },
    {
        id: '2',
        name: 'Mr.Smith',
        age: 24,
        isOnline: false,
        city: 'Toronto',
        avatar: '../img/person.jpg'
    },
    {
        id: '3',
        name: 'Mr.Smith',
        age: 35,
        isOnline: true,
        city: 'Toronto',
        avatar: '../img/person.jpg'
    },
    {
        id: '4',
        name: 'Mr.Smith',
        age: 35,
        isOnline: false,
        city: 'Toronto',
        avatar: '../img/person.jpg'
    },
]