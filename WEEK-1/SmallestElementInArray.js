//4.find the smallest element in marks array

let marks=[90,78,65,98]

for(let i=0;i<marks.length;i++){
    for(let j=0;j<marks.length-1;j++){
        if(marks[i]<marks[j]){
           let temp=marks[i];
            marks[i]=marks[j];
            marks[j]=temp;
        }
    }
}
let smallest=marks[0];
 console.log("smallest element in marks array is ",smallest)