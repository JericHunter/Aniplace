import data from './anime-data.json';

data.forEach((obj, id) => { obj.id = id });

export default data;