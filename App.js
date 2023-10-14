import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const App = () => {
  const [display, setDisplay] = useState("");
  const [prevValue, setPrevValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [displayShowed,setDisplayShowed] = useState(false)

  const izracunavanje = () => {
    if (operator === '+') {
      setDisplay((parseFloat(prevValue) + parseFloat(display)).toString());
    } else if (operator === '-') {
      setDisplay((parseFloat(prevValue) - parseFloat(display)).toString());
    } else if (operator === '*') {
      setDisplay((parseFloat(prevValue) * parseFloat(display)).toString());
    } else if (operator === '/') {
      if (parseFloat(display) === 0) {
        setDisplay("Dijelis sa nulom?");
      } else {
        setDisplay((parseFloat(prevValue) / parseFloat(display)).toString());
      }
    }
    else if(operator === "C"){
      setDisplay("")
      setPrevValue(0)
    }
    setDisplayShowed(true);
  };
  
  const setovanjeOperacija = (operatorr) => {
    if (display === "") {
      setDisplay("NO NUMBER IN INPUT");
    } else {
      setPrevValue(display);
      setOperator(operatorr);
      setDisplay("");
    }
  };
  
  const displayHandler = (broj) => {
    if (display === "0") {
      setDisplay(broj);
    } else {
      setDisplay(display.toString() + broj);
    }
    if(displayShowed){
      setPrevValue(0)
      setDisplay("")
      setDisplayShowed(false)
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{display}</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.row}>
          <TouchableOpacity onPress={()=> displayHandler(7)} style={styles.button} >
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> displayHandler(8)} style={styles.button} >
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> displayHandler(9)} style={styles.button} >
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setovanjeOperacija("/")} style={styles.button} >
            <Text  style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={()=> displayHandler(4)} style={styles.button} >
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> displayHandler(5)} style={styles.button}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> displayHandler(6)} style={styles.button} >
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setovanjeOperacija("*")} style={styles.button} >
            <Text  style={styles.buttonText}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={()=> displayHandler(1)} style={styles.button} >
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> displayHandler(2)} style={styles.button} >
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> displayHandler(3)} style={styles.button} >
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setovanjeOperacija("-")} style={styles.button} >
            <Text  style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => setovanjeOperacija("C")} style={styles.button} >
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> displayHandler(0)} style={styles.button} >
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => izracunavanje()} style={styles.button} >
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setovanjeOperacija("+")} style={styles.button} >
            <Text  style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  display: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 20,
  },
  displayText: {
    fontSize: 32,
  },
  buttons: {
    flex: 3,
    backgroundColor: 'lightgray',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 24,
  },
});

export default App;
