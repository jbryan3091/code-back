const { users } = require('../db.json');

module.exports = {

    getUsers: (req, res)  => {
        res.json({users});

    },
    
   
    addUser: (req, res) => {
        const { name } = req.body;
        users.push({
            id: users.length,
            name
        }),
        res.json({
            'success': true,
            'description': 'CREATED'
            })          
    },

    updateUserById: (req, res) => {
        const { id } = req.params;
        const { name } = req.body;

        users.forEach((user, i) => {
            if (user.id === Number(id)){
                user.name = name;
            }
        });
        res.json({
            '200': true,
            'description': 'OK'
            }),
            res.json({
                '400': false,
                'description': 'OK'
                })
    },

    deleteUserById: (req, res) => {
        const { id } = req.params;

        users.forEach((user, i) => {
            if (user.id === Number(id)) {
                users.splice(i, 1);
            }
        });

        res.json({
            '200': true,
            'description': 'OK'
            }),
            res.json({
                '400': false,
                'description': 'Invalid USer'
                })
    }
};