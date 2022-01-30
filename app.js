const path = require("path")
const express = require("express")
const app = express()

const dotenv = require("dotenv")
dotenv.config({ path: "./config/config.env" })

// Bodyparser middleware
app.use(express.json())

app.use(express.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, "public")))




if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  )
}


const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})