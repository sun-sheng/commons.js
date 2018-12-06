import bjTime2LocalTime from '../../functions/bjTime2LocalTime';
import moment from 'moment';

describe('bjTime2LocalTime',() => {

  it('正常情况', () => {
    expect(bjTime2LocalTime(1516209064256)).toBe(1516209064256);
  });

})