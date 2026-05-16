const express = require('express');

const app = express();

app.use(express.json());

app.post('/trade', async (req, res) => {

    console.log(req.body);

    res.json({
        success: true,
        message: "Order Request Received"
    });

});

app.listen(3000, () => {
    console.log('Server Running');
});
