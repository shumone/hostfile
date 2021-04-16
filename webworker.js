onmessage = function(event) {
	var tmpValue = event.data;
	var stackURLS = tmpValue.match(/([\\w+]+\\:\\/\\/)+([\\w\\d-]+\\.)*[\\w-]+[\\.\\:]\\w+([\\/\\?\\=\\&\\#.]?[\\w-]+)*\\/?/gm);
	postMessage(stackURLS);
}
