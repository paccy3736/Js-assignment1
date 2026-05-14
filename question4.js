let branchA = ["Alice", "Bob"];
let branchB = ["Charlie", "Diana"];

let allCustomers = branchA.concat(branchB);
console.log("All Customers:", allCustomers);

let messyData = [["Eve", "Frank"], ["Grace"], ["Hank", "Ivy"]];
let flatData = messyData.flat();
console.log("Flattened Data:", flatData);

flatData.sort();
flatData.reverse();
console.log("Z to A:", flatData);

let banner = allCustomers.join(" - ");
console.log("Banner:", banner);

let tellerWindows = new Array(5).fill("Closed");
console.log("Teller Windows:", tellerWindows);
