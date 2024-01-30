const fetch = require('node-fetch')
const FormData = require('form-data')
const { fromBuffer } = require('file-type')

/**
 * Upload image to url
 * Supported mimetype:
 * - `image/jpeg`
 * - `image/jpg`
 * - `image/png`s
 * - `video/mp4`s
 * - `all files`
 * @param {Buffer} buffer Image Buffer
 */

module.exports = async buffer => {
  let { ext } = await fromBuffer(buffer);
  let bodyForm = new FormData();
  bodyForm.append("file", buffer, "file." + ext);
  let res = await fetch("https://btch.pages.dev/upload", {
    method: "post",
    body: bodyForm,
  });
  let data = await res.json();
  if (data.error) throw data.error
  return 'https://btch.pages.dev' + data[0].src
}
