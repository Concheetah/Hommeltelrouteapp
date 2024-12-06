import { View, Text } from "react-native";

import Amplify from "aws-amplify/core";
import config from "./src/aws-exports";

Amplify.configure(config);

const App = () => {
  return (
    <View>
      <Text>Hello World</Text>
    </View>
  );
};
export default App;