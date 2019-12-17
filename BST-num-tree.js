class BinarySearchTree {

    constructor( key=null, value=null, parent=null) {
        // this constructor allows object as your insert 
        this.key = key;
        this.value = value; 
        this.parent = parent;
        this.left=null;
        this.right=null;
        this.count= 0;
    }

    insert(value){
        // this will log out the number of nodes inserted 
        this.count++
        // #1 if tree= empty = insert a root 
        if(this.key == null){

            this.key = value; 
       
        }
        //#2. if tree is there : compare to value you want to add
        else if( value < this.key) {
            //a. if no left child= insert new node
            if(this.left == null) {
                this.left = new BinarySearchTree(value, null,  this)
            }
            // b. if left child exists , call insert again and look again
            else {  this.left.insert(value)} // this === 76 

        }
        //#3. Do same thing on the Right side
        else {
            // a. if no right node, insert a new Node 
            if(this.right == null){
                this.right = new BinarySearchTree(value, null,  this)
            }
            // b. send it further down the tree 
            else{ this.right.insert(value)}  //112
        }
    }

    find(key) {

        //#1. if item in Root, return the value
        if( this.key == key){
            return this.value 
        }
        //#2. if your key < root = proceed to left
             // and if there is a left child, keep moving
        else if( key < this.key && this.left ) {
            return this.left.find(key) 

        }
        //#3. if your key > root = proceed to right
         // and if there is a right child, keep moving
        else  if( key > this.key && this.right){
            return this.right.find(key)
        } 
        // #4. if key doesnt exist, return error
        else{ 
            throw new Error('Key not found in tree')

        }
    }

    remove(key) {
        //#1. 
        if( this.key == key){
            if(this.left && this.right){
                const successor = this.right._findMin();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key);
            }

            else if(this.left){
                this._replaceWith(this.left)
            }
            else if(this.right){
                this._replaceWith(this.right)
            }
            //c. if node has no children, just remove it ! 
            else{ this._replaceWith(null)}
        }
        else if( key < this.key && this.left) {
            this.left.remove(key);
        }
        else if( key > this.key && this.right) {
            this.right.remove(key);
        }
        else{ 
            throw new Error('Cant find value to remove!')
        }

    }
     
    // Helper Functions for Remove
    _replaceWith(node) {
        if (this.parent) {
            if (this == this.parent.left) {
                this.parent.left = node;
            }
            else if (this == this.parent.right) {
                this.parent.right = node;
            }

            if (node) {
                node.parent = this.parent;
            }
        }
        else {
            if (node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            }
            else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }

        size(){
            return this.count
        } 
        // Keep going left 
        _findMin() {
            if (!this.left) {
                return this;
            }
            // recirsve through tree intil you break out of loop 
            return this.left._findMin();
        }
    
    _findMax() {
        if(!this.right) {
            return this.right._findMax(); 
        }
    }

    // take value and check to see if exist in tree
    contains(value){
        let currentNode = this.key
        
        // traverse through tree
        while(currentNode) {
            //if value passed in === current node value 
            if(value === currentNode.value) {
                // we have found vlaue 
                return true 
            }
            //if value is less than currentnode value, look left 
            if(value < currentNode.value){
                currentNode = currentNode.left
            }
             // if the value is greeater to current node value, go right 
             else {
                 currentNode = currentNode.right 
             }
        }
        // if you can find value after breaking out of node, return false 
        return false

    }

    MaxHeightBst(node){
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
        }


}

module.exports = BinarySearchTree;


// create instance of binary tree

const BST = new BinarySearchTree();
BST.insert(89); 
BST.insert(76); 
BST.insert(112);
BST.insert(39);
BST.insert(99); 
BST.size()
BST._findMin();

BST.MaxHeightBst(); 


// console.log(contains(BST)) 


