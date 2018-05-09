import Poll from '../models/poll';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all polls
 * @param req
 * @param res
 * @returns void
 */
export function getPolls(req, res) {
  Poll.find().sort('-dateAdded').exec((err, polls) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ polls });
  });
}

/**
 * Save a poll
 * @param req
 * @param res
 * @returns void
 */
export function addPoll(req, res) {
  if (!req.body.poll.name || !req.body.poll.title || !req.body.poll.choices) {
    res.status(403).end();
  }
  const newPoll = new Poll(req.body.poll);

  // Let's sanitize inputs
  newPoll.title = sanitizeHtml(newPoll.title);
  newPoll.name = sanitizeHtml(newPoll.name);
  newPoll.choices = newPoll.choices.map(choice => {
    return { name: sanitizeHtml(choice), votes: 0 };
  });
  newPoll.slug = slug(newPoll.title.toLowerCase(), { lowercase: true });
  newPoll.cuid = cuid();
  newPoll.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ poll: saved });
  });
}

/**
 * Get a single poll
 * @param req
 * @param res
 * @returns void
 */
export function getPoll(req, res) {
  Poll.findOne({ cuid: req.params.cuid }).exec((err, poll) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ poll });
  });
}

/**
 * Delete a poll
 * @param req
 * @param res
 * @returns void
 */
export function deletePoll(req, res) {
  Poll.findOne({ cuid: req.params.cuid }).exec((err, poll) => {
    if (err) {
      res.status(500).send(err);
    }

    poll.remove(() => {
      res.status(200).end();
    });
  });
}

export function voteOnPoll(req, res) {
  console.log('voteOnPoll req.params:', req.params);
  console.log('voteOnPoll req.body:', req.body);
  Poll.findOne({ cuid: req.params.cuid }).exec((findErr, poll) => {
    if (findErr) {
      res.status(500).send(findErr);
    }
    poll.choices[req.body.indexOfChoice].votes += 1;
    poll.save((saveErr, updatedPoll) => {
      if (saveErr) {
        res.status(500).send(saveErr);
      }
      res.json(updatedPoll);
    });
  });
}
