import express from "express";
import routes from './routes'

const app = express();

app.use(express.json());

app.use(routes);


app.listen(3333);

/*

//as rotas são semanticas - a gente entende o que ela quer fazer



const users = [
    'edd',
    'messias', 
    'rocha',
    'matias',
    'eduardo'
];

app.get('/users', (req,res) => {
    console.log('Listagem de usuários');

    return res.json(users);
});

//Request Param - > Vem na propria rota que identifica 
// um recurso
app.get('/users/:id', (req,res)=>{
    const id = Number(req.params.id);
    const user = users[id];

    return res.json(user);
});

//facultativo 
app.get('/users', (req,res)=>{
    const search = String(req.query.search);
    const filterUsers = search ? users.filter(user => user.includes(search)) : users; 
     

    return res.json(filterUsers);
});

app.post('/users',(req,res) =>{
    
    const data = req.body;
    
    const user ={
        name: data.name,
        email: data.email
    };
    return res.json(user);
});
*/