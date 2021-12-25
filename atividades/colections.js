// exemplo de map
const getAdmins = (map) => {
	let admins = [];
	for (const [key, value] of map) {
		if (value === 'ADMIN') {
			admins.push(key);
		}
	}
	return admins;
};

const userRoles = new Map();

userRoles.set('Stephany', 'SUDO');
userRoles.set('Luiz', 'ADMIN');
userRoles.set('Elvira', 'ADMIN');
userRoles.set('Carolina', 'USER');
userRoles.set('Guilherme', 'USER');

console.log(getAdmins(userRoles));

// exemplo de set
function uniqueElements(array) {
	let unique = new Set(array);
	return [...unique];
}

const arr = [30, 30, 40, 5, 223, 2049, 3034, 5];

console.log(uniqueElements(arr));