// 判断数组是否是回文  'aba'

// function validPalindrome(str) {
//   if (typeof str != 'string') return false;
//   return str.split('').reverse().join('') === str
// }
// // var arr = 'level'
// console.log(validPalindrome('level'))


// 忽略大小写
// 忽略符号和空格
// eg：A man, a plan, a canal: Panama

var isValidChar = (c) => {  // abc  123
  // /[0-9a-zA-Z]/.test('1')
  return /^[\w]$/.test(c);
}
var isPalindrome = (s) => {
  s = s.toLowerCase();
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    if (!isValidChar(s[left])) {
      left++;
      continue;
    }
    if (!isValidChar(s[right])) {
      right--;
      continue;
    }
    if (s[left] == s[right]) {
      left++;
      right--;
    } else {
      break;
    }
  }
  return right <= left;
}
console.log(isPalindrome('A man, a plan, a canal: Panama'))