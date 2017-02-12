
// Task 1
var TL = document.getElementById("tag-line");
console.log(TL);
var headings = document.querySelectorAll(".bg-main-content h2");
console.log(headings);
var collect = TL.innerHTML + "\n-----------------------------------------\n";
var i;
for (i = 0; i < headings.length; i += 1) {
    collect += headings[i].innerHTML + "\n";
}
alert(collect);

// Task 2
var when_to_launch = document.querySelectorAll(".bg-main-content .box")[12];
var divcontent = when_to_launch.children;
var collect = divcontent[0].innerHTML + "\n---------------------\n";
for (i = 1; i < divcontent.length; i += 1) {
    collect += divcontent[i].innerHTML + "\n\n";
}
alert(collect);
