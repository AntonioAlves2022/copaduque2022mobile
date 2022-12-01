import { Text, Center, NativeBaseProvider } from 'native-base';
import { Counter } from './src/components/Counter';

export default function App() {
  return (
    <NativeBaseProvider>
      <Center>
        <Text>Duque 2022</Text>
        <Counter/>
      </Center>
    </NativeBaseProvider>
  );
}

