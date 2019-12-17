const bstTree = require('./BST-num-tree')

//#1. 
//               3
              
//         1             4 
//     2                     6
//                        5     9
//                             7

// This tree is skewed to the right, and is an O(n)


//#2
//               4
              
//         1               6 
//     2                 5       9
//                              7

//                           


//#3 

function main(){
let BST = new bstTree();
    BST.insert(3); 
    BST.insert(1); 
    BST.insert(4);
    BST.insert(6);
    BST.insert(9); 
    BST.insert(2); 
    BST.insert(5); 
    BST.insert(7); 

    return BST 

}
// console.log(BST)
// console.log(main())

main(); 
//#4.  function passes in a t value , if there is no t value, then
// return a 0 , else return the left value and right value 


//#5. Height of BST :

function MaxHeightBst(node){
    // if tree is empty 0
    if (!node) {
        return 0
    }

//  if tree has only a root node, return a 1
    if( !node.left && !node.right){
        return 1;
     }
     // set height to 0
     let height = 0;

     // get max depth of right side and set it to height 
     if(node.right){
         let rightHeight = 1 + MaxHeightBst(node.right);
         if(rightHeight > height){
             height = rightHeight
         }
         // get max depth of left side and set to height 
         if(node.left){
             let leftHeight = 1 + MaxHeightBst(node.left);
             if(leftHeight > height){
                 height = leftHeight;
             }
             // return height with the max depth either left or right 
             return height 
         }
     }
    
} console.log(MaxHeightBst(main())); 

function main(){
    let BST = new bstTree();
        BST.insert(3); 
        BST.insert(1); 
        BST.insert(4);
        BST.insert(6);
        BST.insert(9); 
        BST.insert(2); 
        BST.insert(5); 
        BST.insert(7); 
    // console.log(MaxHeightBst(BST))
    // console.log(isItsABinary(BST))
       
    }



console.log(main()); 


//#6. 
function isItsABinary(node) {

    // if no nodes found, then its not a binary tree
    if (!node) { return false } 


    if(node.right){
        if(node.right.key > node.key){
            isItsABinary(node.right);
        }
        else { return false}
    }

    if(node.left) {
        if(node.left.key < node.key) {
            isItsABinary(node.left)
        }
        else { return false }
    }

    else { return true }
}
console.log(isItsABinary(main()))  // false 

//#7 

function thirdLargest( node ) {
    // find max height first, set to heigh 
    let height = MaxHeightBst(node)

    if( height < 2) {
        return null
    }

    else if( height < 3){

        if(node.left && node.right){
            return node.left.value 
        } 
        else return null 
    }
    else if (height > 3) {
        return thirdLargest(tree.right)
    }
    else return node.key; 
}

console.log(thirdLargest(main())); 


//#8. 
function balancesBst(node) {
    if(!node) {
        return false
    }
    else if (!node.right && !node.left) {
        return true;
    }
    else if( Math.abs(MaxHeightBst(node.right) - MaxHeightBst(node.left)) > 1) {
        return false 
    }
    else {return true}

}

console.log(balancesBst(main())) // FALSE 

//#9 


const arr1 = [3, 5, 4, 6, 1, 0, 2]
const arr2 = [3, 1, 5, 2, 4, 6, 0]

function sameBst(arr1, arr2){

}



// given sorted array, write algo to create a BST from elements in 
// array. 
// input [3,5,7,9, 11, 13, 15]



class BST {

    constructor(key) {
        this.key
        this.parent
        this.left
        this.right
    }
}
function sortedArrayToBST(arr, start=0, end= arr.length -1){
    //base case 
    if(start > end ){
    return; 
    } 

    let middle = arr[Math.floor((start + end)/2)] // 9 
    let bst =  new BST(arr[middle])

    bst.left = sortedArrayToBST(arr, start, middle -1)
    bst.right = sortedArrayToBST(arr, start, middle +1, end)

    return bst; 
 }