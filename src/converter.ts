const punctuationMap: Record<string, string> = {
  // 逗号
  '，': ',',
  // 句号
  '。': '.',
  // 问号
  '？': '?',
  // 顿号
  '、': ',',
  // 冒号
  '：': ':',
  // 分好
  '；': ';',
  // 感叹号
  '！': '!',
  // 双引号
  '“': '"',
  '”': '"',
  // 单引号
  '‘': '\'',
  '’': '\'',
  // 圆括号
  '（': '(',
  '）': ')',
  // 花括号
  '｛': '{',
  '｝': '}',
  // 尖括号
  '《': '<',
  '》': '>',
  // 方括号
  '【': '[',
  '】': ']',
}

export const matchRegex = /[.,?!;:'(){}[\]<>\w]/

export function isChinesePunctuation(char: string) {
  return !!punctuationMap[char]
}

export function convertPunctuation(char: string) {
  return punctuationMap[char] || char
}
