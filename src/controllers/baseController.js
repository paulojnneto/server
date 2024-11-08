exports.post = (req, res, next) => {
    res.status(201).send('Requisição recebida com sucesso!');
};
exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};
exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};

exports.get = (req, res, next) => {
    const response = ky.get('https://jsonplaceholder.typicode.com/todos').then((response) => {
        return response.json()
    });
    res.status(200).json(response).send(`Requisição recebida com sucesso! ${id}`);
};