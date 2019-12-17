const bstTree = require('./BST-num-tree')

//#1. 
//               3
//             /   \ 
//            1    4 
//           /      \
//          2        6
//                   / \  
//                 5    9
//                       \         
//                        7
// This tree is skewed to the right, and is an O(n)

//===============================================================================

//#2
//                4
//               / \
//              1   6 
//             /   / \ 
//           2    5  9
//                    \    
//                    7
//                           
//===============================================================================

//#3 
// at the end 

//===============================================================================

//#4.  

// const total = main(); // should be 37 

function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)

}
//==============================================================================

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
    }
         // get max depth of left side and set to height 
    if(node.left){
        let leftHeight = 1 + MaxHeightBst(node.left);
        if(leftHeight > height){
                 height = leftHeight;
        }
             // return height with the max depth either left or right 
        
    }
    return height 
    
} 

//===============================================================================

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

//===============================================================================

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

//===============================================================================

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

//===============================================================================

//#9 

const arr1 = [3, 5, 4, 6, 1, 0, 2]
const arr2 = [3, 1, 5, 2, 4, 6, 0]

function sameBst(arr1, arr2){

    // create two empty arrays that represent the BST
    const rightArr = [];
    const leftArr = [];

    const rightArrTwo  = [];
    const leftArrTwo = []

     // if arr 1 length = arr2 length or arr 1 at index 0 doesnt equal arr 2 at index 0 
    if (arr1.length !== arr2.length || arr1[0] !== arr2[0]) return false;
    // if there is nothign in the arrays
    if (arr1.length === 0 || arr2.length === 0) return true;

 // loop over array1 
    for(let i = 0; i< arr1.length; i++) {
        // if the arr at that index is higher than at index 0 ...
        if( arr1[i] > arr1[0]){
        // then push that index into the righ array (higher)
            rightArr.push(arr1[i])
        } 
        // if arr at that index is lower than array at 0
        // push it into the left arrray. 
        else {
            leftArr.push(arr1[i])
        }
    }

    // REPEAT for ARRAY #2 
    for(let i = 0; i< arr2.length; i++) {
        // if the arr at that index is higher than at index 0 ...
        if( arr2[i] > arr2[0]){
        // then push that index into the righ array (higher)
            rightArr.push(arr2[i])
        } 
        // if arr at that index is lower than array at 0
        // push it into the left arrray. 
        else {
            leftArr.push(arr2[i])
        }
    }

return (sameBst(rightArr, rightArrTwo) && sameBst(leftArr, leftArrTwo) )

}
console.log(sameBst(arr1, arr2))

// Example from afternoon session : 

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
    
        // count = 8 
    let numBST = new bstTree();
    numBST.insert('E');
    numBST.insert('A');
    numBST.insert('S');
    numBST.insert('Y');
    numBST.insert('Q');
    numBST.insert('U');
    numBST.insert('E');
    numBST.insert('S');
    numBST.insert('T');
    numBST.insert('I');
    numBST.insert('O');
    numBST.insert('N');
    
    console.log('max height',  MaxHeightBst(BST)); 
    console.log('')
    // console.log(BST)  
    // console.log(numBST) 
    }
    
    main(); 