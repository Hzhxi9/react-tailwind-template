import {
    useParams,
    useLocation,
    useHistory,
    useRouteMatch,
} from 'react-router-dom';

import { useMemo } from 'react';

import qs from 'qs';

export const useRouter = () => {
    const params = useParams();
    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();
    return useMemo(() => {
        return {
            push: history.push,
            go: history.go,
            replace: history.replace,
            pathname: location.pathname,
            query: {
                ...qs.parse(location.search),
                ...params,
            },
            match,
            location,
            history,
        };
    }, [params, match, location, history]);
};