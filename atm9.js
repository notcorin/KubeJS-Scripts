ServerEvents.recipes(event => {
  const MOB_MODELS = [
    'drowned',
    'zombie',
    'husk',
    'skeleton',
    'stray',
    'creeper',
    'spider',
    'cave_spider',
    'enderman',
    'witch',
    'phantom',
    'blaze',
    'ghast',
    'magma_cube',
    'slime',
    'silverfish',
    'endermite',
    'pillager',
    'vindicator',
    'evoker',
    'vex',
    'ravager',
    'guardian',
    'elder_guardian',
    'ender_dragon',
    'hoglin',
    'zoglin',
    'piglin',
    'piglin_brute',
    'wither_skeleton',
    'wither',
    'warden',
    'squid',
    'artifacts/mimic',
    'allthemodium/piglich'
  ];
  MOB_MODELS.forEach(mob => {
    event.shapeless(
      Item.of('hostilenetworks:data_model', `{data_model:{data:1255,id:"hostilenetworks:${mob}"}}`),
      [
        Item.of('hostilenetworks:data_model', `{data_model:{id:"hostilenetworks:${mob}"}}`).strongNBT(),
      ]
    ).id(`hostilenetworks:${mob}_data_init`);
    console.log(`Added recipe for ${mob}`);
  });
  console.log('HSNNetwork Script Installed - notCorin');
});
