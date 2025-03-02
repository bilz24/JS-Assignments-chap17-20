let my_list = [[],[],[]];
let my_list2 = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
for (let i = 1; i <=10 ; i++) {
    document.write(i+"<br>");
}
// let table = +prompt("Enter a number to show its multiplication table");
// let length = +prompt("Enter length of multiplication table");
for (let i=1; i<=length; i++){
    document.write(" "+table+" x "+i+" = "+table*i +"<br>");
}
fruits = ['apple', 'banana', 'mango', 'orange','strawberry'];
for (let i = 0; i < fruits.length; i++){
    document.write(fruits[i]+"<br>");
}
for(let i=0; i<fruits.length; i++){
    document.write("Element at index " + i + " is " + fruits[i]+"<br>");
}


document.write("Counting: "+"<br>");
for (let i = 1; i <= 15; i++){
    document.write(i+", ");
}
document.write("<br>");


document.write("Reverse: "+"<br>");
for(let i=10; i>=1; i--){
    document.write(i+", ");
}
document.write("<br>")


document.write("Even: "+"<br>");
for (let i = 0; i <= 20; i++){
    if(i%2==0){
        document.write(i+", ");
    }
}
document.write("<br>")



document.write("Odd: "+"<br>");
for (let i = 0; i <= 20; i++){
    if(i%2==1){
        document.write(i+", ");
    }
}
document.write("<br>")


document.write("Series: "+"<br>");
for (let i = 2; i <= 20; i++){
    if(i%2==0){
        document.write(i+"k, ");
    }
}
document.write("<br>")



A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
let search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
let flag = false;
for(let i=0; i<A.length; i++){
    if(search.toLowerCase()===A[i]){
        flag = true;
        document.write(search+" is available at index "+i+" in our bakery");
        break;
    }
    else{
        flag = false;
        document.write("We are sorry. "+search+" is not available in our bakery");
        break;
    }
}
document.write("<br>")

// Write a program to identify the largest number in the
// given array.
let arr = [24, 53, 78, 91, 12];
let largest = arr[0];
for(let i = 0; i<arr.length; i++){
    if(arr[i]>largest){
        largest = arr[i];
    }
}
document.write("Array items: "+arr+"<br>");
document.write("The largest number is "+largest+"<br>");


let arr2 = [24, 53, 78, 91, 12];
let smallest = arr2[0];

for(let i = 0; i<arr2.length; i++){
    if (arr2[i]<smallest) {
        smallest = arr2[i];
    }
}

document.write("Array items: "+arr2+"<br>");    
document.write("The smallest number is "+smallest+"<br>");