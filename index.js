const app = require('./app')

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Node Server has been started on ${port}`))