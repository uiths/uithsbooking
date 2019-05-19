import Loadable from 'react-loadable';
import Loading from 'component/Loading';

const LoadableComponent = Loadable({
    loader: () => import('./home'),
    loading: Loading
});

export default LoadableComponent;