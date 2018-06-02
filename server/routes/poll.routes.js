import { Router } from 'express';
import * as PollController from '../controllers/poll.controller';
import { isLoggedIn } from '../util/common';
const router = new Router();

// Get all Polls
router.route('/polls').get(PollController.getPolls);

// Get one poll by cuid
router.route('/polls/:cuid').get(PollController.getPoll);

// Add a new Poll
router.route('/polls').post(PollController.addPoll);

// Delete a poll by cuid
router.route('/polls/:cuid').delete(PollController.deletePoll);

router.route('/polls/:cuid/vote').post(PollController.voteOnPoll);

router.route('/mypolls').get(isLoggedIn, PollController.getMyPolls);

export default router;
