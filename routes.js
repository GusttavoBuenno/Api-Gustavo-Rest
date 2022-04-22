const express = require('express');
const routes = express.Router();
const jwt = require('jsonwebtoken');
const SECRET = 'gustavo10';



let db= [


    {
        '1': {Nome:'Gustavo',
            Email:'gustavo.hsilva@mobi.com.br',
            passoword: '1234',
            telefone: '999999999'
                // eslint-disable-next-line no-unexpected-multiline
                [{'number': '5555555',
                    'area_code': '11'}],
        
        
        
        }
    },

    {
        '2': {Nome:'Bruna',
            Email:'Bruna.oliveira@mobi.com.br',
            passoword: '123',
            telefone: '88888888'
                // eslint-disable-next-line no-unexpected-multiline
                [ {'number': '5444444',
                    'area_code': '21'}]
        
        
        
        }
    },
];

//Buscar Dados, feito parar buscar os dados acima
routes.get('/', (req, res) =>{
    return  res.json(db);
});


//Inserir Dados
routes.get('/clientes', (req, res) => {
    res.json([{ id: 1, nome: 'Bruna', email: 'Bruna@gmail.com', telefone: 119443993992, }]);
   
    
});
//Aqui tentei achar uma maneira mais organizada parar visualizar o usuario, usando JWT para autenticação.
routes.post('/login', (req, res) => {
    const body = req.body;
    
    if(req.body.user === 'Bruna' && req.body.password ==='123'){
        const token =  jwt.sign({userId:1}, SECRET, { expiresIn: 300} );
        return res.json({ auth: true, token});
    }

    if(req.body.user === 'Gustavo' && req.body.password ==='1234'){
        const token =  jwt.sign({userId:1}, SECRET, { expiresIn: 300} );
        return res.json({ auth: true, token});
    }
    res.status(401).end();

   
});


routes.post('/logout', function(req, res){
    res.end();
});




module.exports = routes;