import Home from "./HomeScreen"
import Profile from "./Profile"
import Setting from "./Dangky"
import CustomDrawerBar from "./CustomDrawerBar"
import { createDrawerNavigator } from "@react-navigation/drawer"

const Drawer = createDrawerNavigator()

const MyDrawer = () => {
    return (
        <Drawer.Navigator
            drawerContent={props =>
                <CustomDrawerBar {...props} />
            }
        >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Setting" component={Setting} />
        </Drawer.Navigator>
    )
}

export default MyDrawer