export const highlightText = (text: string, inputText?: string) => {
  const matchIndex = inputText
    ? text.toLowerCase().indexOf(inputText.toLowerCase())
    : -1;
  const matchLength = inputText ? inputText.length : 0;
  const beforeMatch = matchIndex > -1 ? text.slice(0, matchIndex) : text;
  const match =
    matchIndex > -1 ? text.slice(matchIndex, matchIndex + matchLength) : "";
  const afterMatch =
    matchIndex > -1 ? text.slice(matchIndex + matchLength) : "";
  const hasMatch = matchIndex > -1;

  return { beforeMatch, match, afterMatch, hasMatch };
};
