function useUrl() {
  const isValidUrl = (url) => {
    const urlPattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', // fragment locator
      'i' // fragment locator
    );
    return !!urlPattern.test(url);
  };

  const proxyImageUrl = (url) => {
    const proxyEndpoint = `${
      import.meta.env.VITE_BASE_API_URL
    }/api/proxy-image`;
    return `${proxyEndpoint}?url=${encodeURIComponent(url)}`;
  };

  return {
    isValidUrl,
    proxyImageUrl,
  };
}

export default useUrl;
