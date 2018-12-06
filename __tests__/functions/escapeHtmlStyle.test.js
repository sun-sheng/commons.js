/**
 * Created by xuqiangxing on 2017/12/25.
 */

import escapeHtmlStyle from '../../functions/escapeHtmlStyle';

describe('escapeHtmlStyle',() => {
  it('测试正常数值',() => {
    const htmlStr = '<span style="width: 100px">这是一段有style的文本</span>';
    expect(escapeHtmlStyle(htmlStr)).toBe('<span >这是一段有style的文本</span>');
  });

  it('测试空字符串数值',() => {
    const htmlStr = null;
    expect(escapeHtmlStyle(htmlStr)).toBe('');
  });
});