module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'avaliations',
      [
        {
          admin_id: 1,
          employee_id: 2,
          avaliation: 'this employee is better with back end than front end.',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
