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
  const pollTitle = sanitizeHtml(req.body.poll.title);
  const pollName = sanitizeHtml(req.body.poll.name);
  const pollChoices = req.body.poll.choices.map(choice => {
    return { name: sanitizeHtml(choice), votes: 0 };
  });
  const pollSlug = slug(pollTitle.toLowerCase(), { lowercase: true });
  const pollCuid = cuid();
  const poll = {
    title: pollTitle,
    name: pollName,
    choices: pollChoices,
    slug: pollSlug,
    cuid: pollCuid,
  };
  const newPoll = new Poll(poll);

  newPoll.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
      return;
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
