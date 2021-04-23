self.onmessage = function(event) {
	var tmpValue = event.data.stack;
	var stackURLS = tmpValue.match(/([\w+]+\:\/\/)+([\w\d-]+\.)*[\w-]+[\.\:]\w+([\/\?\=\&\#.]?[\w-]+)*\/?/gm);
	self.postMessage({stack: stackURLS, id: event.data.id});
}
