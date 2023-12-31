const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

// configurando o handlebars como template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req,res)=>{
    res.render('dashboard')

})

app.get('/', (req, res) => {
    const usuario= {
        nome: "bruno",
        profissao: "Programador",
        idade: 21
    }

    const auth =true
    res.render('home',{ usuario,auth})
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!")
})