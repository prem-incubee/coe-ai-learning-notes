/**
 * Sums comma/newline-separated numbers. Supports custom delimiter //;\n1;2;3.
 * Empty string → 0. Negatives throw. Numbers > 1000 ignored.
 */
function add(numbers) {
  if (!numbers) return 0

  let delimiter = /[,\n]/
  let str = numbers

  if (str.startsWith("//")) {
    const end = str.indexOf("\n")
    delimiter = str.slice(2, end)
    str = str.slice(end + 1)
  }

  const parts = str.split(delimiter).map((s) => parseInt(s.trim(), 10))
  const negatives = parts.filter((n) => n < 0)
  if (negatives.length) {
    throw new Error("negatives not allowed: " + negatives.join(", "))
  }

  return parts
    .filter((n) => !isNaN(n) && n <= 1000)
    .reduce((sum, n) => sum + n, 0)
}

module.exports = { add }
