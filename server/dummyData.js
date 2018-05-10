import Poll from './models/poll';

export default function () {
  Poll.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const poll1 = new Poll({
      name: 'Admin',
      title: 'Favorite drink?',
      slug: 'favorite-drink',
      cuid: 'cikqgkv4q01ck7453ualdn3hg',
      choices: [
        { name: 'coke', votes: 7 },
        { name: 'pepsi', votes: 3 },
      ],
    });
    const poll2 = new Poll({
      name: 'Admin',
      title: 'Favorite snack?',
      slug: 'favorite-snack',
      cuid: 'cikqgkv4q01ck7453ualdn3hh',
      choices: [
        { name: 'candy', votes: 11 },
        { name: 'chips', votes: 4 },
      ],
    });

    Poll.create([poll1, poll2], (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}
