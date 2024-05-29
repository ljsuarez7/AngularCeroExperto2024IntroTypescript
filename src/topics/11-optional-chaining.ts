export interface Passenger{
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Fernando'
}

const passenger2: Passenger = {
    name: 'Melissa',
    children: ['Natalia', 'Elizabeth']
}

const returnChildrenNumber = (passenger: Passenger): number => {

    const {name, children} = passenger;

    const howManyChildren = children?.length || 0;
    // const howManyChildren = children!.length;

    console.log(`${name} tiene ${howManyChildren} hijos`);

    return howManyChildren;

}

returnChildrenNumber(passenger1);
returnChildrenNumber(passenger2);
