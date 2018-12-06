/**
 * Created by 苑永志 on 2017/11/24.
 */

import escapeHtml from '../../functions/escapeHtml';

describe('escapeHtml',() => {
  it('测试正常数值',() => {
    const htmlStr = '<span>&nbsp;这是一段&nbsp;文本</span>';
    expect(escapeHtml(htmlStr)).toBe('这是一段文本');
  });

  it('测试空字符串数值',() => {
    const htmlStr = null;
    expect(escapeHtml(htmlStr)).toBe('');
  });
});