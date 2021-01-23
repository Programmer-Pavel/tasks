const model = [
    {
        id: 0,
        title: 'Title text 1',
        text: 'Some text 1',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 1,
        title: 'Title text 2',
        text: 'Some text 2',
        user: {
            id: 1,
            name: 'user 2',
        },
    }, {
        id: 2,
        title: 'Title text 3',
        text: 'Some text 3',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 3,
        title: 'Title text 4',
        text: 'Some text 4',
        user: {
            id: 2,
            name: 'user 3',
        },
    }, {
        id: 4,
        title: 'Title text 5',
        text: 'Some text 5',
        user: {
            id: 0,
            name: 'user 1',
        },
    }
]
groups = Object.create(null)
grouped = [];

model.forEach(function (o) {
    if (!groups[o.user.id]) {
        groups[o.user.id] = [];
        grouped.push({id: o.user.id, name: o.user.name, posts: groups[o.user.id]});
    }
    groups[o.user.id].push(o.id, o.text, o.title);
});

console.log(grouped);