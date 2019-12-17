class BinarySearchTree {

    constructor( key=null, value=null, parent=null) {
        // this constructor allows object as your insert 
        this.key = key;
        this.value = value; 
        this.parent = parent;
        this.left=null;
        this.right=null;
    }

    insert(key, value){
        // #1 if tree= empty = insert a root 
        if(this.key == null){

            this.key = key;
            this.value = value; 
        }
        //#2. if tree is there : compare to value you want to add
        else if( key < this.key) {
            //a. if no left child= insert new node
            if(this.left == null) {
                this.left = new BinarySearchTree(key, value, this)
            }
            // b. if left child exists , recurse and send child furhter dowm
            else {  this.left.insert(key, value)}

        }
        //#3. Do same thing on the Right side
        else {
            // a. if no right node, insert a new Node 
            if(this.right == null){
                this.right = new BinarySearchTree(key, value, this)
            }
            // b. send it further down the tree 
            else{ this.right.insert(key, value)}
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

    _findMin() {
        if (!this.left) {
            return this;
        }
        return this.left._findMin();
    }
}


// create instance of binary tree

// let BST = new BinarySearchTree();
// BST.insert(89); 
// BST.insert(76); 
// BST.insert(112);
// BST.insert(39);


// console.log(BST)