import localTime2bjTime from '../../functions/localTime2bjTime';
import moment from 'moment';

describe('localTime2bjTime',() => {

  it('正常情况', () => {
    let time = '2018-01-19T18:33:13.836Z';
    expect(localTime2bjTime(time)).toBe(time+'0');
  });

})