import { isNotNumber } from "./utils/isNotNumber"

const calculateBmi = (height: number, weight: number): string => {
  const result = weight / ((height / 100) * (height / 100))
  if (result < 16) {
    return "Underweight (Severe thinness)"
  } else if (16 <= result && result < 17) {
    return "Underweight (Moderate thinness)"
  } else if (17 <= result && result < 18.4) {
    return "Underweight (Mild thinness)"
  } else if (18.4 <= result && result < 25) {
    return "Normal range"
  } else if (25 <= result && result < 30) {
    return "Overweight (Pre-obese)"
  } else if (30 <= result && result < 35) {
    return "Obese (Class I)"
  } else if (35 <= result && result < 40) {
    return "Obese (Class II)"
  } else if (40 <= result) {
    return "Obese (Class III)"
  }

  return "What the heck"
}

interface Values {
  height: number
  weight: number
}

const parseArguments = (argv: string[]): Values => {
  // ts-node file.ts argv1 argv2
  if (argv.length > 4) throw new Error("Too many arguments")
  if (argv.length < 4) throw new Error("Not enought arguments")

  if (isNotNumber(argv[2]) || isNotNumber(argv[3])) throw new Error("Please provide height and weight")

  return {
    height: Number(argv[2]),
    weight: Number(argv[3])
  }
}

try {
  const { height, weight } = parseArguments(process.argv)
  console.log(calculateBmi(height, weight))
} catch (error: unknown) {
  let errorMessage = "Error: "
  if (error instanceof Error) {
    errorMessage += error.message
  }
  console.log(errorMessage)
}
