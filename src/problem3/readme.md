# in the sortedBalances function:
- the 'balancePriority' variable do not use and the 'lhsPriority' variable do not declare. We should replace the 'lhsPriority' variable by the 'balancePriority' variable
- We only need use 1 "if" condition
- we should 'filter' first, get the return value. Then, we action the 'sort' function. It will easier in debuging
- We should set name easy to understand, meaning. Other developer can maintain our code
=> We should replace "lhs" name and "rhs" to "left..." and "right..." 
- We don't need if (rightPriority > leftPriority) beacause we have "else" function