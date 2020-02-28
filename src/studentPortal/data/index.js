import faker from 'faker';

import shortid from 'shortid';

const students = [];

const DEPT = ['CSE', 'EEE', 'IPE', 'BBA', 'ARCH'];

for (let i = 0; i < 5; i++) {
  const student = {};
  student.id = shortid.generate();
  student.name = faker.name.findName();
  const rendomInddex = Math.floor(Math.random() * DEPT.length);
  student.dept = DEPT[rendomInddex];
  students.push(student);
}

export default students;
