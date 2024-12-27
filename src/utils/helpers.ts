export const truncateMarkdownSafely = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  const isMarkdownSyntax = (index: number): boolean => {
    const specialChars = ['*', '_', '`', '['];
    return specialChars.includes(text[index]);
  };

  const findClosingMark = (index: number): number => {
    const openChar = text[index];
    const closeChar = {
      '[': ']',
      '(': ')',
      '*': '*',
      _: '_',
      '`': '`',
      '~': '~',
    }[openChar];
    let depth = 1;
    for (let i = index + 1; i < text.length; i++) {
      if (text[i] === openChar) depth++;
      if (text[i] === closeChar) depth--;
      if (depth === 0) return i;
    }
    return -1;
  };

  let result = '';
  let inMarkdown = false;
  let markdownStart = 0;

  for (let i = 0; i < text.length && result.length < maxLength; i++) {
    if (isMarkdownSyntax(i) && !inMarkdown) {
      inMarkdown = true;
      markdownStart = i;
      const closingIndex = findClosingMark(i);
      if (closingIndex !== -1) {
        if (result.length + (closingIndex - i + 1) <= maxLength) {
          result += text.substring(i, closingIndex + 1);
          i = closingIndex;
        } else {
          inMarkdown = false;
        }
        continue;
      }
    }
    if (!inMarkdown) {
      result += text[i];
    }
  }

  const lastSpace = result.lastIndexOf(' ');
  if (lastSpace !== -1) {
    result = result.substring(0, lastSpace);
  }
  return result.trim() + '...';
};

export const bigNumberText = (n: number): string => {
  if (n < 1000) return n.toFixed(2);
  if (n < 1000000) return `${(n / 1000).toFixed(1)}K`;
  if (n < 1000000000) return `${(n / 1000000).toFixed(1)}M`;
  return `${(n / 1000000000).toFixed(1)}B`;
};


export const shuffleArray = (array: any) => {
  let shuffled = array
    .map((value: any) => ({ value, sort: Math.random() }))
    .sort((a: any, b: any) => a.sort - b.sort)
    .map(({ value }: any) => value)

    return shuffled;
}