import { Router } from 'express';
import * as PollController from '../controllers/poll.controller';
const router = new Router();

// Get all Polls
router.route('/polls').get(PollController.getPolls);

// Get one poll by cuid
router.route('/polls/:cuid').get(PollController.getPoll);

// Add a new Poll
router.route('/polls').post(PollController.addPoll);

// Delete a poll by cuid
router.route('/polls/:cuid').delete(PollController.deletePoll);

export default router;
