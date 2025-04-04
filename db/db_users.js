db.createUser(
    {
        user: "webapi",
        pwd: "webapi_pwd",
        roles:[
            {
                role: "readWrite",
                db:   "webApiDb"
            }
        ]
    }
);