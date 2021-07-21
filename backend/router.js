const Router = require('@koa/router');
const router = new Router();
const tokens = require('./tokens.json');

// http://localhost:3000/:tokenId

router.get('/:tokenId', async (ctx, next) => {
  const token = tokens[ctx.params.tokenId];
  if(typeof token === 'undefined') {
    ctx.status = 400;
    ctx.body = {
      error: `tokenId ${ctx.params.tokenId} does not exist`
    };
    return;
  }

  ctx.body = {
    tokenId: ctx.params.tokenId,
    result: token
  };
});

module.exports = router;
