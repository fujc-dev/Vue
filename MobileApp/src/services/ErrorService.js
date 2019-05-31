var ErrorService = {

    handleError: function (error) {
        console.log('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
};


export  { ErrorService }