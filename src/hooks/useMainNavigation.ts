import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MainNavigationParams } from '../stack/MainNavigation';

const useMainNavigation = () => {
    const navigation = useNavigation<NavigationProp<MainNavigationParams>>();

    return { navigation };
};
export default useMainNavigation;
