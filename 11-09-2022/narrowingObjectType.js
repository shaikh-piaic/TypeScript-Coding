var B_CDCivic = {
    model: "2022",
    make: "Civic",
    noOfDoors: 4
};
var B_CD125 = {
    model: "2022",
    make: "Civic",
    kick: true
};
function Show(vehicle) {
    if ("kick" in vehicle) {
        console.log(vehicle.model, vehicle.make, vehicle.kick);
    }
    else if ("noOfDoors" in vehicle) {
        console.log(vehicle.model, vehicle.make, vehicle.noOfDoors);
    }
}
console.log(Show(B_CD125));
console.log(Show(B_CDCivic));
