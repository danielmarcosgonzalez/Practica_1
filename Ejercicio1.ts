
const QuickSort = (arr:Array <number>)=>{
if (arr.length<=1){
    return arr
}
const pivot = arr[0]
const leftValue:Array<number> = []
const rightValue:Array<number> = []

for (let j = 1; j < arr.length; j++) {
    if (arr[j] < pivot) {
      leftValue.push(arr[j]);
    } else {
      rightValue.push(arr[j]);
    }
  }

  return [...QuickSort(leftValue), pivot, ...QuickSort(rightValue)];


}

export{QuickSort}

