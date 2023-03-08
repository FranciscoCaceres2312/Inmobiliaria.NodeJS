const path = require('path');

exports.menuPrincipal = (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/index.html'))
}

exports.getAllProperty = (req, res) => {
    req.getConnection((err, conn) =>{
        if(err) return res.send(err);
    
        const properties = conn.query(`SELECT * FROM property`)
        console.log(properties);
       // res.sendFile(path.resolve(__dirname, '../views/index.html'))
    })
};
/*req.getConnection((err, conn) =>{
    if(err) return res.send(err);

    conn.query(`SELECT * FROM property`, (err, result) => {
        if(err) return res.send(err);

       // res.sendFile(path.resolve(__dirname, 'index.html'))
    });
});*/
exports.getOneProperty = (req, res) => {
    req.getConnection((err, conn) =>{
        if(err) return res.send(err);

        conn.query(`SELECT * FROM property WHERE id_Property = ?`,[req.params.value], (err, result) => {
            if(err) return res.send(err);

            res.json(result);
        });
    });
};


exports.createProperty = (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/createProperty.html'));
};


exports.saveProperty = (req, res) => {
    const { cadastralNumber, direction, postcard , price } = req.body;
    const newLink ={
        cadastralNumber,
        direction,
        postcard,
        price
    };
    req.getConnection((err, conn) =>{
        if(err) return res.send(err);

        conn.query(`INSERT INTO property SET ?`,[newLink]);
    });
    res.sendFile(path.resolve(__dirname, '../views/createProperty.html'));
};

exports.update = (req, res) => {
    req.getConnection((err,conn) =>{
        if(err) return res.send(err);
        conn.query(`UPDATE property SET ? WHERE id_Property = ?`,
        [req.body, req.params.value], (err, res) => {
            if(err) return res.send(err);

            res.send("Actualización exitosa");
        });
    });
};

exports.deleteItem = (req, res) => {
    req.getConnection((err,conn) =>{
        if(err) return res.send(err);
        conn.query(`DELETE FROM property WHERE id_Property = ?`,
        [req.params.value], (err, result) => {
            if(err) return res.send(err);

            res.send("Eliminación exitosa");
        });
    });
};
