import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import MurderScreen from "./src/screens/MurderScreen";
import PeopleScreen from "./src/screens/PeopleScreen";
import GuessScreen from "./src/screens/GuessScreen";
import ObjectA from "./src/screens/ObjectA";
import ObjectB from "./src/screens/ObjectB";
import ObjectC from "./src/screens/ObjectC";
import ObjectD from "./src/screens/ObjectD";
import BackgroundScreen from "./src/screens/BackgroundScreen";
import GardenerAlibi from "./src/screens/GardenerAlibi";
import WifeAlibi from "./src/screens/WifeAlibi";
import FriendAlibi from "./src/screens/FriendAlibi";
import MistressAlibi from "./src/screens/MistressAlibi";
const navigator = createStackNavigator(
	{
		Home: HomeScreen,
		MurderScreen: MurderScreen,
		PeopleScreen: PeopleScreen,
		GuessScreen: GuessScreen,
		ObjectA: ObjectA,
		ObjectB: ObjectB,
		ObjectC: ObjectC,
		ObjectD: ObjectD,
		BackgroundScreen: BackgroundScreen,
		Wife: WifeAlibi,
		Friend: FriendAlibi,
		Gardener: GardenerAlibi,
		Mistress: MistressAlibi,
	},
	{
		initialRouteName: "Home",
		defaultNavigationOptions: {
			title: "App",
		},
	}
);

export default createAppContainer(navigator);
