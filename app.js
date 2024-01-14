/*// app.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/node-mongo-demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a simple mongoose model
const Item = mongoose.model('Item', {
  name: String,
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware to serve static files (HTML, CSS, Images)
app.use(express.static('public')); // for Images and scripts
app.use('/Images', express.static(__dirname + '/Images')); // for Images
app.use('/scripts', express.static(__dirname + '/scripts')); // for scripts
app.use('/styles', express.static(__dirname + '/styles')); // for styles
app.use('/pages', express.static(__dirname + '/pages')); // for pages

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'Images'); // specify the destination directory
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // use the original file name
  },
});

const upload = multer({ storage: storage });

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/pages/home-page.html');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/pages/login-page.html');
});

app.get('/styles/login-page.css', (req, res) => {
  res.sendFile(__dirname + '/styles/login-page.css');
});

app.get('/styles/home-page.css', (req, res) => {
  res.sendFile(__dirname + '/styles/home-page.css');
});

app.get('/styles/general-style.css', (req, res) => {
  res.sendFile(__dirname + '/styles/general-style.css');
});

app.get('/scripts/login-page.js', (req, res) => {
  res.sendFile(__dirname + '/scripts/login-page.js');
});

app.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post('/items', async (req, res) => {
  try {
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    res.json(savedItem);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Handle file uploads
app.post('/upload', upload.single('image'), (req, res) => {
  res.send('Image uploaded successfully!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});*/


// app.js

/*const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/node-mongo-demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a simple mongoose model
const Item = mongoose.model('Item', {
  name: String,
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware to serve static files (HTML, CSS, Images)
app.use(express.static('public')); // for Images and scripts
app.use('/Images', express.static(__dirname + '/Images')); // for Images
app.use('/scripts', express.static(__dirname + '/scripts')); // for scripts
app.use('/styles', express.static(__dirname + '/styles')); // for styles
app.use('/pages', express.static(__dirname + '/pages')); // for pages

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'Images'); // specify the destination directory
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // use the original file name
  },
});

const upload = multer({ storage: storage });

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/pages/home-page.html');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/pages/login-page.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/pages/about-page.html');
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/pages/contact-page.html');
});

app.get('/styles/about-page.css', (req, res) => {
  res.sendFile(__dirname + '/styles/about-page.css');
});

app.get('/styles/contact-page.css', (req, res) => {
  res.sendFile(__dirname + '/styles/contact-page.css');
});

// Add routes for other HTML files in the "pages" folder
app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/pages/about-page.html');
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/pages/contact-page.html');
});

// Add routes for other CSS files in the "styles" folder
app.get('/styles/about-page.css', (req, res) => {
  res.sendFile(__dirname + '/styles/about-page.css');
});

app.get('/styles/contact-page.css', (req, res) => {
  res.sendFile(__dirname + '/styles/contact-page.css');
});

// ... (continue adding routes for other pages and styles as needed)

app.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post('/items', async (req, res) => {
  try {
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    res.json(savedItem);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Handle file uploads
app.post('/upload', upload.single('image'), (req, res) => {
  res.send('Image uploaded successfully!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
*/

/*
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/node-mongo-demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a simple mongoose model
const Item = mongoose.model('Item', {
  name: String,
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware to serve static files (HTML, CSS, Images)
app.use(express.static('public')); // for Images and scripts
app.use('/Images', express.static(__dirname + '/Images')); // for Images
app.use('/scripts', express.static(__dirname + '/scripts')); // for scripts
app.use('/styles', express.static(__dirname + '/styles')); // for styles
app.use('/pages', express.static(__dirname + '/pages')); // for pages

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'Images'); // specify the destination directory
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // use the original file name
  },
});

const upload = multer({ storage: storage });

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/home-page.html');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login-page.html');
});

// Add route for login-page.js
app.get('/scripts/login-page.js', (req, res) => {
  res.sendFile(__dirname + '/scripts/login-page.js');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/pages/about-page.html');
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/pages/contact-page.html');
});

app.get('/styles/about-page.css', (req, res) => {
  res.sendFile(__dirname + '/styles/about-page.css');
});

app.get('/styles/contact-page.css', (req, res) => {
  res.sendFile(__dirname + '/styles/contact-page.css');
});

// Add routes for other HTML files in the "pages" folder
app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/pages/about-page.html');
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/pages/contact-page.html');
});

// Add routes for other CSS files in the "styles" folder
app.get('/styles/about-page.css', (req, res) => {
  res.sendFile(__dirname + '/styles/about-page.css');
});

app.get('/styles/contact-page.css', (req, res) => {
  res.sendFile(__dirname + '/styles/contact-page.css');
});

app.get('/scripts/login-page.js', (req, res) => {
  res.sendFile(__dirname + '/scripts/login-page.js');
});

// ... (continue adding routes for other pages and styles as needed)

app.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post('/items', async (req, res) => {
  try {
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    res.json(savedItem);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Handle file uploads
app.post('/upload', upload.single('image'), (req, res) => {
  res.send('Image uploaded successfully!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
*/
/*
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/node-mongo-demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a simple mongoose model
const Item = mongoose.model('Item', {
  name: String,
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware to serve static files (HTML, CSS, Images)
app.use(express.static('public')); // for Images and scripts
app.use('/Images', express.static(__dirname + '/Images')); // for Images
app.use('/scripts', express.static(__dirname + '/scripts')); // for scripts
app.use('/styles', express.static(__dirname + '/styles')); // for styles

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'Images'); // specify the destination directory
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // use the original file name
  },
});

const upload = multer({ storage: storage });

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/home-page.html');
});

app.get('/login-page.html', (req, res) => {
  res.sendFile(__dirname + '/login-page.html');
});


// Add route for login-page.js
app.get('/scripts/login-page.js', (req, res) => {
  res.sendFile(__dirname + '/scripts/login-page.js');
});

// Add routes for other CSS files in the "styles" folder
app.get('/styles/about-page.css', (req, res) => {
  res.sendFile(__dirname + '/styles/about-page.css');
});

app.get('/styles/contact-page.css', (req, res) => {
  res.sendFile(__dirname + '/styles/contact-page.css');
});

// ... (continue adding routes for other pages and styles as needed)

app.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post('/items', async (req, res) => {
  try {
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    res.json(savedItem);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Handle file uploads
app.post('/upload', upload.single('image'), (req, res) => {
  res.send('Image uploaded successfully!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
*/
/*const OpenAI = require('openai');
const openai = new OpenAI('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');

const completion = await openai.complete.create({
  model: 'text-davinci-003', // Use 'text-davinci-003' instead of 'gpt-3.5-turbo'
  messages: [
    { role: 'system', content: 'You are a poetic assistant, skilled in explaining complex programming concepts with creative flair.' },
    { role: 'user', content: 'Compose a poem that explains the concept of recursion in programming.' }
  ]
});*/



const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/node-mongo-demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a simple mongoose model
const Item = mongoose.model('Item', {
  name: String,
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware to serve static files (HTML, CSS, Images)
app.use(express.static('public')); // for Images and scripts
app.use('/Images', express.static(__dirname + '/Images')); // for Images
app.use('/scripts', express.static(__dirname + '/scripts')); // for scripts
app.use('/styles', express.static(__dirname + '/styles')); // for styles

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'Images'); // specify the destination directory
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // use the original file name
  },
});

const upload = multer({ storage: storage });

// Routes
app.use('/Images', express.static(__dirname + '/Images'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/Web_1920___1.html');
});

app.get('/web2', (req, res) => {
  res.sendFile(__dirname + '/Web_1920___2.html');
});

app.get('/web3', (req, res) => {
  res.sendFile(__dirname + '/Web_1920___3.html');
});

app.get('/web4', (req, res) => {
  res.sendFile(__dirname + '/Web_1920___4.html');
});

app.get('/web5', (req, res) => {
  res.sendFile(__dirname + '/Web_1920___5.html');
});

app.get('/web6', (req, res) => {
  res.sendFile(__dirname + '/Web_1920___6.html');
});

app.get('/web7', (req, res) => {
  res.sendFile(__dirname + '/Web_1920___7.html');
});

app.get('/web8', (req, res) => {
  res.sendFile(__dirname + '/Web_1920___8.html');
});

app.get('/web9', (req, res) => {
  res.sendFile(__dirname + '/Web_1920___9.html');
});

app.get('/web10', (req, res) => {
  res.sendFile(__dirname + '/Web_1920___10.html');
});

app.get('/web11', (req, res) => {
  res.sendFile(__dirname + '/web2.html');
});

app.get('/web12', (req, res) => {
  res.sendFile(__dirname + '/Web_1920___12.html');
});

app.get('/web', (req, res) => {
  res.sendFile(__dirname + '/web2.html');
});


app.get('/presentsimple', (req, res) => {
  res.sendFile(__dirname + '/present-simple-video.html');
});

app.get('/watercycle', (req, res) => {
  res.sendFile(__dirname + '/water-cycle.html');
});
// ... (add routes for other HTML files as needed)

app.get('/Web_1920___1.css', (req, res) => {
  res.sendFile(__dirname + '/Web_1920___1.css');
});

// Add routes for Images
app.get('/Images/n_5Z_2012w003n00176Bp1276_Conv.png.png', (req, res) => {
  res.sendFile(__dirname + '/Images/n_5Z_2012w003n00176Bp1276_Conv.png');
});

app.get('/Images\n_5Z_2012w003n00176Bp1276_Conv@2x.png', (req, res) => {
  res.sendFile(__dirname + 'Images\n_5Z_2012w003n00176Bp1276_Conv@2x.png');
});

// ... (add routes for other Images as needed)

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
