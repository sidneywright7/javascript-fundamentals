// ask user to enter name
// is the name is empty, print: empty
// if the name is 1-8 characters long, print "short name"
// otherwise, print "long name"

let name = prompt("Please enter your name:");
if (name.length === 0 && name.length === null) {
    console.log("empty");
} else if (name.length <= 8) {
    console.log("short name");
} else {
    console.log("long name");
}
