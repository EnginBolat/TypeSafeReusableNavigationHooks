import { RouteProp, useRoute } from '@react-navigation/native';
import { MainNavigationParams } from '../stack/MainNavigation';

const useMainRouter = <T extends keyof MainNavigationParams>(key: T) => {
    const router = useRoute<RouteProp<MainNavigationParams, typeof key>>();
    const params = router.params;

    return { params };
};

export default useMainRouter;

