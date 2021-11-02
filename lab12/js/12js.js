let arr = [
    {   key: 0,
        name: 'Андрей',
        age: 13,
		occupation: 'schoolboy'
    },
    {   key: 1,
        name: 'Юра',
        age: 31,
		occupation: 'Developer'
    },
    {   key: 2,
        name: 'Алексей',
        age: 24,
		occupation: 'Student'
    },
    {   key: 3,
        name: 'Женя',
		occupation: 'Student'
    },
    {   key: 4,
        name: 'Олег',
		occupation: 'stray'
    },
    {   key: 5,
        name: 'Анастасия',
        age: 44,
		occupation: 'Developer'
    },
	{   key: 6,
        name: 'Ирина',
        age: 18,
		occupation: 'schoolboy'
    }
];

arr.sort(function (a, b) {
    if (typeof a === 'object' && typeof b === 'object') {
        if (a.age > b.age) {
            return 1;
        }
        if (a.age < b.age) {
            return -1;
        }
        if (a.age == b.age)
            return 0;
    }
    else return console.log('В массиве не объекты');
});

function FILTERS(x, key) {
	if (Array.isArray(x)) {
        let result = x.filter(key);
        return result;
	}	
}

console.log(FILTERS(arr, item => item.age > 30));



