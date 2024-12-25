import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
export function getRelativeTime(inputTime: string) {
  const targetTime = dayjs(inputTime);
  const now = dayjs();

  if (!targetTime.isValid()) {
    return 'Invalid time format';
  }

  return targetTime.from(now);
}
export const fallbackCopyTextToClipboard = (text: string) => {
  const textArea = document.createElement('textarea');
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = '0';
  textArea.style.left = '0';
  textArea.style.position = 'fixed';

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
  } catch (err) {
    console.log(err);
  }

  document.body.removeChild(textArea);
};
