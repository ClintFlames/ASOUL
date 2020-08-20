const { log } = require('dream.log'),
	pathFix = (path) => ((process.platform == "win32") ? path.replace(/\\/g, "/") : path);
let list = new Map(),
	gPath = null;
module.exports = {
	path: gPath,
	list: list,
	setPath: (lPath) => {
		gPath = pathFix(lPath + '/');
		new log('Folder path changed to "' + lPath + '"').app();
	},
	load: (name, access, type) => {
		if(gPath == null) { throw new log('Path is not specified').error(); };
		if(!name) { throw new log('Command must have a name').error(); };
		list.forEach((cmd) => { if(cmd.name == name) { throw new log('Command with that name already exists').error(); }; });
		if(!access) { access = null; new log('"' + name + '" not have access').warn(); };
		if(!type) { type = null; new log('"' + name + '" not have type').warn(); };
		list.set(name, {
			type : type,
			access : access
		});
		new log('Command load : ' + name).progress();
	},
	get: (name) => {
		if(list.has(name) == false) {
			throw new log('Command named "' + name + '" not found').error();
		} else {
			return list.get(name);
		};
	},
	run: (name, obj) => {
		if(list.has(name) == false) {
			throw new log('Command named "' + name + '" not found').error();
		} else {
			name = gPath + name;
			try {
				try {
					require(name).run(obj);
				} catch {
					require(name);
				};
			} catch {
				throw new log('Command on path "' + name + '.js' + ' not found or has error').error();
			};
		};
	}
};