# Hashtables
### Hashtables are a data structure that utilize key value pairs. This means every Node or Bucket has both a key, and a value.

## Challenge
### Implement a Hashtable with the following methods:

- #### add: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
- #### get: takes in the key and returns the value from the table.
- #### contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
- #### Get Hash: takes in an arbitrary key and returns an index in the collection.
## Approach & Efficiency
- ### Get Hash O(1)
- ### GET O(n)
- ### Contains O(n)
- ### Add O(1)

## API

- ### Get Hash 
#### to make some mathematical Operation to retrieve Index where Will store key and value

- ### Get
####  The first call get hash function after that we called contains function  to check if the index and key exist If true return value of this key else return null

- ### Contains
#### at First, we called Get Hash to return Index after that we checked if the index not null if true call Incudes method inside linked list class and return true is exist else return false, If the index was null  or undefined return false

- ### Add 

#### at First, we called Get Hash to return Index after that we checked if the entry is not null then create an instance from the linked list in this index after that append in this instance