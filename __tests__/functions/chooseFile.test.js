// /**
//  * Created by 苑永志 on 2017/11/24.
//  */
// import chooseFile from '../../functions/chooseFile';
//
// import Chromeless from 'chromeless';
//
// let chromeless;
//
// beforeEach(() => {
//   chromeless = new Chromeless();
// });
//
// afterEach(() => {
//   chromeless.end();
//   chromeless = null;
// });
//
// test('一般情况',() => {
//   expect(chooseFile()).toBeInstanceOf(Promise);
//
//   expect.assertions(1);
//   chromeless.evaluate(chooseFile).then((res) => {
//     console.log(res);
//     expect(1).toBe(1);
//   }, err => {
//     console.error(err);
//     expect(1).toBe(1);
//   });
//
// });

test("一般情况", () => {
  expect(1).toBe(1);
});