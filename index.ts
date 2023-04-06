import express from "express"
import { calculateExercise } from "./exerciseCalculator"
import { isNotNumber } from "./utils/isNotNumber"

const app = express()

app.use(express.json())

app.get("/", (_req, res) => {
  res.send("Hello")
})

app.get("/bmi", (req, res) => {
  const height = Number(req.query.height)
  const weight = Number(req.query.weight)
  if (isNotNumber(height) || isNotNumber(weight)) {
    res.json({
      error: "malformatted parameters"
    })
  }

  const bmi = weight / ((height / 100) ** 2)

  res.json({
    weight, height,
    bmi: `Your BMI is: ${bmi}`
  })
})

app.post("/exercises", (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data, target } = req.body

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const result = calculateExercise(data, Number(target))
  res.json(result)
})

const PORT = 3003

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
