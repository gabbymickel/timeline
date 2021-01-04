const DATA = [
  {
    year: '2004',
    title: 'This is a test title',
    body: 'this is body',
    image: 'https://picsum.photos/600/400'
  },
  {
    year: '2005',
    title: 'This is a test title 2',
    body: 'this is body',
    image: 'https://picsum.photos/600/400'
  },
  {
    year: '1990',
    title: 'This is a test title 3',
    body: 'this is body',
    image: 'https://picsum.photos/600/400'
  },
  {
    year: '2018',
    title: 'This is a test title 4',
    body: 'this is body',
    image: 'https://picsum.photos/600/400'
  },
  {
    year: '2005',
    title: 'This is a test title 2',
    body: 'this is body',
    image: 'https://picsum.photos/600/400'
  },
  {
    year: '1990',
    title: 'This is a test title 3',
    body: 'this is body',
    image: 'https://picsum.photos/600/400'
  },
  {
    year: '2018',
    title: 'This is a test title 4',
    body: 'this is body',
    image: 'https://picsum.photos/600/400'
  },
  {
    year: '2018',
    title: 'This is a test title 4',
    body: 'this is body',
    image: 'https://picsum.photos/600/400'
  },
  {
    year: '2005',
    title: 'This is a test title 2',
    body: 'this is body',
    image: 'https://picsum.photos/600/400'
  },
  {
    year: '1990',
    title: 'This is a test title 3',
    body: 'this is body',
    image: 'https://picsum.photos/600/400'
  },
  {
    year: '2018',
    title: 'This is a test title 4',
    body: 'this is body',
    image: 'https://picsum.photos/600/400'
  },
];

if(document.getElementById('timeline')) {
  let timeline = new Timeline('timeline', DATA);
  timeline.init();
}
