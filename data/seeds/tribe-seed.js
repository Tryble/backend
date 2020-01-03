const faker = require("faker");

const createFakeTribe = () => ({
  name: faker.lorem.words(),
  imgUrl: faker.image.cats()
})

exports.seed = async function(knex) {
  const fakeTribes = [];
  const desiredFakeTribes = 50;

  await knex('tribes').del()
  for (let i = 0; i < desiredFakeTribes; i++) {
    fakeTribes.push(createFakeTribe());
  }
  await knex("tribes")
    .insert(fakeTribes)
};
