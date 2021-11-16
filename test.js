let cell1 = {
alive : true,
neighbor : 3}
let cell2 = {
alive : true,
neighbor : 1}
let cell3 = {
alive : true,
neighbor : 4}
let cell4 = {
alive : true,
neighbor : 2}
let cell5 = {
alive : false,
neighbor : 3}
let cell6 = {
    alive : false,
    neighbor : 2
}

function simulateLife(cell){
    if (cell.alive == false){
        if (cell.neighbor != 3){
            return false
        }
        return true
    }
    if (cell.neighbor < 2 || cell.neighbor > 3){
        return false
    } else {
        return true 
    }
}
describe("simulateLife" , () => {
    it("Cell should be alive because 3 neighbors", () => {
const result = simulateLife(cell1);
expect (result).toBe(true);})

it("Cell should be dead because 1 neighbor", () => {
    const result = simulateLife(cell2);
    expect (result).toBe(false)
})
it("Cell should be dead as it had 4 neighbors", () => {
    const result = simulateLife(cell3);
    expect (result).toBe(false)
})
it("Cell should be alive as it had 2 neighbors", () => {
    const result = simulateLife(cell4);
    expect (result).toBe(true)
})
it("Cell should be dead but come back to life as it had 3 neighbors", () => {
    const result = simulateLife(cell5);
    expect (result).toBe(true)
})
it("Cell should be dead and stay dead as it has 2 neighbors", () => {
    const result = simulateLife(cell6);
    expect (result).toBe(false)
})
})
    