import User from './User';

let factories = [];

factories.push(User);

export default (factoryInstance) => {
  factories.forEach(factory => factory(factoryInstance));
};
