import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AboutUs from './pages/AboutUs';
import QuickInfo from './pages/QuickInfo';
import News from './pages/News';
import Announcements from './pages/Announcements';
import FastImages from './components/FastImages';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="About Us" component={AboutUs} />
        <Drawer.Screen name="QuickInfo" component={QuickInfo} />
        <Drawer.Screen name="News" component={News} />
        <Drawer.Screen name="Announcements" component={Announcements} />
        <Drawer.Screen name="Images" component={FastImages} />
        {/* <Drawer.Screen name="QR" component={Scanner} /> */}
        {/* <Drawer.Screen name="Battery" component={BatteryCheck} /> */}
        {/* <Drawer.Screen name="Api" component={ApiCall} /> */}
        {/* <Drawer.Screen name="HostPage" component={HostPage} /> */}
        {/* <Drawer.Screen name="HomePage" component={HomePage} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
