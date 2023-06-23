function rawUrl(filePath) {
  const baseRawUrl = process.env.RAW_GITHUB_URL;
  const sanitizedFilePath = filePath.replace(/^\/+|\/+$/g, "");
  const encodedFilePath = encodeURIComponent(sanitizedFilePath);
  const rawLink = `${baseRawUrl}${encodedFilePath}`;
  return rawLink;
}

export default rawUrl;
