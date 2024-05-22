function twoSum(myArray, target) {
    for(i=0;i<=myArray.length;i++)
    {
        for(j=i+1;j<myArray.length;j++)
        {
            var twoSum = myArray[i] + myArray[j];
            if(twoSum === target)
            {
                return[i,j];
            }
        }
    }
};