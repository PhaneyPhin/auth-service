var charsToEncode = /[\u007f-\uffff]/g;
function httpSafeParser(object: any) {
  return JSON.stringify(object).replace(charsToEncode,
    function(c) {
      return '\\u'+('000'+c.charCodeAt(0).toString(16)).slice(-4);
    }
  );
}

export default httpSafeParser