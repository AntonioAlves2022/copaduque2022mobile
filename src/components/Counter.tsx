import {useState} from "react";
import {Center, Text, Button} from "native-base";
export function Counter(){
    const [counter, setCounter] = useState(0);
    return(
        <Center>
            <Text>Contador:{counter} </Text>
            <Button onPress={() => setCounter(counter +1)}>
                <Text>Iniciar</Text>
            </Button>
        </Center>
    );
}