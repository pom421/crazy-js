// https://www.hackerrank.com/challenges/mini-max-sum/problem

const origin = process.argv.slice(2)

const sums = []

for (let i = 0; i < 5; i++) {
  const tab = origin.slice(0, i).concat(i === 4 ? [] : origin.slice(i + 1))
  const sum = tab.reduce((prev, curr) => +prev + +curr, 0)
  sums.push(sum)
}

sums.sort()

console.log(sums[0] + " " + sums[4])
