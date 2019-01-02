const axios = require('axios');
const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => undefined,
    checkValue: (x) => x,
    createUser: () => {
        const user = { firstName: 'Neha', lastName: 'Sharma' }
        user['age'] = 22;
        return user;
    },
    fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err => 'error')

    // add: function(num1, num2){
    //     return num1 + num2;
    // }

}

module.exports = functions;