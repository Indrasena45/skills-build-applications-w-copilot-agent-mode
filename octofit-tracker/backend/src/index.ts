import express, { Request, Response } from 'express'
import mongoose from 'mongoose'

const app = express()
app.use(express.json())

const mongoUri = process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/octofit'

mongoose
  .connect(mongoUri)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('MongoDB connection error:', err)
    process.exit(1)
  })

const workoutSchema = new mongoose.Schema({
  name: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  date: { type: Date, default: () => new Date() },
})

const Workout = mongoose.model('Workout', workoutSchema)

app.get('/', (_req: Request, res: Response) => {
  res.json({ service: 'Octofit Tracker API', status: 'ok' })
})

app.get('/workouts', async (_req: Request, res: Response) => {
  const workouts = await Workout.find().lean()
  res.json(workouts)
})

app.post('/workouts', async (req: Request, res: Response) => {
  const payload = req.body
  const workout = new Workout(payload)
  const saved = await workout.save()
  res.status(201).json(saved)
})

const port = Number(process.env.PORT ?? 8000)
app.listen(port, () => {
  console.log(`Octofit backend listening on http://localhost:${port}`)
})
