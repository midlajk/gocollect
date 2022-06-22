import Realm from 'realm';

export const Collection_Schema = {
  name: 'Collection_Schema',
  properties: {
    id: 'int',
    bus: "string",
    category: "string",
    price: "string",
    date: "date",
  },
};


const databaseOptions = {
  schema: [Collection_Schema]
};

export const insertNewCollection= (newowner) =>
  new Promise((resolve, reject) => {
    Realm.open({schema:[Collection_Schema]})
      .then(realm => {
        realm.write(() => {
          realm.create('Collection_Schema', newowner);
          resolve();

        });
      })
      .catch(error => reject(error));
  });
 
export const updateTodoList = todoList =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let updatingTodoList = realm.objectForPrimaryKey(
            TODOLIST_SCHEMA,
            todoList.id,
          );
          updatingTodoList.name = todoList.name;
          resolve();
        });
      })
      .catch(error => reject(error));
  });

export const deleteTodoList = todoListId =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let deletingTodoList = realm.objectForPrimaryKey(
            TODOLIST_SCHEMA,
            todoListId,
          );
          realm.delete(deletingTodoList);
          resolve();
        });
      })
      .catch(error => reject(error));
  });

export const deleteAllTodoLists = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let allTodoLists = realm.objects('Owner_Schema');
          realm.delete(allTodoLists);
        });
      })
      .catch(error => console.log(err));
  });

export const filterTodoLists = searchedText =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        let filteredTodoLists = realm
          .objects(TODOLIST_SCHEMA)
          .filtered(`name CONTAINS[c] "${searchedText}"`); //[c] = case insensitive
        resolve(filteredTodoLists);
      })
      .catch(err => reject(err));
  });
  export const queryAllCollection = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let allTodoLists = realm.objects('Collection_Schema');
          resolve();
        });
      })
      .catch(error => reject(error));
  });
