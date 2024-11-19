import { useMainRouter } from '../../hooks';

const Hooks = () => {
    const { params } = useMainRouter('Details');
    const incomingId = params.id;
    // OR
    const { id } = params;

    return {
        id,
        incomingId,
    };
};

export default Hooks;
