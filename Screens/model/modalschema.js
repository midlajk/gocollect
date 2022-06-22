import Realm from 'realm';

export const Owner_Schema = {
  name: 'Owner_Schema',
  properties: {
    id: 'int',
    name: "string",
    phone: "string",
    place: "string",
    bus:'Bus_Schema[]',
    collections:'Collection[]'

  },
  primaryKey: 'name'


};
export const Bus_Schema = {
    name: 'Bus_Schema',
    properties: {
      id: 'int',
      name: "string",
      number: "string",
      phone: "string",
      collection:'Collection[]',
      assignee: {
        type: 'linkingObjects',
        objectType: 'Owner_Schema',
        property: 'bus'
      },

    },
    primaryKey: 'number'

  };
  export const Collection = {
    name: 'Collection',
    properties: {
      id: 'int',
      c_name: "string",
      c_date: "date",
      c_vehicle: "string",
      c_type: "string",
      c_amount: "int",
      // c_category: "string",
      // c_collector: "string",
      assignee: {
        type: 'linkingObjects',
        objectType: 'Bus_Schema',
        property: 'collection'
      },
      owner: {
        type: 'linkingObjects',
        objectType: 'Owner_Schema',
        property: 'collections'
      }
    },
  };


// export const TodoList_Schema = {
//   name: TODOLIST_SCHEMA,
//   primaryKey: 'id',
//   properties: {
//     id: 'int',
//     name: 'string',
//     creationDate: 'date',
//     todos: {type: 'list', objectType: TODO_SCHEMA},
//   },
// };

const databaseOptions = {
  schema: [Owner_Schema,Bus_Schema,Collection]
};

///////////// Collection insertion /////////////

export const insertcollection = (collection) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          realm.create('Collection', collection);
          resolve();

        });
      })
      .catch(error => reject(error));
  });
  export const queryallcollection = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let allcollection = realm.objects('Collection').filtered("c_name == 'Owners fee'");;
          resolve(allcollection);
        });
      })
      .catch(error => reject(error));
  });

  export const insertbuscollection = data =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let busdata = realm.objectForPrimaryKey(
            'Bus_Schema',
            data.cd,
          );
          busdata.collection.push(data.collection);
          resolve();
        });
      })
      .catch(error => alert("couldn't add the data please check if the data already exist"));
  });








  ///////////// Collection insertion /////////////
//////////////owner ///////////////////
export const inserOwner = (newowner) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {

          let allowner = realm.objects('Owner_Schema');
             realm.create('Owner_Schema', newowner);
            resolve(); 
        
        
        });
      })
      .catch(error => alert("couldn't add the data please check if the data already exist"));
  });
  export const queryallowner = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let allowner = realm.objects('Owner_Schema');
          resolve(allowner);
        });
      })
      .catch(error => reject(error));
  });

  export const findowner = data =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let checkowner = realm.objectForPrimaryKey(
            'Owner_Schema',
            data,
          );
          resolve(checkowner);
        });
      })
      .catch(error => reject(error));
  });

export const deleteowner = data =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let deletingdata = realm.objectForPrimaryKey(
            'Owner_Schema',
            data,
          );
          realm.delete(deletingdata);
          resolve();
        });
      })
      .catch(error => alert('some error occured'));
  });
  /////////////////////insert bus///////////////////////////////
  // export const insertnewbus = (newbus) =>
  // new Promise((resolve, reject) => {
  //   Realm.open(databaseOptions)
  //     .then(realm => {
  //       realm.write(() => {
          
  //         realm.create('Bus_Schema', newbus);
  //         resolve();
     
  //       });
  //     })
  //     .catch(error => alert("couldn't add the data please check if the data already exist"));
  // });
  export const updateownerbus = data =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let ownerdata = realm.objectForPrimaryKey(
            'Owner_Schema',
            data.id,
          );
          ownerdata.bus.push(data.bus);
          resolve();
        });
      })
      .catch(error => alert("couldn't add the data please check if the data already exist"));
  });
  export const queryallbus = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let allbus = realm.objects('Bus_Schema');
          resolve(allbus);
        });
      })
      .catch(error => reject(error));
  });
  export const deletebus = data =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let deletingdata = realm.objectForPrimaryKey(
            'Bus_Schema',
            data,
          );
          realm.delete(deletingdata);
          resolve();
        });
      })
      .catch(error => alert('some error occured'));
  });
  export const findbus = data =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let findbus = realm.objectForPrimaryKey(
            'Bus_Schema',
            data,
          );
          resolve(findbus);
        });
      })
      .catch(error => reject(error));
  });


////////////////////////////////////


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


  //////////////Home Data /////////

  export const todaysum = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {

          var startdate = new Date();
          startdate.setHours(0,0,0,0);
          startdate.setHours(startdate.getHours() + 5);
          startdate.setMinutes(startdate.getMinutes() + 30);
          var enddate = new Date()
          enddate.setHours(23,59,59,999);
          enddate.setHours(enddate.getHours() + 5);
          enddate.setMinutes(enddate.getMinutes() + 30);
          let allcollection = realm.objects('Collection').filtered('c_date >= $0 && c_date <= $1', startdate, enddate)
          let total = allcollection.sum('c_amount');
          let ownersfee = allcollection.filtered("c_name == 'Owners fee'").sum('c_amount');
          let Tyrecost = allcollection.filtered("c_name == 'Tyre Collection'").sum('c_amount');
          let Taxcollection = allcollection.filtered("c_name == 'Tax Collection'").sum('c_amount');
          var data = {
            total:total,
            ownersfee:ownersfee,
            Tyrecost:Tyrecost,
            Taxcollection:Taxcollection
          }
          resolve(data);
        
      })
      .catch(error => reject(error));
  });
  ///////Admin //////////
  export const tempdata = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {

          var startdate = new Date();
          startdate.setHours(0,0,0,0);
          startdate.setHours(startdate.getHours() + 5);
          startdate.setMinutes(startdate.getMinutes() + 30);
          var enddate = new Date()
          enddate.setHours(23,59,59,999);
          enddate.setHours(enddate.getHours() + 5);
          enddate.setMinutes(enddate.getMinutes() + 30);
          let allcollection = realm.objects('Collection').filtered('c_date >= $0 && c_date <= $1 AND c_vehicle CONTAINS "TEMP"', startdate, enddate)
          let data = allcollection.sum('c_amount');
        
          resolve({data:allcollection,sum:data});
        
      })
      .catch(error => reject(error));
  });


  ///////////////bus collection /////////////
  export const buscollectionquery = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {

          var startdate = new Date();
          startdate.setHours(0,0,0,0);
          startdate.setHours(startdate.getHours() + 5);
          startdate.setMinutes(startdate.getMinutes() + 30);
          var enddate = new Date()
          enddate.setHours(23,59,59,999);
          enddate.setHours(enddate.getHours() + 5);
          enddate.setMinutes(enddate.getMinutes() + 30);
           let allbus = realm.objects('Bus_Schema')
          let allcollection = realm.objects('Collection').filtered('c_date >= $0 && c_date <= $1', startdate, enddate)
          let sum = allcollection.sum('c_amount');
          let tempvehiclesum = realm.objects('Collection').filtered('c_date >= $0 && c_date <= $1 AND c_vehicle CONTAINS "TEMP"', startdate, enddate).sum('c_amount')
          var buswithsum = [];
          allbus.forEach(element => {

            var collection = element.collection.filtered('c_date >= $0 && c_date <= $1', startdate, enddate).sum('c_amount')
            element.sum = collection;
            buswithsum.push(element)
          });
          resolve({data:buswithsum,sum:sum,tempvehiclesum:tempvehiclesum});
      

        
      })
      .catch(error => reject(error));
  });

//////owner collection ////////////
  export const ownercollectionquery = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {

          var startdate = new Date();
          startdate.setHours(0,0,0,0);
          startdate.setHours(startdate.getHours() + 5);
          startdate.setMinutes(startdate.getMinutes() + 30);
          var enddate = new Date()
          enddate.setHours(23,59,59,999);
          enddate.setHours(enddate.getHours() + 5);
          enddate.setMinutes(enddate.getMinutes() + 30);
           let allowner = realm.objects('Owner_Schema')
          let allcollection = realm.objects('Collection').filtered('c_date >= $0 && c_date <= $1', startdate, enddate)
          let sum = allcollection.sum('c_amount');

          let tempvehiclesum = realm.objects('Collection').filtered('c_date >= $0 && c_date <= $1 AND c_vehicle CONTAINS "TEMP"', startdate, enddate).sum('c_amount')
          var ownerwithsum = [];
          allowner.forEach(element => {
            var collect = 0;
            element.bus.forEach(coll => {
            var collectionsum = coll.collection.filtered('c_date >= $0 && c_date <= $1', startdate, enddate).sum('c_amount')
            collect = collect+collectionsum;
          });
          element.sum = collect;
          ownerwithsum.push(element)
        });
          resolve({data:ownerwithsum,sum:sum,tempvehiclesum:tempvehiclesum});
      

        
      })
      .catch(error => reject(error));
  });
///////////////////bus wide stand fee collection ////////////
export const busstandfeequery = () =>
new Promise((resolve, reject) => {
  Realm.open(databaseOptions)
    .then(realm => {

        var startdate = new Date();
        startdate.setHours(0,0,0,0);
        startdate.setHours(startdate.getHours() + 5);
        startdate.setMinutes(startdate.getMinutes() + 30);
        var enddate = new Date()
        enddate.setHours(23,59,59,999);
        enddate.setHours(enddate.getHours() + 5);
        enddate.setMinutes(enddate.getMinutes() + 30);
         let allbus = realm.objects('Bus_Schema')
        let allcollection = realm.objects('Collection').filtered('c_date >= $0 && c_date <= $1 AND c_name == "Owners fee"', startdate, enddate)
        let sum = allcollection.sum('c_amount');
        let tempvehiclesum = realm.objects('Collection').filtered('c_date >= $0 && c_date <= $1 AND c_vehicle CONTAINS "TEMP"', startdate, enddate).sum('c_amount')
        var buswithsum = [];
        allbus.forEach(element => {

          var collection = element.collection.filtered('c_date >= $0 && c_date <= $1 AND c_name == "Owners fee"', startdate, enddate).sum('c_amount')
          element.sum = collection;
          buswithsum.push(element)
        });
        resolve({data:buswithsum,sum:sum,tempvehiclesum:tempvehiclesum});
    

      
    })
    .catch(error => reject(error));
});
///////////////////bus wise tyre fee collection ////////////
export const bustyrecollection = () =>
new Promise((resolve, reject) => {
  Realm.open(databaseOptions)
    .then(realm => {

        var startdate = new Date();
        startdate.setHours(0,0,0,0);
        startdate.setHours(startdate.getHours() + 5);
        startdate.setMinutes(startdate.getMinutes() + 30);
        var enddate = new Date()
        enddate.setHours(23,59,59,999);
        enddate.setHours(enddate.getHours() + 5);
        enddate.setMinutes(enddate.getMinutes() + 30);
         let allbus = realm.objects('Bus_Schema')
        let allcollection = realm.objects('Collection').filtered('c_date >= $0 && c_date <= $1 AND c_name == "Tyre Collection" AND c_type="payment"', startdate, enddate)
        let paid = realm.objects('Collection').filtered('c_date >= $0 && c_date <= $1 AND c_name == "Tyre Collection" AND c_type="paid"', startdate, enddate).sum('c_amount');
        let sum = allcollection.sum('c_amount');
      
        var buswithsum = [];
        allbus.forEach(element => {

          var collection = element.collection.filtered('c_date >= $0 && c_date <= $1 AND c_name == "Tyre Collection"', startdate, enddate).sum('c_amount')
          element.sum = collection;
          buswithsum.push(element)
        });
        resolve({data:buswithsum,sum:sum,paid:paid});
    

      
    })
    .catch(error => reject(error));
});

///////////////////bus wise tyre fee collection ////////////
export const bustaxcollection = () =>
new Promise((resolve, reject) => {
  Realm.open(databaseOptions)
    .then(realm => {

        var startdate = new Date();
        startdate.setHours(0,0,0,0);
        startdate.setHours(startdate.getHours() + 5);
        startdate.setMinutes(startdate.getMinutes() + 30);
        var enddate = new Date()
        enddate.setHours(23,59,59,999);
        enddate.setHours(enddate.getHours() + 5);
        enddate.setMinutes(enddate.getMinutes() + 30);
         let allbus = realm.objects('Bus_Schema')
        let allcollection = realm.objects('Collection').filtered('c_date >= $0 && c_date <= $1 AND c_name == "Tax Collection" AND c_type="payment"', startdate, enddate)
        let paid = realm.objects('Collection').filtered('c_date >= $0 && c_date <= $1 AND c_name == "Tax Collection" AND c_type="paid"', startdate, enddate).sum('c_amount');
        let sum = allcollection.sum('c_amount');
      
        var buswithsum = [];
        allbus.forEach(element => {

          var collection = element.collection.filtered('c_date >= $0 && c_date <= $1 AND c_name == "Tax Collection"', startdate, enddate).sum('c_amount')
          element.sum = collection;
          buswithsum.push(element)
        });
        resolve({data:buswithsum,sum:sum,paid:paid});
    

      
    })
    .catch(error => reject(error));
});