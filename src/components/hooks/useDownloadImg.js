import { toPng } from 'html-to-image';

function useDownloadImage() {
  const downloadPng = async () => {
    const node = document.querySelector('#wrapper');
    const dataUrl = await toPng(node, { cacheBust: true });

    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = `journey-preview-${new Date().toISOString()}.png`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  return {
    downloadPng,
  };
}

export default useDownloadImage;
