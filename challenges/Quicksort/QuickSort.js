function QuickSort(arr, left, right)
   { if( left < right)
      
       { 
         
         let position= Partition(arr, left, right)
         console.log(position)
         QuickSort(arr, left, position - 1)
         QuickSort(arr, position + 1, right)


        }
        return arr;
}
function Partition(arr, left, right)
 {   // set a pivot value as a point of reference
    let pivot= arr[right]
    // create a variable to track the largest index of numbers lower than the letd pivot
    let low= left - 1
    for (let i =left ; i < right ;i ++) 
    {
         if( arr[i] <= pivot)
           { low++
            Swap(arr, i, low)
           }

    }
       

    
     Swap(arr, right, low + 1)
   
     return low + 1
}
function Swap(arr, i, low)
 {   let temp;
    temp= arr[i]
    arr[i]= arr[low]
    arr[low]= temp
 }

 module.exports = QuickSort;