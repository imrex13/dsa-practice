// Apr 4


// This is a medium problem In this problem we have to find out that is this Sudoku valid or not how ? well in this problem we have to look for three things. We have to check if the values of the current row, current column and current box[3,3] is unique if not we have to return false, so its a [9,9] array and it has empty spaces which are represented as "." we dont want to calculate that. when we encounter a '.' we can skip that index.

// So for this we have to create 9+9+9 = 27 Sets to store unique values. So that when we encounter a values in any of one of the rows,column,box we can return false.
// So in this we have 9 sets for row, 9 sets for Column representing 9 rows and 9 rows representing 9 box [3,3] in the array, so with this we use two for loop to iterate through the array and check if there is any duplicate value while also adding the new values in the set on each variable.

// If we encounter a repeted value in the loop we return false. If we do not enocounter any repetative values in the loop then we return true.

// Time complexity - O(N^2) No It's actually O(1) because the input size will always be 9*9 = 81 [9,9] Array
//Space Complexity - O(1) because the board is fixed and we will always use the same 27 size set.


class Valid_Sudoku{

    valid_sudoku(board) {
        
        let rows = Array.from({ length: 9 }, () => new Set())
        let column = Array.from({ length: 9 }, () => new Set())
        let box = Array.from({length:9},()=> new Set())

        for (let i = 0; i < 9; i++){
            for (let j = 0; j < 9; j++){
                let value = board[i][j]
                let boxIndex = Math.floor(i/3)*3 + Math.floor(j/3)
                if (value ===".") continue
                 if(rows[i].has(value) || column[j].has(value) || box[boxIndex].has(value)){
                    return false;
              }
                
                rows[i].add(value)
                column[j].add(value)
                box[boxIndex].add(value)
            }
        }
        return true
    }
}


// Test 1
let input1 =[["1","2",".",".","3",".",".",".","."],
            ["4",".",".","5",".",".",".",".","."],
            [".","9","8",".",".",".",".",".","3"],
            ["5",".",".",".","6",".",".",".","4"],
            [".",".",".","8",".","3",".",".","5"],
            ["7",".",".",".","2",".",".",".","6"],
            [".",".",".",".",".",".","2",".","."],
            [".",".",".","4","1","9",".",".","8"],
            [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
            
let test1 = new Valid_Sudoku
let result1 = test1.valid_sudoku(input1)


let input2 = [["1","2",".",".","3",".",".",".","."],
            ["4",".",".","5",".",".",".",".","."],
            [".","9","1",".",".",".",".",".","3"],
            ["5",".",".",".","6",".",".",".","4"],
            [".",".",".","8",".","3",".",".","5"],
            ["7",".",".",".","2",".",".",".","6"],
            [".",".",".",".",".",".","2",".","."],
            [".",".",".","4","1","9",".",".","8"],
            [".",".",".",".","8",".",".","7","9"]]

let test2 = new Valid_Sudoku
let result2 = test2.valid_sudoku(input2)

console.log(result1); // true
console.log(result2); // false