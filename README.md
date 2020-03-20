The steps we took to create the foundation for this codebase are:

`$ npm init` - initializes a `package.json` file where the scripts and dependencies for the app will live

`$ npm install --save pg knex` - this installs `knex` locally as well as the `pg` client allowing the application to read from the local postgres database we will create
`$ knex init` - creates the knexfile.js where we configure the database connections per environment; a good idea is to copy the `knexfile.js` from this repo and change the database name at the `connection` attribute in the `development` block.

After you create the database that you wrote in the knexfile you can run the below steps. To create the database, in the terminal, run:
    - `createdb <databasename>`

1. Create a database migration for the student (notice the singularity) table.
    - `knex migrate:make create_student_table`
    - update the new file in the `/migrations` directory using the migration in this repo as a model
    - Let's make each student have:
      - first_name // string
      - last_name  // string
      - grade_point_average // integer
      - bus_rider // boolean

2. Run the migration.
    - `knex migrate:latest`

    Now the database schema is set up and you are ready to seed it!

3. Have knex create a seeds file for you
    - `knex seed:make adding_students`

4. and then seed that database:
    - `knex seed:run`

5. You are now ready to read and write from your `<databasename>` database!