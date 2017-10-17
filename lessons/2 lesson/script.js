function qsort(arr) {

    var changeFn = (one, two) => {

        var temp = arr[two];
        arr[two] = arr[one];
        arr[one] = temp;
    }

    var qs = (left, right) => {

        var midIndex = left + right >> 1,
        midValue = arr[midIndex],
        innerLeft = left,
        innerRight = right;

        while(innerLeft <= innerRight) {

            while(midValue > arr[innerLeft]) innerLeft++;
            while(midValue < arr[innerRight]) innerRight--;

            if (innerRight >= innerLeft) {

                changeFn(innerLeft, innerRight);
                innerLeft++;
                innerRight--;
            }
        }

        if (left < innerRight) qs(left, innerRight);
        if (right > innerLeft) qs(innerLeft, right);
    }

    qs(0, arr.length - 1);
}

var y = [345,78,4,0,1,66,88,1,5,99,94];
qsort(y);
console.log(y);

function binMaster(arr, needle) {

    var bin = (left, right) => {

        if (left - right == -1) return right;

        var midIndex = left + right >> 1,
            midValue = arr[midIndex];

        if (needle == midValue) return midIndex;

        if (needle > midValue) {

            return bin(midIndex + 1, right);
        } else {

            return bin(left, midIndex - 1);
        }
    }

    return bin(0, arr.length - 1);
}

console.log(binMaster(y, 90));
