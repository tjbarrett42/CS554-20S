const data = './dummyData';

let exportedMethods = {
    getById(id) {
        let user = undefined;
        for(let i = 0, len = data.length; i < len; i++) {
            if (id == data[i][0]) {
                user = data[i];
            }
        }

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // find project
                if (user) {
                    resolve(user);
                } else {
                    reject(new Error("something went wrong"));
                }
            }, 5000);
        });
    }
};

module.exports = exportedMethods;
