import formatApiDateTime from '../../functions/formatApiDateTime';

test('正常情况',() => {

  expect(formatApiDateTime('2017-09-23 12:33:22', 'Y年MM月DD日 HH:mm:ss')).toEqual("2017年09月23日 12:33:22");
  expect(formatApiDateTime('2017-09-23 12:33:22', 'Y年MM月DD日 HH:mm')).toEqual("2017年09月23日 12:33");

});

test('异常情况',() => {

  expect(formatApiDateTime('2017-09-23', 'Y年MM月DD日 HH:mm:ss')).toEqual("2017-09-23");
  expect(formatApiDateTime('09-23 12:33:22', 'Y年MM月DD日 HH:mm')).toEqual("09-23 12:33:22");

});