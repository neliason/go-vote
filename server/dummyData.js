import Poll from './models/poll';

export default function () {
  Poll.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const poll1 = new Poll({ name: 'Admin', title: 'Favorite drink?', slug: 'favorite-drink', cuid: 'cikqgkv4q01ck7453ualdn3hg', choices: ['coke', 'pepsi'] });
    const poll2 = new Poll({ name: 'Admin', title: 'Favorite snack?', slug: 'favorite-snack', cuid: 'cikqgkv4q01ck7453ualdn3hh', choices: ['candy', 'chips'] });

    Poll.create([poll1, poll2], (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}
