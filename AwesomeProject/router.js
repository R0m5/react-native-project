import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import PostsScreen from "./Screens/PostsScreen";
import CreatePostsScreen from "./Screens/CreatePostsScreen";
import ProfileScreen from "./Screens/ProfileScreen";

const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

export const mainTabs = () => {
  return (
    <MainTab.Navigator
      screenOptions={{
        activeTintColor: "#FFFFFF",
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: "#FF6C00",
        tabBarStyle: {
          height: 60,
          paddingRight: 60,
          paddingLeft: 60,
        },
        tabBarItemStyle: {
          borderRadius: 50,
          marginVertical: 8,
        },
        tabBarActiveTintColor: "#ffffff",
        tabBarLabelStyle: { display: "none" },
      }}>
      <MainTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Feather name="grid" size={24} color={color} />
          ),
          headerRight: () => (
            <Feather
              name="log-out"
              style={{ paddingRight: 10, alignItems: "center" }}
              size={24}
              color="#BDBDBD"
            />
          ),
        }}
      />
      <MainTab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Feather name="plus" size={24} color={color} />
          ),
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};

const HomeStack = createNativeStackNavigator();

export const useRouting = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName="Registration">
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
      </AuthStack.Navigator>
    );
  } else {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={mainTabs}
        />
      </HomeStack.Navigator>
    );
  }
};
