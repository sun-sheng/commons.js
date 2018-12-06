/**
 * Created by sunshine on 2016/10/9.
 */
export default {
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      value = undefined;
    }
    return value;
  },
  get(key) {
    let value = localStorage.getItem(key);
    try {
      value = JSON.parse(value);
    } catch (e) {
      value = undefined;
    }
    return value;
  },
  remove(...keys) {
    keys.forEach((key) => {
      localStorage.removeItem(key);
    });
  },
  clear() {
    localStorage.clear();
  },
  on(handler) {
    window.addEventListener('storage', handler);
  },
  off(handler) {
    window.removeEventListener('storage', handler);
  }
};