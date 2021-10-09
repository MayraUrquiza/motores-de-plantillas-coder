const express = require("express")
const handlebars = require("express-handlebars")
const { routerProducts } = require("./router/productRouter.js")

const PORT = process.env.PORT || 8080
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(express.static(`${__dirname}/public`))

app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    defaultLayout: "index.hbs",
    layoutsDir: `${__dirname}/views/layouts`,
  })
)

app.set("view engine", "ejs")
app.set("views", `${__dirname}/views`)


app.use("/api/productos", routerProducts)

app.use("/", (req, res) => {
  res.render("upload")
})

const server = app.listen(PORT, () =>
  console.log(`Listen on ${server.address().port}`)
)
server.on("error", (error) => console.log(`Error en el servidor ${error}`))
