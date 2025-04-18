import express from 'express';
import cors from 'cors';
import api from './routes/api.js';

const app = express();
const PORT = process.env.PORT || 2277;

app.use(cors());
app.use(express.json());

app.use('/api/v1', api);

app.listen(PORT, () => {
    console.log(`🚀 Web server berjalan pada alamat: http://localhost:${PORT}`);
});

export default app;