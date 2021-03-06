import {StyleSheet} from 'react-native';
export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    padding: 60,
    paddingLeft: 0,
    paddingRight: 0,
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    fontSize: 26,
    width: 150,
    height: 150,
    color: 'white',
    borderRadius: 100,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  backgroungImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.2,
  },
  inputView: {
    backgroundColor: '#f5f5f5',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  buttons: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    color: '#FFF',
    backgroundColor: '#444444',
  },
  nextBtnStyle: {
    width: '90%',
    padding: 20,
    margin: 5,
    borderRadius: 30,  
    alignSelf:'center',  
    zIndex: 9999,
    color: '#FFFFFF',
    textAlign:'center'
  },
  block: {
      width: '100%',
      textAlign:'center',
  }
});
