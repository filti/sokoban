this["app"] = this["app"] || {};
this["app"]["Templates"] = this["app"]["Templates"] || {};

this["app"]["Templates"]["./app/assets/templates/game"] = function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),title = locals_.title;buf.push("<h1>" + (jade.escape(null == (jade.interp = title) ? "" : jade.interp)) + "</h1><p>Welcome to " + (jade.escape((jade.interp = title) == null ? '' : jade.interp)) + "</p><canvas id=\"world\"></canvas>");;return buf.join("");
};

this["app"]["Templates"]["./app/assets/templates/message"] = function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),comment = locals_.comment;buf.push("<div class=\"comment\"><span class=\"name\">" + (jade.escape((jade.interp = comment.name) == null ? '' : jade.interp)) + "</span><span class=\"content\">" + (jade.escape((jade.interp = comment.content) == null ? '' : jade.interp)) + "</span><span class=\"posted-at\">" + (jade.escape((jade.interp = comment.date) == null ? '' : jade.interp)) + "</span></div>");;return buf.join("");
};

this["app"]["Templates"]["./app/assets/templates/room"] = function anonymous(locals) {
var buf = [];
buf.push("<section id=\"room\"><h1>Chat</h1><input type=\"text\" name=\"name\"/><input type=\"text\" name=\"comment\"/><input type=\"submit\" name=\"post\"/><div id=\"chat-log\"></div></section>");;return buf.join("");
};