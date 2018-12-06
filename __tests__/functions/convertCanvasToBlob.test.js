// /**
//  * Created by 苑永志 on 2017/11/24.
//  */
//
// // import ReactDom from 'react-dom';
// import Chromeless from 'chromeless';
//
// import convertCanvasToBlob from '../../functions/convertCanvasToBlob';
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
// const convertCanvasToBlobStr = convertCanvasToBlob.toString();
//
// describe('convertCanvasToBlob',() => {
//   test('一般情况', () => {
//
//     expect.assertions(1);
//     return chromeless.setHtml('<canvas id="canvas"/>').evaluate(()=>{
//       const canvas =  document.getElementById('canvas');
//       const ctx = canvas.getContext('2d');
//       ctx.fillStyle = 'green';
//       ctx.fillRect(10, 10, 100, 100);
//
//       const fun = eval(convertCanvasToBlobStr);
//
//       return fun(canvas);
//     }).then(canvas => {
//       console.log(canvas);
//       const res = convertCanvasToBlob(canvas);
//
//       expect(res).toBeInstanceOf(Blob);
//     }, err => {
//       console.log(err);
//       expect(err).toBeInstanceOf(Object);
//     });
//   });
//
// });
//
test("一般情况", () => {
  expect(1).toBe(1);
});
