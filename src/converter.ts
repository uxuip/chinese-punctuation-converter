const punctuationMap: Record<string, string> = {
  '，': ',',
  '。': '.',
  '？': '?',
  '、': ',',
  '：': ':',
  '；': ';',
  '！': '!',
  '“': '"',
  '”': '"',
  '‘': '\'',
  '’': '\'',
  '（': '(',
  '）': ')',
  '｛': '{',
  '｝': '}',
  '《': '<',
  '》': '>',
  '【': '[',
  '】': ']',
  '·': '`',
}
const chinesePunctuationList = Object.keys(punctuationMap)
const englishPunctuationList = Object.values(punctuationMap)

export function validCharacter(char: string) {
  return englishPunctuationList.includes(char) || /\w/.test(char)
}

export function isChinesePunctuation(char: string) {
  return chinesePunctuationList.includes(char)
}

export function convertPunctuation(char: string) {
  return punctuationMap[char] || char
}
