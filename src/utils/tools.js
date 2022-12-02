
/**
 * 写入localStorage
 * @param {*} name
 * @param {*} content
 */
const setLocalStorage = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
};
/**
 * 读取localStorage
 * @param {*} name
 */
const getLocalStorage = (name) => {
  if (!name) return;
  return window.localStorage.getItem(name);
};

/**
 * 删除localStorage
 * @param {*} name
 */
const removeLocalStorage = (name) => {
  if (!name) return;
  window.localStorage.removeItem(name);
};



export {
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage
};
