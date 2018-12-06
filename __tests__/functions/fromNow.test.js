import fromNow from '../../functions/fromNow';
import moment from 'moment';

test('',() => {
  let m1 = moment().subtract(1, 'd');
  expect(fromNow(m1)).toEqual(`昨天 ${m1.format('HH:mm')}`);
  let m2 = moment().subtract(130, 'm');
  expect(fromNow(m2)).toEqual(`2小时之前`);
  let m3 = moment().subtract(70, 'm');
  expect(fromNow(m3)).toEqual(`1小时之前`);
  let m4 = moment().subtract(30, 'm');
  expect(fromNow(m4)).toEqual('30分钟之前');
  let m5 = moment().subtract(4, 'm');
  expect(fromNow(m5)).toEqual(`刚刚`);
});