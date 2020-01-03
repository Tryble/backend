const faker = require("faker");

const createFakeProject = () => ({
  name: faker.lorem.words(),
  upvotes: faker.random.number(),
  headline: faker.lorem.words(),
  description: faker.lorem.words()
})

exports.seed = async function(knex) {
  const fakeProjects = [];
  const desiredFakeProjects = 50;
  await knex('projects').del()
  for (let i = 0; i < desiredFakeProjects; i++) {
    fakeProjects.push(createFakeProject());
  }
  await knex("projects")
    .insert(fakeProjects)
};