import test from 'ava'

test("タイトル", (t) => {
  t.pass()
})

test("1 + 1 = 2", (t) => {
  const a = 1
  const b = 1

  t.is(a + b, 2)
})

test("async test", async (t) => {
  const res = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("hoge")
    }, 5 * 1000)
  })

  t.is(res, "hoge")
})
