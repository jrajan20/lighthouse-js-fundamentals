function concat(A1, A2)
{
if (A1.length === 0)
{
    return A2;
}
else if (A2.length === 0)
{
    return A1;
}
else
{
    for (var i = 0; i < A2.length; i++)	
  {
    A1.push(A2[i]);
  }
}
  return A1;
}

}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]); 
  
  


  
