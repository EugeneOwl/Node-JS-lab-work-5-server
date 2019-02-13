const cors = require('cors');

const corsSettings = cors({
    origin: 'http://localhost:4200',
    credentials: true
});

export {corsSettings}
