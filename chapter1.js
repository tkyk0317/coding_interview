// require underscore library.
var _u = require('underscore');

/*
 * chapter1 1.1
 * ある文字列が、重複する文字がないことを判定.
 * 追加の記憶領域を使用しない.
 * for ascc.
 */
const checkDuplicated = (str) => {
    let checked = new Array(str.length);
    checked.fill(0, false);
    _u.each(str, (e) => {
        const index = e.charCodeAt() - 'a'.charCodeAt();
        if(checked[index]) return false;
        else checked[index] = true;
    });
    return true;
}

/*
 * chapter1 1.2
 * 2つの文字列が、並び替えになっているかどうか判定する.
 * 追加の記憶領域を使用しない.
 * for ascc.
 */
const isSortedString = (str1, str2) => {
    const reduce = (s) => {
        return Array.prototype.reduce.call(s, (p, c) => {
            return p + c.charCodeAt();
        }, 0);
    }
    return reduce(str1) === reduce(str2);
}

/*
 * chapter1 1.3
 * 文字列が与えられたとき、空白文字を「%20」で置き換える
 * for ascc.
 */
const replaceSpace = (str) => {
    return Array.prototype.map.call(str, (c) => {
        return c === ' ' ? '%20' : c;
    }).reduce((p, c) => {
        return p + c;
    });
}

/*
 * chapter1 1.4
 * 文字列が与えられたとき、その文字列が回文の順列であるか.
 */
const isPalindrome = (str) => {
    // 各文字の出現回数を算出.
    let palindrome = new Array(str.length);
    palindrome.fill(0, 0);
    _u.each(str, (e) => { palindrome[e.charCodeAt() - 'a'.charCodeAt()] += 1; })

    // 文字数が奇数個となる文字が、2個以上存在しないことを示せばよい.
    return _u.filter(palindrome, (e) => { return (e % 2 === 1); }).length <= 1;
}

/*
 * chapter1 1.5
 * 文字列が２つ与えられたとき、一方の文字列に対して文字の挿入、置換、削除いずれかの1操作で、他方の文字列と等しくできるかどうか.
 */
const isSameStringByUID = (str1, str2) => { // UID = update, insert, delete.

}

// start.
console.log("1-1: " + checkDuplicated('abcedfg'));
console.log("1-2: " + isSortedString('abcedfg', 'gfdecba'));
console.log("1-2: " + isSortedString('abc', 'abc '));
console.log("1-3: " + replaceSpace('a bc'));
console.log("1-4: " + isPalindrome('abc'));