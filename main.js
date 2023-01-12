// get all elements with class "myClass"
var myClassElements = document.getElementsByClassName("myClass");
// loop through all elements
for (var i = 0; i < myClassElements.length; i++) {
    // do something to each element
    myClassElements[i].style.backgroundColor = "red";
}