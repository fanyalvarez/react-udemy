 const heroes = [
//forma 1       export const heroes = [
//forma 2       export default = [
//forma 3       const heroes  = [   //al final
   
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];
// export default heroes

//cuando se usan mas de dos arrays
const owners = ['DC','MARVEL']

//forma4
export{ heroes, owners}