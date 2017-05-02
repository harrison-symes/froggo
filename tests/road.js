const test = require('tape')
const createRoad = require('../functions/createRoad')

test('check that tests are running', t => {
  t.pass()
  t.end()
})

test('check that a square road can be created', t => {
  let expected =
  [
    [null,null,null],
    [null,null,null],
    [null,null,null]
  ]
  let actual = createRoad.createRoad(3, 3)

  t.deepEqual(actual, expected, 'the 3x3 board is created')
  t.end()
})

test('check that a square road can be created', t => {
  let expectedX =
  [
    [null,null,null],
    [null,null,null],
    [null,null,null],
    [null,null,null]
  ]

  let expectedY =
  [
    [null,null,null, null],
    [null,null,null, null],
    [null,null,null, null]
  ]
  let actualX = createRoad.createRoad(4, 3)
  let actualY = createRoad.createRoad(3, 4)

  t.deepEqual(actualX, expectedX, 'the 4x3 board is created')
  t.deepEqual(actualY, expectedY, 'the 3x4 board is created')
  t.end()
})
