const faker = require("faker");

const createFakeTribe = () => ({
  name: faker.lorem.words(),
  imgUrl: faker.image.abstract()
})

exports.seed = async function(knex) {
  const fakeTribes = [];
  const desiredFakeTribes = 50;
  for (let i = 0; i < desiredFakeTribes; i++) {
    fakeTribes.push(createFakeTribe());
  }
  await knex("tribes")
    .insert(fakeTribes)
};
