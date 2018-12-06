/**
 * Created by xuqiangxing on 2017/12/25.
 */
import getScrollTop from '../../functions/getScrollTop';
import Chromeless from 'chromeless';
let chromeless;

beforeEach(() => {
  chromeless = new Chromeless();
});

afterEach(() => {
  chromeless.end();
  chromeless = null;
});


test('', () => {
  chromeless.goto("https://www.tezign.com/")
    .scrollTo(0, 2000).then(()=> {
    window.pageYOffset == expect(getScrollTop());
  })
});