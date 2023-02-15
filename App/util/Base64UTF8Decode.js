import base64 from "react-native-base64"
import utf8 from "utf8"

export const decode = (str) => {
  try {
    if (str !== undefined && str.trim() !== "") {
      const base64Decoded = base64.decode(str)
      if (base64Decoded !== undefined && base64Decoded.trim() !== "") {
        return utf8.decode(base64Decoded)
      }
    }
    return ""
  } catch (error) {
    console.log(`Could not decode string '${str}', cause:${error}`)
    return ""
  }
}
