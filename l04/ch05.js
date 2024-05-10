const myObj = {
    nestedObj1: {
        price: 100,
        qty: 5
    },
    nestedObj2: {
        price: 150,
        qty: 2
    }
};

const myArray = [myObj.nestedObj1, myObj.nestedObj2];

const result = (myArray[0].price * myArray[0].qty) > (myArray[1].price * myArray[1].qty);
console.log(result);