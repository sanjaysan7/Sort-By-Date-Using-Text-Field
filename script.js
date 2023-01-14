const arr = []
$("p").each(function(i) {
  arr.push($(this).text())
})
function sort(a, b){
    const date1 = new Date(a);
    const date2 = new Date(b);
    return date1 - date2;
}
arr.sort(sort);
console.log(arr)
