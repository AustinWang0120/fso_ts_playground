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

console.log(calculateExercise([3, 0, 2, 4.5, 0, 3, 1], 2))
