const app = express()
const bodyParser = require('body-parser');



// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// Route includes
const blog = require('./blog')

// Routes
app.use('/blog')

