import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator,StyleSheet,TouchableOpacity } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';

class FlatListDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [{title:'KL 12 B 1212',Name:'N M S'},{title:'KL 12 B 121',Name:'N M K'},{title:'KL 12 B 221',Name:'NIZZAMUDDIN'},{title:'KL 12 C 121',Name:'FANTASTIC'}],
      error: null,
    };

    this.arrayholder = [];
  }

 

//   makeRemoteRequest = () => {
//     const url = `https://randomuser.me/api/?&results=20`;
//     this.setState({ loading: true });

//     fetch(url)
//       .then(res => res.json())
//       .then(res => {
//         this.setState({
//           data: res.results,
//           error: res.error || null,
//           loading: false,
//         });
//         this.arrayholder = res.results;
//       })
//       .catch(error => {
//         this.setState({ error, loading: false });
//       });
//   };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };

  searchFilterFunction = text => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.name.title.toUpperCase()} ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
        icon='false'

      />
    );
  };

  render() {
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <View style={styles.shadow}>
            <TouchableOpacity style={styles.button}
                     onPress={() => {
                        /* 1. Navigate to the Details route with params */
                        this.props.navigation.navigate('Home Tabs', {
                          itemId: item.title,
                        });
                      }}
              >
            <View>
                <Text style={styles.text}>{item.title}</Text>
                <Text >{item.Name}</Text>
           
                </View>
                </TouchableOpacity>
                </View>
          )}
          keyExtractor={item => item.title}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}

export default FlatListDemo;
const styles = StyleSheet.create({
   
    text: {
         color:'#000',
         fontSize:16,

       },
       button: {
         width:'90%',height:80,backgroundColor:'#fff',justifyContent:'center',alignItems:'center',
         padding:20,
         flexDirection:'row',justifyContent:'space-between',
         shadowColor:'#000',
            shadowOffset:{
                width:0,
                height:10
            },
            shadowOpacity:0.25,
            shadowRadius:3.5,
            elevation:3,
        },
        shadow:{
            
            alignItems:'center',margin:5
        }
   
  })