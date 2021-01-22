const config = require('./ayarlar.json')
const { ShardingManager } = require('discord.js');

const shard = new ShardingManager('./bot.js', {
    totalShards: 2, 
    token: config.token
});
shard.spawn();

shard.on('shardCreate', shard => {
    console.log(`#${shard.id} shard started`);
});
