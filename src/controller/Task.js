import { openDb } from '../configDB';

export async function createTable () {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Task (id INTEGER PRIMARY KEY, name TEXT, description TEXT, status BOOLEAN)');
    });
}

export async function insertTask (req, res) {
    let task = req.body;
    openDb().then(db => {
        db.run('INSERT INTO Task (name, description, status) VALUES (?, ?, ?)', [ task.name, task.description, task.status ]);

        res.json(
            {
                "error": false,
                "msg": "Tarefa inserida."
            }
        );
    })
    .catch(() => {
        res.json(
            {
                "error": true,
                "msg": "erro ao adicionar tarefa."
            }
        );
    });
}

export async function updateTask (req, res) {
    let task = req.body
    openDb().then(db => {
        db.run('UPDATE Task SET name=?, description=?, status=? WHERE id=?', [ task.name, task.description, task.status, task.id ]);
        
        res.json({
            "error": false,
            "msg": "tarefa atualizada."
        });
    })
    .catch(() => {
        res.json({
            "error": true,
            "msg": "erro ao atualizar tarefa."
        });
    });
}

export async function selectAllTasks (req, res) {
    openDb().then( db => {
        db.all('SELECT * FROM Task')
            .then(tasks => res.json(tasks))
            .catch(() => {res.json({"msg": "Nenhuna tarefa encontrada."})});
    });
}

export async function selectTask (req, res) {
    let id = req.body.id;
    openDb().then( db => {
        db.get('SELECT * FROM Task WHERE id=?', [id]).then(task => res.json(task)).catch(() => res.json({"msg": "erro ao buscar tarefa"}));
    });
}

export async function deleteTask (req, res) {
    let id = req.body.id;
    openDb().then( db => {
        db.run('DELETE FROM Task WHERE id=?', [id]).then(res => res).catch;

        res.json({
            "error": false,
            "msg": "tarefa deletada com sucesso."
        });
    })
    .catch(() => {
        res.json({
            "error": true,
            "msg": "Erro ao deletar tarefa."
        });
    });
}