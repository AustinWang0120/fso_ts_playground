import express from "express"
import { isNotNumber } from "./utils/isNotNumber"

const app = express()

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

const PORT = 3003

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
