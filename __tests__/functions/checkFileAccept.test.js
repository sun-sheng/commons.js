/**
 * Created by 苑永志 on 2017/11/24.
 */

import checkFileAccept from '../../functions/checkFileAccept';

// describe('checkFileAccept',() => {
//
// });

test('接收所有的文件类型',() => {
  const params = ['', null, undefined,];
  for(let param2 of params){
    expect(checkFileAccept('aaaaa.txt', param2)).toBeTruthy();
  }
});

test('文件或文件名称参数非空',() => {
  const params = ['', null, undefined,];
  for(let param1 of params){
    expect(checkFileAccept(param1, 'jpg')).toBeFalsy();
  }
});

// test('参数1的类型必须是字符串或File类型',() => {
//   expect(checkFileAccept(5, 'jpg')).toThrow();
//   expect(checkFileAccept({name:'小明'}, 'jpg')).toThrow();
// });

test('具体文件类型',() => {
  expect(checkFileAccept('aaa.png', 'image/png')).toBeTruthy();
  expect(checkFileAccept('aaa.png', 'png')).toBeTruthy();
});

test('一类文件类型(image)',() => {
  const files = ['aaa.jpg','aaa.jpeg','aaa.png','aaa.gif'];
  for(let file of files){
    expect(checkFileAccept(file, 'image/*'));
    expect(checkFileAccept(file, '*'));
  }
});
test('一类文件类型(audio)',() => {
  const files = ['aaa.mp3','aaa.wav','aaa.ogg','aaa.wma','aaa.aac','aaa.ape','aaa.m4a'];
  for(let file of files){
    expect(checkFileAccept(file, 'audio/*')).toBeTruthy();
    expect(checkFileAccept(file, '*')).toBeTruthy();
  }
  expect(checkFileAccept('aaa.png', 'audio/*')).toBeFalsy();
});

