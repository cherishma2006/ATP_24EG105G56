//⁠Write a function that receives an array & search element as 
// args and returns the index of that search element in the array. 
// It should return "not found" when search element not found.
function index(arr,element){
    for (let i=0;i<arr.length;i++){
        if(arr[i]==element){
            console.log("index is:",i);
            return i;
        }
    }
    return "not found";
}
let arr=[90,78,65,78];
result=index(arr,90)