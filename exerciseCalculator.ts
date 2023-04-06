import { isNotNumber } from "./utils/isNotNumber"

interface Result {
  periodLength: number
  trainingDays: number
  success: boolean
  target: number
  average: number
}

const calculateExercise = (data: number[], target: number): Result => {
  const periodLength = data.length

  let total = 0
  let trainingDays = 0

  for (let i = 0; i < data.length; i++) {
    let hours = data[i]
    if (hours !== 0) {
      total += hours
      trainingDays += 1
    }
  }

  const average = total / periodLength
  const success = (average >= target)

  return {
    periodLength, trainingDays, success, target, average
  }
}

interface Data {
  target: number
  data: number[]
}

const parseArguments = (argv: string[]): Data => {
  if (argv.length < 4) throw new Error("Not enough arguments")
  if (isNotNumber(argv[2])) throw new Error("Please provide numbers")

  const target = Number(argv[2])

  let data = []

  for (let i = 3; i < argv.length; i++) {
    if (isNotNumber(argv[i])) throw new Error("Please provide numbers")
    data.push(Number(argv[i]))
  }

  return {
    target, data
  }
}

try {
  const { target, data } = parseArguments(process.argv)
  console.log(calculateExercise(data, target))
} catch (error: unknown) {
  if (error instanceof Error) {
    console.log("Error:", error.message)
  }
}
