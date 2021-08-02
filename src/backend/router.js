const Router = require('@koa/router');
const { TokenFlags } = require('typescript');
const router = new Router();
const tokens = require('./tokens.json');

// http://localhost:3000/tokens

router.get('/tokens', async (ctx, next) => {
  if(typeof tokens === 'undefined') {
    ctx.status = 400;
    ctx.body = {
      error: `no tokens exist`
    };
    return;
  }

  ctx.body = {
    result: [tokens]
  };
});

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
