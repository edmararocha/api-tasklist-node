import task from '../models/Task.js';

const controller = {
    createTask: (req, res) => {
        task.create({
            name: req.body.name,
            description: req.body.description,
            status: req.body.status

        }).then( () => {
            return res.status(200).json({
                error: false,
                msg: "tarefa adicionada"
            });
        }).catch(() => {
            return res.status(400).json({
                error: true,
                msg: "não foi possivel adicionar a tarefa."
            });
        });
    },

    getTasks: (req, res) => {
        task.findAll().then( (tasks) => {
            return res.status(200).json({
                error: false,
                msg: "dados encontrados",
                tasks
            });
        }).catch(() => {
            return res.status(400).json({
                error: true,
                msg: "não foi possivel encontrar os dados."
            });
        });
    },
    getTask: (req, res) => {
        task.findAll({where: { id: req.body.id }}).then(task => {
            return res.status(200).json({
                error: false,
                msg: "tarefa encontrada",
                task
            });
        }).catch(() => {
            return res.status(400).json({
                error: true,
                msg: "não foi possivel encontrar a tarefa."
            });
        });
    },
    updateTask: (req, res) => {
        task.update({
            name: req.body.name,
            description: req.body.description,
            status: req.body.status
        }, {
            where: {
                id: req.body.id
            }
        }).then(() => {
            return res.status(200).json({
                error: false,
                msg: "tarefa atualizada"
            })
        }).catch(() => {
            return res.status(400).json({
                error: true,
                msg: "não foi possível atualizar a tarefa"
            });
        });;
    },
    deleteTask: (req, res) => {
        task.destroy({where: { id: req.body.id }}).then(() => {
            return res.status(200).json({
                error: false,
                msg: "tarefa deletada",
            });
        }).catch(() => {
            return res.status(400).json({
                error: true,
                msg: "não foi possivel deletar a tarefa."
            });
        });
    }
};


export default controller;