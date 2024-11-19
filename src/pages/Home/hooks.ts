import { useMainNavigation } from '../../hooks';

const Hooks = () => {
    const { navigation } = useMainNavigation();
    const navigateToDetails = (id: number) => navigation.navigate('Details', { id: id });

    return {
        navigateToDetails
    };
};

export default Hooks;
